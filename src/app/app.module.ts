import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { DragDropModule, DragDropRegistry } from '@angular/cdk/drag-drop';
import { ScrollingModule, ViewportRuler, ScrollDispatcher } from '@angular/cdk/scrolling';
import { CdkStepperModule } from '@angular/cdk/stepper';
import { AppComponent } from './app.component';
import { Platform } from '@angular/cdk/platform';
import { PanelModule } from 'primeng/panel';
import { ScrollPanelModule } from 'primeng/scrollpanel';
import { TreeModule } from 'primeng/tree';


@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    DragDropModule,
    ScrollingModule,
    CdkStepperModule,
    PanelModule,
    ScrollPanelModule,
    TreeModule
  ],
  providers: [ViewportRuler, Platform, DragDropRegistry, ScrollDispatcher],
  bootstrap: [AppComponent],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class AppModule { }
