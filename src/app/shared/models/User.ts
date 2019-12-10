export interface IUser {
   id?: Number
   user: String 
}

export class User implements IUser {
   id?: Number;
   user: String;
   constructor(user: IUser){
      this.id = user && user.id || null
      this.user = user && user.user || null
   }
}
