export interface appSliceModel {
    housePrice:number,
    interestRate:number,
    downPayment:number,
    years:number
}

export interface appSliceSelector {
    app:appSliceModel
}