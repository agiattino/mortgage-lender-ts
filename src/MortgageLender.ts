export default class MortgageLender {
    availableFunds:number = 0;
    private _addFunds: number = 0;
    constructor() {
    }

    public get addFunds() {
        console.log(this._addFunds);
        return this._addFunds;

    }

    public set addFunds(depositAmt: number){
        this._addFunds = depositAmt;
    }
            
    addFunds(_addFunds: number):number {
      this._availableFunds += this._addFunds;
      return this._availableFunds;
    }


}

