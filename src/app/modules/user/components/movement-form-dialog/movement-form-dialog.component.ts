import { Component, OnInit, OnDestroy } from '@angular/core';
import { MovementService } from 'src/app/core/services/movement.service';
import { MatDialogRef } from '@angular/material';
import { Account, Category, IMovementSaveRequest } from 'src/app/shared/models';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Subscription } from 'rxjs';
import { Store } from '@ngrx/store';
import { State } from 'src/app/reducers';
import { CategoryService } from 'src/app/core/services/category.service';
import { SetCategoriesAction } from '../../user.actions';
import { MovementType } from 'src/app/shared/enums/movement-type';
import { filter, take } from 'rxjs/operators';

@Component({
  selector: 'kui-movement-form-dialog',
  templateUrl: './movement-form-dialog.component.html',
  styleUrls: ['./movement-form-dialog.component.scss']
})
export class MovementFormDialogComponent implements OnInit, OnDestroy {

  private userId: Number  
  private accounts: Account[]  
  private categories: Category[] = null
  private allCategories: Category[] = null
  private userSubscription: Subscription
  private selectsSubscription: Subscription
  

  constructor(private movementService: MovementService,
              private categoryService: CategoryService,
              private store: Store<State>,
              public dialogRef: MatDialogRef<MovementFormDialogComponent>) { }

  ngOnInit() {    
    this.userSubscription = this.store.select('userState')
      .subscribe(state => this.userId = state.user.id )    
    this.selectsSubscription = this.store.select('userState')
      .subscribe(state => {        
        this.accounts = state.accounts 
        this.allCategories = state.categories        
        this.movementType.setValue(state.movementType)
        if (state.accountSelected != null) {
          this.account.setValue(state.accountSelected.id)          
        }        
      })      
    if (this.allCategories == null){
      this.setCategories()
    } else {
      this.filterCategories()
    }
  }

  movementForm = new FormGroup({
    movementType: new FormControl('', Validators.required),
    account: new FormControl('', Validators.required),
    category: new FormControl('', Validators.required),
    amount: new FormControl('', [Validators.required]),
    description: new FormControl(''),
    date: new FormControl(''),
    time: new FormControl('')
  })
  
  get movementType() { return this.movementForm.get('movementType') }
  get account() { return this.movementForm.get('account') }
  get category() { return this.movementForm.get('category') }
  get amount() { return this.movementForm.get('amount') }
  get description() { return this.movementForm.get('description') }
  get date() { return this.movementForm.get('date') }
  get time() { return this.movementForm.get('time') }

  private setCategories() {
    this.categoryService.getCategoriesFromUserId(this.userId)       
      .pipe( take(1) )           
      .subscribe(res => { 
        res.sort( (a, b) => (a.name > b.name)? 1 : -1 )                
        console.log('Consulando Categorias DB')                        
        this.store.dispatch(new SetCategoriesAction(res))
        this.filterCategories()
      })
  }

  sendForm() {
    if (this.movementForm.valid){
      const accountId = this.account.value;
      const movementSaveRequest: IMovementSaveRequest = {
        amount: this.amount.value,
        category: {
          id: this.category.value
        },
        description: this.description.value,
        date: this.date.value
      }      
      console.log("Send")
      this.movementService.postMovement(accountId, movementSaveRequest).subscribe()
    } else {
      console.log(this.movementForm.value)
    }
  }

  changeCategories(){        
    this.filterCategories()
  }

  private filterCategories(){    
    this.categories = this.allCategories
      .filter(category => category.category === this.movementType.value )         
  }

  ngOnDestroy(): void {
    this.userSubscription.unsubscribe()
    this.selectsSubscription.unsubscribe()
  }
}
