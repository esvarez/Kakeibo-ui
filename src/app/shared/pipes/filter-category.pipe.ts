import { Pipe, PipeTransform } from '@angular/core';
import { Category } from '../models';
import { MovementType } from '../enums/movement-type';
import { Store } from '@ngrx/store';
import { State } from 'src/app/reducers';
import { Subscription } from 'rxjs';

@Pipe({
  name: 'filterCategory'
})
export class FilterCategoryPipe implements PipeTransform {
  private movementType: MovementType
  private subscriber: Subscription
  constructor(private store:Store<State>) {}

  transform(categories: Category[]): Category[] {
    console.log(categories)
    this.subscriber = this.store.select('userState')
      .subscribe(state => this.movementType = state.movementType )
    console.log(this.movementType)
    this.subscriber.unsubscribe()
    return categories.filter(category => category.category == this.movementType );
  }

}
