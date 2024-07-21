import { NgModule } from "@angular/core";
import { CounterComponent } from "./counter/counter.component";
import { CommonModule } from "@angular/common";

@NgModule({
  exports: [
    CounterComponent
  ],
  declarations: [
    CounterComponent
  ],
  imports: [
    CommonModule
  ]
})
export class CounterModule {}
