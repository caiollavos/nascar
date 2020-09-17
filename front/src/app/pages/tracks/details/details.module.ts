
import { CommonModule } from "@angular/common";
import { HttpClientModule } from "@angular/common/http";
import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from "@angular/core";
import { HereMapsModule } from "ng2-heremaps";
import { MapComponent } from "src/app/components/shared/map/map.component";
import { DetailsComponent } from "./details.component";

@NgModule({
    imports: [
      CommonModule,
      HttpClientModule,
      HereMapsModule
    ],
    declarations: [
      DetailsComponent,
      MapComponent
    ],
    schemas: [
      CUSTOM_ELEMENTS_SCHEMA
    ]
  })
  
  export class DetailsModule {}
  