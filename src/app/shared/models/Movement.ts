import { Category } from './Category';

export interface Movement {
   id?: Number;
   amount: Number;
   accountName?: null;   
   category: Category;
   description?: String;
   date: String;
}
