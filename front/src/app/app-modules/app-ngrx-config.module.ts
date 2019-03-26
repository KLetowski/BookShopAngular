import { NgModule } from '@angular/core';
import { store } from '../store/store';
import { BookEffects } from '../effects/book.effects';
import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';

const NGRX_MODULES_CONFIG = [
  StoreModule.forRoot(store),
  EffectsModule.forRoot([BookEffects])
];

const NGRX_MODULES = [StoreModule, EffectsModule];

@NgModule({
  imports: NGRX_MODULES_CONFIG,
  exports: NGRX_MODULES
})
export class AppNgrxModule {}
