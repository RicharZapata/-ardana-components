import { NgModule } from '@angular/core';
import { CardFormComponent } from './card-form/card-form.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { InputFormComponent } from './input-form/input-form.component';
import { BrowserModule } from '@angular/platform-browser';
import { NgxMaskModule } from 'ngx-mask';
import { ARDComponentsComponent } from './ardcomponents.component';
import * as i0 from "@angular/core";
import * as i1 from "ngx-mask";
const maskConfig = {
    validation: false,
};
export class ARDComponentsModule {
}
ARDComponentsModule.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "13.2.7", ngImport: i0, type: ARDComponentsModule, deps: [], target: i0.ɵɵFactoryTarget.NgModule });
ARDComponentsModule.ɵmod = i0.ɵɵngDeclareNgModule({ minVersion: "12.0.0", version: "13.2.7", ngImport: i0, type: ARDComponentsModule, declarations: [ARDComponentsComponent,
        CardFormComponent,
        InputFormComponent], imports: [i1.NgxMaskModule, BrowserModule,
        FormsModule,
        ReactiveFormsModule], exports: [ARDComponentsComponent,
        InputFormComponent,
        CardFormComponent] });
ARDComponentsModule.ɵinj = i0.ɵɵngDeclareInjector({ minVersion: "12.0.0", version: "13.2.7", ngImport: i0, type: ARDComponentsModule, imports: [[
            NgxMaskModule.forRoot(maskConfig),
            BrowserModule,
            FormsModule,
            ReactiveFormsModule
        ]] });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "13.2.7", ngImport: i0, type: ARDComponentsModule, decorators: [{
            type: NgModule,
            args: [{
                    declarations: [
                        ARDComponentsComponent,
                        CardFormComponent,
                        InputFormComponent
                    ],
                    imports: [
                        NgxMaskModule.forRoot(maskConfig),
                        BrowserModule,
                        FormsModule,
                        ReactiveFormsModule
                    ],
                    exports: [
                        ARDComponentsComponent,
                        InputFormComponent,
                        CardFormComponent
                    ]
                }]
        }] });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYXJkY29tcG9uZW50cy5tb2R1bGUuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi9wcm9qZWN0cy9hcmRjb21wb25lbnRzL3NyYy9saWIvYXJkY29tcG9uZW50cy5tb2R1bGUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsT0FBTyxFQUFFLFFBQVEsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUN6QyxPQUFPLEVBQUUsaUJBQWlCLEVBQUUsTUFBTSxpQ0FBaUMsQ0FBQztBQUNwRSxPQUFPLEVBQUUsV0FBVyxFQUFFLG1CQUFtQixFQUFFLE1BQU0sZ0JBQWdCLENBQUM7QUFDbEUsT0FBTyxFQUFFLGtCQUFrQixFQUFFLE1BQU0sbUNBQW1DLENBQUM7QUFDdkUsT0FBTyxFQUFFLGFBQWEsRUFBRSxNQUFNLDJCQUEyQixDQUFDO0FBQzFELE9BQU8sRUFBVyxhQUFhLEVBQUUsTUFBTSxVQUFVLENBQUM7QUFDbEQsT0FBTyxFQUFFLHNCQUFzQixFQUFFLE1BQU0sMkJBQTJCLENBQUM7OztBQUNuRSxNQUFNLFVBQVUsR0FBcUI7SUFDbkMsVUFBVSxFQUFFLEtBQUs7Q0FDbEIsQ0FBQztBQXFCRixNQUFNLE9BQU8sbUJBQW1COztnSEFBbkIsbUJBQW1CO2lIQUFuQixtQkFBbUIsaUJBaEI1QixzQkFBc0I7UUFDdEIsaUJBQWlCO1FBQ2pCLGtCQUFrQiwrQkFJbEIsYUFBYTtRQUNiLFdBQVc7UUFDWCxtQkFBbUIsYUFHbkIsc0JBQXNCO1FBQ3RCLGtCQUFrQjtRQUNsQixpQkFBaUI7aUhBR1IsbUJBQW1CLFlBWnJCO1lBQ1AsYUFBYSxDQUFDLE9BQU8sQ0FBQyxVQUFVLENBQUM7WUFDakMsYUFBYTtZQUNiLFdBQVc7WUFDWCxtQkFBbUI7U0FDcEI7MkZBT1UsbUJBQW1CO2tCQWxCL0IsUUFBUTttQkFBQztvQkFDUixZQUFZLEVBQUU7d0JBQ1osc0JBQXNCO3dCQUN0QixpQkFBaUI7d0JBQ2pCLGtCQUFrQjtxQkFDbkI7b0JBQ0QsT0FBTyxFQUFFO3dCQUNQLGFBQWEsQ0FBQyxPQUFPLENBQUMsVUFBVSxDQUFDO3dCQUNqQyxhQUFhO3dCQUNiLFdBQVc7d0JBQ1gsbUJBQW1CO3FCQUNwQjtvQkFDRCxPQUFPLEVBQUU7d0JBQ1Asc0JBQXNCO3dCQUN0QixrQkFBa0I7d0JBQ2xCLGlCQUFpQjtxQkFDbEI7aUJBQ0YiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBOZ01vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgQ2FyZEZvcm1Db21wb25lbnQgfSBmcm9tICcuL2NhcmQtZm9ybS9jYXJkLWZvcm0uY29tcG9uZW50JztcbmltcG9ydCB7IEZvcm1zTW9kdWxlLCBSZWFjdGl2ZUZvcm1zTW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvZm9ybXMnO1xuaW1wb3J0IHsgSW5wdXRGb3JtQ29tcG9uZW50IH0gZnJvbSAnLi9pbnB1dC1mb3JtL2lucHV0LWZvcm0uY29tcG9uZW50JztcbmltcG9ydCB7IEJyb3dzZXJNb2R1bGUgfSBmcm9tICdAYW5ndWxhci9wbGF0Zm9ybS1icm93c2VyJztcbmltcG9ydCB7IElDb25maWcsIE5neE1hc2tNb2R1bGUgfSBmcm9tICduZ3gtbWFzayc7XG5pbXBvcnQgeyBBUkRDb21wb25lbnRzQ29tcG9uZW50IH0gZnJvbSAnLi9hcmRjb21wb25lbnRzLmNvbXBvbmVudCc7XG5jb25zdCBtYXNrQ29uZmlnOiBQYXJ0aWFsPElDb25maWc+ID0ge1xuICB2YWxpZGF0aW9uOiBmYWxzZSxcbn07XG5cblxuQE5nTW9kdWxlKHtcbiAgZGVjbGFyYXRpb25zOiBbXG4gICAgQVJEQ29tcG9uZW50c0NvbXBvbmVudCxcbiAgICBDYXJkRm9ybUNvbXBvbmVudCxcbiAgICBJbnB1dEZvcm1Db21wb25lbnRcbiAgXSxcbiAgaW1wb3J0czogW1xuICAgIE5neE1hc2tNb2R1bGUuZm9yUm9vdChtYXNrQ29uZmlnKSxcbiAgICBCcm93c2VyTW9kdWxlLFxuICAgIEZvcm1zTW9kdWxlLFxuICAgIFJlYWN0aXZlRm9ybXNNb2R1bGVcbiAgXSxcbiAgZXhwb3J0czogW1xuICAgIEFSRENvbXBvbmVudHNDb21wb25lbnQsXG4gICAgSW5wdXRGb3JtQ29tcG9uZW50LFxuICAgIENhcmRGb3JtQ29tcG9uZW50XG4gIF1cbn0pXG5leHBvcnQgY2xhc3MgQVJEQ29tcG9uZW50c01vZHVsZSB7IH1cbiJdfQ==