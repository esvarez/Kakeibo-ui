import { AccountType } from './AccountType';

export interface Movement {
   id?: Number
   accountName: String
   amount: Number
   categoryName: String
   categoryType: String
   description: String
   date: String   
}