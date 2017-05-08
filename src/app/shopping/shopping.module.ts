
import { NgModule } from "@angular/core";
import { ShoppingComponent } from '../shopping/shopping.component';
import {ShoppingItemComponent} from  '../shopping/shopping.item.component'
import {ShoppingEditComponent} from '../shopping/shopping.edit.component';
import {ShoppingListComponent} from '../shopping/shopping.list.component';
import { SharedModule } from "../shared/shared.module";
import { FormsModule } from "@angular/forms";
import { Routes, RouterModule } from "@angular/router";


const routes : Routes = [
    {path : '',component : ShoppingComponent}
];

@NgModule({
    declarations : [
        ShoppingComponent,
        ShoppingItemComponent,
        ShoppingListComponent,
        ShoppingEditComponent
    ],
    imports : [
        SharedModule,
        FormsModule,
        RouterModule.forChild(routes)
    ]

})
export class ShoppingModule{}