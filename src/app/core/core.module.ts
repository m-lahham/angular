import { NgModule } from "@angular/core";
import { HeaderComponent } from "./header/header.component";
import { HomeComponent } from "./home/home.component";
import { AppRoutingModule } from "../app-routing.modules";
import { SharedModule } from "../shared/shared.module";

@NgModule({
    declarations : [
        HeaderComponent,
        HomeComponent
    ],
    imports : [AppRoutingModule, SharedModule],
    exports : [AppRoutingModule,HeaderComponent],
    
})
export class CoreModule {}