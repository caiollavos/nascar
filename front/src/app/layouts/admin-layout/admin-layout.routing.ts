import { Routes } from '@angular/router';

import { DashboardComponent } from '../../pages/dashboard/dashboard.component';
import { IconsComponent } from '../../pages/icons/icons.component';
import { MapsComponent } from '../../pages/maps/maps.component';
import { UserProfileComponent } from '../../pages/user-profile/user-profile.component';
import { TablesComponent } from '../../pages/tables/tables.component';
import { TracksComponent } from 'src/app/pages/tracks/tracks.component';
import { DetailsComponent } from 'src/app/pages/tracks/details/details.component';
import { MapComponent } from 'src/app/components/shared/map/map.component';
import { DriversComponent } from 'src/app/pages/drivers/drivers.component';

export const AdminLayoutRoutes: Routes = [
    { path: 'dashboard',      component: DashboardComponent },
    { path: 'user-profile',   component: UserProfileComponent },
    { path: 'drivers',         component: DriversComponent },
    // { path: 'drivers/:id',         component: DriversComponent },
    { path: 'icons',          component: IconsComponent },
    { path: 'maps',           component: MapComponent },
    { path: 'tracks',           component: TracksComponent },
    { path: 'tracks/:id', component: DetailsComponent }

];
