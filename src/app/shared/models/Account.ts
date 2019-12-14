export interface IAccount {
   id?: Number;
   name: String;
   amount: Number;
   description?: String;
}

export class Account implements IAccount {
   id?: Number;   
   name: String;
   amount: Number;
   description?: String;
   constructor(account: IAccount){
      this.id           = account && account.id          || null
      this.name         = account && account.name        || null
      this.amount       = account && account.amount      || null
      this.description  = account && account.description || null
   }

}
