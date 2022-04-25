import { Component, Input, ViewChild } from '@angular/core';
import { FormControl } from '@angular/forms';
import * as i0 from "@angular/core";
import * as i1 from "@angular/common";
import * as i2 from "@angular/forms";
import * as i3 from "ngx-mask";
export class InputFormComponent {
    constructor() {
        this.disabled = false;
        this.type = 'text';
        this.control = new FormControl();
        this.pattern = '';
        this.mask = '';
        this.label = null;
        this.style = {
            width: '300px',
            center: false
        };
    }
    ngAfterViewInit() {
        if (this.control.value !== '') {
            this.inputComponent?.nativeElement.classList.add('filled');
        }
    }
    validate(control) {
        throw new Error('Method not implemented.');
    }
    writeValue(obj) {
        throw new Error('Method not implemented.');
    }
    registerOnChange(fn) {
        throw new Error('Method not implemented.');
    }
    registerOnTouched(fn) {
        throw new Error('Method not implemented.');
    }
    setFocus() {
        if (this.label !== null) {
            this.inputElement?.nativeElement.focus();
            this.inputComponent?.nativeElement.classList.add('focus');
            this.inputElement?.nativeElement.addEventListener('focusout', (event) => {
                if (event.target.value == '')
                    this.inputComponent?.nativeElement.classList.remove('focus');
            });
        }
    }
}
InputFormComponent.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "13.2.7", ngImport: i0, type: InputFormComponent, deps: [], target: i0.ɵɵFactoryTarget.Component });
InputFormComponent.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "12.0.0", version: "13.2.7", type: InputFormComponent, selector: "ard-input-form", inputs: { id: "id", name: "name", min: "min", max: "max", minLength: "minLength", maxLength: "maxLength", value: "value", disabled: "disabled", placeholder: "placeholder", type: "type", control: "control", pattern: "pattern", mask: "mask", label: "label", description: "description", style: "style" }, viewQueries: [{ propertyName: "inputElement", first: true, predicate: ["input"], descendants: true }, { propertyName: "inputComponent", first: true, predicate: ["inputComponent"], descendants: true }], ngImport: i0, template: "<div #inputComponent class=\"input-container\" [style.width]=\"style?.width\" [class.hideholder]=\"label\" [class.marginTop]=\"label\">\n  <label (click)=\"setFocus()\" *ngIf=\"label\">{{label}}</label>\n  <input #input\n    (click)=\"setFocus()\"\n    (focusin)=\"setFocus()\"\n    [type]=\"type\"\n    [placeholder]=\"placeholder\"\n    [ngStyle]=\"{'text-align': style?.center ? 'center':'left'}\"\n    [value]=\"value\"\n    [id]=\"id\"\n    [formControl]=\"$any(control)\"\n    [disabled]=\"disabled\"\n    [max]=\"max\"\n    [min]=\"min\"\n    [pattern]=\"pattern\"\n    [mask]=\"mask\"\n  />\n  <small>{{description}}</small>\n</div>\n", directives: [{ type: i1.NgIf, selector: "[ngIf]", inputs: ["ngIf", "ngIfThen", "ngIfElse"] }, { type: i2.DefaultValueAccessor, selector: "input:not([type=checkbox])[formControlName],textarea[formControlName],input:not([type=checkbox])[formControl],textarea[formControl],input:not([type=checkbox])[ngModel],textarea[ngModel],[ngDefaultControl]" }, { type: i3.MaskDirective, selector: "input[mask], textarea[mask]", inputs: ["mask", "specialCharacters", "patterns", "prefix", "suffix", "thousandSeparator", "decimalMarker", "dropSpecialCharacters", "hiddenInput", "showMaskTyped", "placeHolderCharacter", "shownMaskExpression", "showTemplate", "clearIfNotMatch", "validation", "separatorLimit", "allowNegativeNumbers", "leadZeroDateTime", "triggerOnMaskChange"], outputs: ["maskFilled"], exportAs: ["mask", "ngxMask"] }, { type: i1.NgStyle, selector: "[ngStyle]", inputs: ["ngStyle"] }, { type: i2.NgControlStatus, selector: "[formControlName],[ngModel],[formControl]" }, { type: i2.FormControlDirective, selector: "[formControl]", inputs: ["formControl", "disabled", "ngModel"], outputs: ["ngModelChange"], exportAs: ["ngForm"] }, { type: i2.PatternValidator, selector: "[pattern][formControlName],[pattern][formControl],[pattern][ngModel]", inputs: ["pattern"] }] });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "13.2.7", ngImport: i0, type: InputFormComponent, decorators: [{
            type: Component,
            args: [{ selector: 'ard-input-form', template: "<div #inputComponent class=\"input-container\" [style.width]=\"style?.width\" [class.hideholder]=\"label\" [class.marginTop]=\"label\">\n  <label (click)=\"setFocus()\" *ngIf=\"label\">{{label}}</label>\n  <input #input\n    (click)=\"setFocus()\"\n    (focusin)=\"setFocus()\"\n    [type]=\"type\"\n    [placeholder]=\"placeholder\"\n    [ngStyle]=\"{'text-align': style?.center ? 'center':'left'}\"\n    [value]=\"value\"\n    [id]=\"id\"\n    [formControl]=\"$any(control)\"\n    [disabled]=\"disabled\"\n    [max]=\"max\"\n    [min]=\"min\"\n    [pattern]=\"pattern\"\n    [mask]=\"mask\"\n  />\n  <small>{{description}}</small>\n</div>\n" }]
        }], ctorParameters: function () { return []; }, propDecorators: { inputElement: [{
                type: ViewChild,
                args: ['input']
            }], inputComponent: [{
                type: ViewChild,
                args: ['inputComponent']
            }], id: [{
                type: Input
            }], name: [{
                type: Input
            }], min: [{
                type: Input
            }], max: [{
                type: Input
            }], minLength: [{
                type: Input
            }], maxLength: [{
                type: Input
            }], value: [{
                type: Input
            }], disabled: [{
                type: Input
            }], placeholder: [{
                type: Input
            }], type: [{
                type: Input
            }], control: [{
                type: Input
            }], pattern: [{
                type: Input
            }], mask: [{
                type: Input
            }], label: [{
                type: Input
            }], description: [{
                type: Input
            }], style: [{
                type: Input
            }] } });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5wdXQtZm9ybS5jb21wb25lbnQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi9wcm9qZWN0cy9hcmRjb21wb25lbnRzL3NyYy9saWIvaW5wdXQtZm9ybS9pbnB1dC1mb3JtLmNvbXBvbmVudC50cyIsIi4uLy4uLy4uLy4uLy4uL3Byb2plY3RzL2FyZGNvbXBvbmVudHMvc3JjL2xpYi9pbnB1dC1mb3JtL2lucHV0LWZvcm0uY29tcG9uZW50Lmh0bWwiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsT0FBTyxFQUFpQixTQUFTLEVBQWMsS0FBSyxFQUFVLFNBQVMsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUMvRixPQUFPLEVBQXlDLFdBQVcsRUFBK0IsTUFBTSxnQkFBZ0IsQ0FBQzs7Ozs7QUFXakgsTUFBTSxPQUFPLGtCQUFrQjtJQTBCN0I7UUFkUyxhQUFRLEdBQVksS0FBSyxDQUFDO1FBRTFCLFNBQUksR0FBVyxNQUFNLENBQUM7UUFDdEIsWUFBTyxHQUFvQixJQUFJLFdBQVcsRUFBRSxDQUFDO1FBQzdDLFlBQU8sR0FBVyxFQUFFLENBQUM7UUFDckIsU0FBSSxHQUFXLEVBQUUsQ0FBQztRQUVsQixVQUFLLEdBQWtCLElBQUksQ0FBQztRQUU1QixVQUFLLEdBQWdCO1lBQzVCLEtBQUssRUFBRSxPQUFPO1lBQ2QsTUFBTSxFQUFFLEtBQUs7U0FDZCxDQUFDO0lBR0YsQ0FBQztJQUVELGVBQWU7UUFDYixJQUFHLElBQUksQ0FBQyxPQUFPLENBQUMsS0FBSyxLQUFLLEVBQUUsRUFBQztZQUMzQixJQUFJLENBQUMsY0FBYyxFQUFFLGFBQWEsQ0FBQyxTQUFTLENBQUMsR0FBRyxDQUFDLFFBQVEsQ0FBQyxDQUFDO1NBQzVEO0lBQ0gsQ0FBQztJQUVELFFBQVEsQ0FBQyxPQUF3QjtRQUMvQixNQUFNLElBQUksS0FBSyxDQUFDLHlCQUF5QixDQUFDLENBQUM7SUFDN0MsQ0FBQztJQUNELFVBQVUsQ0FBQyxHQUFRO1FBQ2pCLE1BQU0sSUFBSSxLQUFLLENBQUMseUJBQXlCLENBQUMsQ0FBQztJQUM3QyxDQUFDO0lBQ0QsZ0JBQWdCLENBQUMsRUFBTztRQUN0QixNQUFNLElBQUksS0FBSyxDQUFDLHlCQUF5QixDQUFDLENBQUM7SUFDN0MsQ0FBQztJQUNELGlCQUFpQixDQUFDLEVBQU87UUFDdkIsTUFBTSxJQUFJLEtBQUssQ0FBQyx5QkFBeUIsQ0FBQyxDQUFDO0lBQzdDLENBQUM7SUFFRCxRQUFRO1FBQ04sSUFBRyxJQUFJLENBQUMsS0FBSyxLQUFLLElBQUksRUFBRTtZQUN0QixJQUFJLENBQUMsWUFBWSxFQUFFLGFBQWEsQ0FBQyxLQUFLLEVBQUUsQ0FBQztZQUN6QyxJQUFJLENBQUMsY0FBYyxFQUFFLGFBQWEsQ0FBQyxTQUFTLENBQUMsR0FBRyxDQUFDLE9BQU8sQ0FBQyxDQUFDO1lBQzFELElBQUksQ0FBQyxZQUFZLEVBQUUsYUFBYSxDQUFDLGdCQUFnQixDQUFDLFVBQVUsRUFBRSxDQUFDLEtBQVUsRUFBRSxFQUFFO2dCQUMzRSxJQUFHLEtBQUssQ0FBQyxNQUFNLENBQUMsS0FBSyxJQUFJLEVBQUU7b0JBQUUsSUFBSSxDQUFDLGNBQWMsRUFBRSxhQUFhLENBQUMsU0FBUyxDQUFDLE1BQU0sQ0FBQyxPQUFPLENBQUMsQ0FBQztZQUM1RixDQUFDLENBQUMsQ0FBQztTQUNKO0lBQ0gsQ0FBQzs7K0dBeERVLGtCQUFrQjttR0FBbEIsa0JBQWtCLDhpQkNaL0Isb29CQW1CQTsyRkRQYSxrQkFBa0I7a0JBSjlCLFNBQVM7K0JBQ0UsZ0JBQWdCOzBFQUtOLFlBQVk7c0JBQS9CLFNBQVM7dUJBQUMsT0FBTztnQkFDVyxjQUFjO3NCQUExQyxTQUFTO3VCQUFDLGdCQUFnQjtnQkFFbEIsRUFBRTtzQkFBVixLQUFLO2dCQUNHLElBQUk7c0JBQVosS0FBSztnQkFDRyxHQUFHO3NCQUFYLEtBQUs7Z0JBQ0csR0FBRztzQkFBWCxLQUFLO2dCQUNHLFNBQVM7c0JBQWpCLEtBQUs7Z0JBQ0csU0FBUztzQkFBakIsS0FBSztnQkFDRyxLQUFLO3NCQUFiLEtBQUs7Z0JBQ0csUUFBUTtzQkFBaEIsS0FBSztnQkFDRyxXQUFXO3NCQUFuQixLQUFLO2dCQUNHLElBQUk7c0JBQVosS0FBSztnQkFDRyxPQUFPO3NCQUFmLEtBQUs7Z0JBQ0csT0FBTztzQkFBZixLQUFLO2dCQUNHLElBQUk7c0JBQVosS0FBSztnQkFFRyxLQUFLO3NCQUFiLEtBQUs7Z0JBQ0csV0FBVztzQkFBbkIsS0FBSztnQkFDRyxLQUFLO3NCQUFiLEtBQUsiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBBZnRlclZpZXdJbml0LCBDb21wb25lbnQsIEVsZW1lbnRSZWYsIElucHV0LCBPbkluaXQsIFZpZXdDaGlsZCB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgQWJzdHJhY3RDb250cm9sLCBDb250cm9sVmFsdWVBY2Nlc3NvciwgRm9ybUNvbnRyb2wsIFZhbGlkYXRpb25FcnJvcnMsIFZhbGlkYXRvciB9IGZyb20gJ0Bhbmd1bGFyL2Zvcm1zJztcblxuaW50ZXJmYWNlIHN0eWxlSW5wdXQge1xuICB3aWR0aD86c3RyaW5nLFxuICBjZW50ZXI/OiBib29sZWFuXG59XG5cbkBDb21wb25lbnQoe1xuICBzZWxlY3RvcjogJ2FyZC1pbnB1dC1mb3JtJyxcbiAgdGVtcGxhdGVVcmw6ICcuL2lucHV0LWZvcm0uY29tcG9uZW50Lmh0bWwnLFxufSlcbmV4cG9ydCBjbGFzcyBJbnB1dEZvcm1Db21wb25lbnQgaW1wbGVtZW50cyBDb250cm9sVmFsdWVBY2Nlc3NvciwgVmFsaWRhdG9yLCBBZnRlclZpZXdJbml0IHtcblxuICBAVmlld0NoaWxkKCdpbnB1dCcpIGlucHV0RWxlbWVudDogRWxlbWVudFJlZiB8IHVuZGVmaW5lZDtcbiAgQFZpZXdDaGlsZCgnaW5wdXRDb21wb25lbnQnKSBpbnB1dENvbXBvbmVudDogRWxlbWVudFJlZiB8IHVuZGVmaW5lZDtcblxuICBASW5wdXQoKSBpZD86c3RyaW5nO1xuICBASW5wdXQoKSBuYW1lPzogc3RyaW5nO1xuICBASW5wdXQoKSBtaW4/OiBzdHJpbmc7XG4gIEBJbnB1dCgpIG1heD86IHN0cmluZztcbiAgQElucHV0KCkgbWluTGVuZ3RoPzogc3RyaW5nO1xuICBASW5wdXQoKSBtYXhMZW5ndGg/OiBzdHJpbmc7XG4gIEBJbnB1dCgpIHZhbHVlPzogYW55O1xuICBASW5wdXQoKSBkaXNhYmxlZDogYm9vbGVhbiA9IGZhbHNlO1xuICBASW5wdXQoKSBwbGFjZWhvbGRlcj86c3RyaW5nO1xuICBASW5wdXQoKSB0eXBlPzpzdHJpbmcgPSAndGV4dCc7XG4gIEBJbnB1dCgpIGNvbnRyb2w6IEFic3RyYWN0Q29udHJvbCA9IG5ldyBGb3JtQ29udHJvbCgpO1xuICBASW5wdXQoKSBwYXR0ZXJuOiBzdHJpbmcgPSAnJztcbiAgQElucHV0KCkgbWFzazogc3RyaW5nID0gJyc7XG5cbiAgQElucHV0KCkgbGFiZWw6IHN0cmluZyB8IG51bGwgPSBudWxsO1xuICBASW5wdXQoKSBkZXNjcmlwdGlvbj86IHN0cmluZztcbiAgQElucHV0KCkgc3R5bGU/OiBzdHlsZUlucHV0ID0ge1xuICAgIHdpZHRoOiAnMzAwcHgnLFxuICAgIGNlbnRlcjogZmFsc2VcbiAgfTtcblxuICBjb25zdHJ1Y3RvcigpIHtcbiAgfVxuXG4gIG5nQWZ0ZXJWaWV3SW5pdCgpIHtcbiAgICBpZih0aGlzLmNvbnRyb2wudmFsdWUgIT09ICcnKXtcbiAgICAgIHRoaXMuaW5wdXRDb21wb25lbnQ/Lm5hdGl2ZUVsZW1lbnQuY2xhc3NMaXN0LmFkZCgnZmlsbGVkJyk7XG4gICAgfVxuICB9XG5cbiAgdmFsaWRhdGUoY29udHJvbDogQWJzdHJhY3RDb250cm9sKTogVmFsaWRhdGlvbkVycm9ycyB8IG51bGwge1xuICAgIHRocm93IG5ldyBFcnJvcignTWV0aG9kIG5vdCBpbXBsZW1lbnRlZC4nKTtcbiAgfVxuICB3cml0ZVZhbHVlKG9iajogYW55KTogdm9pZCB7XG4gICAgdGhyb3cgbmV3IEVycm9yKCdNZXRob2Qgbm90IGltcGxlbWVudGVkLicpO1xuICB9XG4gIHJlZ2lzdGVyT25DaGFuZ2UoZm46IGFueSk6IHZvaWQge1xuICAgIHRocm93IG5ldyBFcnJvcignTWV0aG9kIG5vdCBpbXBsZW1lbnRlZC4nKTtcbiAgfVxuICByZWdpc3Rlck9uVG91Y2hlZChmbjogYW55KTogdm9pZCB7XG4gICAgdGhyb3cgbmV3IEVycm9yKCdNZXRob2Qgbm90IGltcGxlbWVudGVkLicpO1xuICB9XG5cbiAgc2V0Rm9jdXMoKSB7XG4gICAgaWYodGhpcy5sYWJlbCAhPT0gbnVsbCkge1xuICAgICAgdGhpcy5pbnB1dEVsZW1lbnQ/Lm5hdGl2ZUVsZW1lbnQuZm9jdXMoKTtcbiAgICAgIHRoaXMuaW5wdXRDb21wb25lbnQ/Lm5hdGl2ZUVsZW1lbnQuY2xhc3NMaXN0LmFkZCgnZm9jdXMnKTtcbiAgICAgIHRoaXMuaW5wdXRFbGVtZW50Py5uYXRpdmVFbGVtZW50LmFkZEV2ZW50TGlzdGVuZXIoJ2ZvY3Vzb3V0JywgKGV2ZW50OiBhbnkpID0+IHtcbiAgICAgICAgaWYoZXZlbnQudGFyZ2V0LnZhbHVlID09ICcnKSB0aGlzLmlucHV0Q29tcG9uZW50Py5uYXRpdmVFbGVtZW50LmNsYXNzTGlzdC5yZW1vdmUoJ2ZvY3VzJyk7XG4gICAgICB9KTtcbiAgICB9XG4gIH1cbn1cbiIsIjxkaXYgI2lucHV0Q29tcG9uZW50IGNsYXNzPVwiaW5wdXQtY29udGFpbmVyXCIgW3N0eWxlLndpZHRoXT1cInN0eWxlPy53aWR0aFwiIFtjbGFzcy5oaWRlaG9sZGVyXT1cImxhYmVsXCIgW2NsYXNzLm1hcmdpblRvcF09XCJsYWJlbFwiPlxuICA8bGFiZWwgKGNsaWNrKT1cInNldEZvY3VzKClcIiAqbmdJZj1cImxhYmVsXCI+e3tsYWJlbH19PC9sYWJlbD5cbiAgPGlucHV0ICNpbnB1dFxuICAgIChjbGljayk9XCJzZXRGb2N1cygpXCJcbiAgICAoZm9jdXNpbik9XCJzZXRGb2N1cygpXCJcbiAgICBbdHlwZV09XCJ0eXBlXCJcbiAgICBbcGxhY2Vob2xkZXJdPVwicGxhY2Vob2xkZXJcIlxuICAgIFtuZ1N0eWxlXT1cInsndGV4dC1hbGlnbic6IHN0eWxlPy5jZW50ZXIgPyAnY2VudGVyJzonbGVmdCd9XCJcbiAgICBbdmFsdWVdPVwidmFsdWVcIlxuICAgIFtpZF09XCJpZFwiXG4gICAgW2Zvcm1Db250cm9sXT1cIiRhbnkoY29udHJvbClcIlxuICAgIFtkaXNhYmxlZF09XCJkaXNhYmxlZFwiXG4gICAgW21heF09XCJtYXhcIlxuICAgIFttaW5dPVwibWluXCJcbiAgICBbcGF0dGVybl09XCJwYXR0ZXJuXCJcbiAgICBbbWFza109XCJtYXNrXCJcbiAgLz5cbiAgPHNtYWxsPnt7ZGVzY3JpcHRpb259fTwvc21hbGw+XG48L2Rpdj5cbiJdfQ==