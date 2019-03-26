import { Component, OnInit, OnDestroy } from '@angular/core';
import { Store } from '@ngrx/store';
import { AppState } from '../../store/store';
import { Order, OrderBookModel } from '../../interfaces/order';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { OrderService } from '../../services/order.service';
import { OrderForm } from '../../interfaces/order-form';
import { NotifierService } from 'angular-notifier';
import { HttpErrorResponse } from '@angular/common/http';
import {
  NotificationResults,
  NotificationAlerts
} from '../../utils/notificationEnums';
import { ResponseBody } from 'src/app/interfaces/response-body';
import { Book } from 'src/app/interfaces/book';
import { Subscription } from 'rxjs';

@Component({
  selector: 'order',
  templateUrl: './order.component.html',
  styleUrls: ['./order.component.scss']
})
export class OrderComponent implements OnInit, OnDestroy {
  book: OrderBookModel;
  subscription = new Subscription();
  orderForm = new FormGroup({
    firstName: new FormControl('', [
      Validators.required,
      Validators.minLength(4),
      Validators.maxLength(50)
    ]),
    lastName: new FormControl('', [
      Validators.required,
      Validators.minLength(5),
      Validators.maxLength(50)
    ]),
    phoneNumber: new FormControl('', [
      Validators.required,
      Validators.pattern(/^(50|51|53|57|60|66|69|72|73|78|79|88)\d{7}$/)
    ]),
    email: new FormControl('', [
      Validators.required,
      Validators.email,
      Validators.maxLength(100)
    ]),
    addressForm: new FormGroup({
      street: new FormControl('', [Validators.required]),
      houseNumber: new FormControl('', [
        Validators.required,
        Validators.pattern(/\d\/?/)
      ])
    }),
    city: new FormControl('', [Validators.required]),
    zipCode: new FormControl('', [
      Validators.required,
      Validators.pattern(/\d{2}-\d{3}/)
    ])
  });

  constructor(
    private store: Store<AppState>,
    private orderService: OrderService,
    private notifier: NotifierService
  ) {}

  ngOnInit() {
    this.subscription = this.store
      .select('orderReducer')
      .subscribe((orderState: Order) => {
        this.book = orderState.books[0];
      });
  }

  ngOnDestroy() {
    this.subscription.unsubscribe();
  }

  handleSubmitForm(orderForm: OrderForm) {
    const { houseNumber, street } = orderForm.addressForm;

    orderForm.address = `${street} ${houseNumber}`;
    delete orderForm.addressForm;
    const order: Order = {
      books: [this.book],
      ...orderForm
    };
    orderForm.addressForm = {
      houseNumber,
      street
    };

    this.orderService.submitOrder(order).subscribe(
      (response: ResponseBody<Book[]>) => {
        this.notifier.notify(
          NotificationResults.SUCCESS,
          NotificationAlerts.ORDER_SUCCESS
        );
      },
      (response: HttpErrorResponse) => {
        this.notifier.notify(
          NotificationResults.ERROR,
          NotificationAlerts.ORDER_ERROR
        );
      }
    );
  }
}
