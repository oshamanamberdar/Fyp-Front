import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import {MatListModule} from "@angular/material/list";
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatIconModule} from "@angular/material/icon";
import {MatButtonModule} from "@angular/material/button";
import { IconcardComponent } from './iconcard/iconcard.component';
import {NbButtonModule, NbCardModule, NbMenuModule} from "@nebular/theme";


@NgModule({
    declarations: [
        HeaderComponent,
        FooterComponent,
        SidebarComponent,
        IconcardComponent
    ],
  exports: [
    HeaderComponent,
    SidebarComponent,
    FooterComponent,
    MatToolbarModule,
    IconcardComponent
  ],
  imports: [
    CommonModule,
    MatListModule,
    MatToolbarModule,
    MatIconModule,
    MatButtonModule,
    NbCardModule,
    NbButtonModule,
    NbMenuModule
  ]
})
export class LayoutModule { }
