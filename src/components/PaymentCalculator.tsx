import { set } from "immer/dist/internal"
import { useEffect, useState } from "react"
import { useSelector } from "react-redux"
import { appSliceSelector } from "../Models/App.slice.model"

const PaymentCalculator = () => {
    const [monthlyPayment, setMonthlyPayment] = useState(0)
    const interestRate = useSelector((state:appSliceSelector )=>state.app.interestRate)
    const years = useSelector((state:appSliceSelector )=>state.app.years)
    const housePrice = useSelector((state:appSliceSelector )=>state.app.housePrice)
    const downPayment = useSelector((state:appSliceSelector )=>state.app.downPayment)

    const calculateMonthlyPayment = () =>{
        const i = interestRate/100/12
        const P = housePrice-downPayment
        const n = years *12
        const x = i * n
        let topHalf =  i * (1+i)^n
        let bottomHalf = ((1+i)^n) - 1
      const monthly = P *(topHalf/bottomHalf)
       console.log(monthly/n)
    }

  

    return <>
    <button onClick={calculateMonthlyPayment}>Calculate</button>
    {monthlyPayment? <h2> Your estimated monthly payment would be ${monthlyPayment}</h2> : <></>}
    </>
}

export default PaymentCalculator