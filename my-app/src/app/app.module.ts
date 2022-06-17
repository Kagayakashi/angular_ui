import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { TreeComponent } from './components/tree/tree.component';
import { TreeModule } from 'primeng/tree';
import { MenuComponent } from './components/menu/menu.component';
import { MenuElementComponent } from './components/menu/menu-element/menu-element.component';
import { FlexLayoutModule } from '@angular/flex-layout';
import { TreeSelectModule } from 'primeng/treeselect';
import { SidebarModule } from 'primeng/sidebar';
import { VirtualScrollerModule } from 'primeng/virtualscroller';
import { ContextMenuModule } from 'primeng/contextmenu';
import { BreadcrumbModule } from 'primeng/breadcrumb';
import { WindowComponent } from './components/window/window.component';
import { NavComponent } from './components/nav/nav.component';
import { TooltipModule } from 'primeng/tooltip';
import { InputSwitchModule } from 'primeng/inputswitch';
import { MessagesModule } from 'primeng/messages';
import { MessageModule } from 'primeng/message';
import { MessageService } from 'primeng/api';
import { ToastModule } from 'primeng/toast';
import { AvatarModule } from 'primeng/avatar';
import { BadgeModule } from "primeng/badge";
import { ImageModule } from 'primeng/image';

@NgModule({
  declarations: [
    AppComponent,
    TreeComponent,
    MenuComponent,
    MenuElementComponent,
    WindowComponent,
    NavComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    ReactiveFormsModule,
    FormsModule,
    TreeModule,
    FlexLayoutModule,
    TreeSelectModule,
    SidebarModule,
    VirtualScrollerModule,
    ContextMenuModule,
    BreadcrumbModule,
    TooltipModule,
    InputSwitchModule,
    MessagesModule,
    MessageModule,
    ToastModule,
    AvatarModule,
    BadgeModule,
    ImageModule
  ],
  providers: [MessageService],
  bootstrap: [AppComponent]
})

export class AppModule { }
