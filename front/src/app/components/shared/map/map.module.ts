import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MapComponent } from './map.component';
import { HereMapsModule } from 'ng2-heremaps';


@NgModule({
    declarations: [MapComponent],
    exports: [MapComponent],
    imports: [
        CommonModule,
        HereMapsModule.forRoot({
            apiKey: 'xCSKCKWyH8uVFxd9gTHsIetlNSNrizwSKJVPeH4TO1c',
            appId: '7mOqEiFk9WoxZLMH8jHw',
            apiVersion: '3.1',
            libraries: ['core', 'service']
          }),
    ],
    schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class MapModule { }