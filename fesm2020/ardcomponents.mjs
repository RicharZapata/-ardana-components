import * as i0 from '@angular/core';
import { Component, ViewChild, Input, EventEmitter, Output, Injectable, NgModule } from '@angular/core';
import * as i2 from '@angular/forms';
import { FormControl, FormGroup, Validators, FormsModule, ReactiveFormsModule } from '@angular/forms';
import * as i1 from '@angular/common';
import * as i3 from 'ngx-mask';
import { NgxMaskModule } from 'ngx-mask';
import { BrowserModule } from '@angular/platform-browser';

class InputFormComponent {
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

class CardFormComponent {
    constructor() {
        this.SubmitEvent = new EventEmitter();
        this.text = '';
        this.form = new FormGroup({
            cardNumber: new FormControl("", [Validators.required]),
            cardholderName: new FormControl("", [Validators.required]),
            cardExpirationMonth: new FormControl("", [Validators.required, Validators.max(2)]),
            cardExpirationYear: new FormControl("", [Validators.required]),
            securityCode: new FormControl("", [Validators.required])
        });
        this.masks = {
            card: '0000 0000 0000 0000',
            cvv: '000'
        };
        this.form.valueChanges.subscribe(resp => {
            console.log(resp);
            resp.get('cardholderName').set(resp.get('cardholderName').toUppercase());
        });
    }
    submit() {
        console.log(this.form.value);
    }
}
CardFormComponent.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "13.2.7", ngImport: i0, type: CardFormComponent, deps: [], target: i0.ɵɵFactoryTarget.Component });
CardFormComponent.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "12.0.0", version: "13.2.7", type: CardFormComponent, selector: "ard-card-form", outputs: { SubmitEvent: "SubmitEvent" }, ngImport: i0, template: "<div class=\"card-form\">\n  <form [formGroup]=\"form\">\n    <ard-input-form type=\"text\" placeholder=\"JUAN PEREZ GONZALEZ\" description=\"Escribe el nombre como aparece en la tarjeta\" label=\"Nombre del titular\" pattern=\"[A-Z]*\" [style]=\"{width:'340px'}\" [control]=\"$any(form).get('cardholderName')\"></ard-input-form>\n    <ard-input-form type=\"text\" placeholder=\"2222 2222 2222 2222\" description=\"Numero a 16 digitos\" label=\"Numero de tarjeta\" [style]=\"{width:'340px'}\" [control]=\"$any(form).get('cardNumber')\" pattern=\"[0-9]*\" [mask]=\"masks.card\"></ard-input-form>\n    <label class=\"expiration-label\">Fecha Expiraci\u00F3n</label>\n    <div class=\"expiration-card-form\">\n      <ard-input-form type=\"text\" placeholder=\"MM\" [style]=\"{'width':'50px', 'center':true}\" [control]=\"$any(form).get('cardExpirationMonth')\" pattern=\"[0-9]*\" [mask]=\"'00'\"></ard-input-form>\n      <ard-input-form type=\"text\" placeholder=\"YY\" [style]=\"{'width':'50px', 'center': true}\" [control]=\"$any(form).get('cardExpirationYear')\" pattern=\"[0-9]*\" [mask]=\"'00'\"></ard-input-form>\n    </div>\n    <ard-input-form type=\"text\" placeholder=\"CVV\" description=\"3 digitos\" label=\"CVV\" [style]=\"{width:'80px'}\" [control]=\"$any(form).get('securityCode')\" pattern=\"[0-9]*\" [mask]=\"masks.cvv\"></ard-input-form>\n    <button class=\"save-button\" (click)=\"submit()\">Guardar</button>\n  </form>\n</div>\n", styles: [""], components: [{ type: InputFormComponent, selector: "ard-input-form", inputs: ["id", "name", "min", "max", "minLength", "maxLength", "value", "disabled", "placeholder", "type", "control", "pattern", "mask", "label", "description", "style"] }], directives: [{ type: i2.ɵNgNoValidate, selector: "form:not([ngNoForm]):not([ngNativeValidate])" }, { type: i2.NgControlStatusGroup, selector: "[formGroupName],[formArrayName],[ngModelGroup],[formGroup],form:not([ngNoForm]),[ngForm]" }, { type: i2.FormGroupDirective, selector: "[formGroup]", inputs: ["formGroup"], outputs: ["ngSubmit"], exportAs: ["ngForm"] }] });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "13.2.7", ngImport: i0, type: CardFormComponent, decorators: [{
            type: Component,
            args: [{ selector: 'ard-card-form', template: "<div class=\"card-form\">\n  <form [formGroup]=\"form\">\n    <ard-input-form type=\"text\" placeholder=\"JUAN PEREZ GONZALEZ\" description=\"Escribe el nombre como aparece en la tarjeta\" label=\"Nombre del titular\" pattern=\"[A-Z]*\" [style]=\"{width:'340px'}\" [control]=\"$any(form).get('cardholderName')\"></ard-input-form>\n    <ard-input-form type=\"text\" placeholder=\"2222 2222 2222 2222\" description=\"Numero a 16 digitos\" label=\"Numero de tarjeta\" [style]=\"{width:'340px'}\" [control]=\"$any(form).get('cardNumber')\" pattern=\"[0-9]*\" [mask]=\"masks.card\"></ard-input-form>\n    <label class=\"expiration-label\">Fecha Expiraci\u00F3n</label>\n    <div class=\"expiration-card-form\">\n      <ard-input-form type=\"text\" placeholder=\"MM\" [style]=\"{'width':'50px', 'center':true}\" [control]=\"$any(form).get('cardExpirationMonth')\" pattern=\"[0-9]*\" [mask]=\"'00'\"></ard-input-form>\n      <ard-input-form type=\"text\" placeholder=\"YY\" [style]=\"{'width':'50px', 'center': true}\" [control]=\"$any(form).get('cardExpirationYear')\" pattern=\"[0-9]*\" [mask]=\"'00'\"></ard-input-form>\n    </div>\n    <ard-input-form type=\"text\" placeholder=\"CVV\" description=\"3 digitos\" label=\"CVV\" [style]=\"{width:'80px'}\" [control]=\"$any(form).get('securityCode')\" pattern=\"[0-9]*\" [mask]=\"masks.cvv\"></ard-input-form>\n    <button class=\"save-button\" (click)=\"submit()\">Guardar</button>\n  </form>\n</div>\n", styles: [""] }]
        }], ctorParameters: function () { return []; }, propDecorators: { SubmitEvent: [{
                type: Output
            }] } });

class ARDComponentsService {
    constructor() { }
}
ARDComponentsService.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "13.2.7", ngImport: i0, type: ARDComponentsService, deps: [], target: i0.ɵɵFactoryTarget.Injectable });
ARDComponentsService.ɵprov = i0.ɵɵngDeclareInjectable({ minVersion: "12.0.0", version: "13.2.7", ngImport: i0, type: ARDComponentsService, providedIn: 'root' });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "13.2.7", ngImport: i0, type: ARDComponentsService, decorators: [{
            type: Injectable,
            args: [{
                    providedIn: 'root'
                }]
        }], ctorParameters: function () { return []; } });

class ARDComponentsComponent {
    constructor() { }
    ngOnInit() {
    }
}
ARDComponentsComponent.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "13.2.7", ngImport: i0, type: ARDComponentsComponent, deps: [], target: i0.ɵɵFactoryTarget.Component });
ARDComponentsComponent.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "12.0.0", version: "13.2.7", type: ARDComponentsComponent, selector: "lib-ARDComponents", ngImport: i0, template: `
    <p>
      ardcomponents works!
    </p>
  `, isInline: true });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "13.2.7", ngImport: i0, type: ARDComponentsComponent, decorators: [{
            type: Component,
            args: [{
                    selector: 'lib-ARDComponents',
                    template: `
    <p>
      ardcomponents works!
    </p>
  `,
                    styles: []
                }]
        }], ctorParameters: function () { return []; } });

const maskConfig = {
    validation: false,
};
class ARDComponentsModule {
}
ARDComponentsModule.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "13.2.7", ngImport: i0, type: ARDComponentsModule, deps: [], target: i0.ɵɵFactoryTarget.NgModule });
ARDComponentsModule.ɵmod = i0.ɵɵngDeclareNgModule({ minVersion: "12.0.0", version: "13.2.7", ngImport: i0, type: ARDComponentsModule, declarations: [ARDComponentsComponent,
        CardFormComponent,
        InputFormComponent], imports: [i3.NgxMaskModule, BrowserModule,
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

/*
 * Public API Surface of ardcomponents
 */

/**
 * Generated bundle index. Do not edit.
 */

export { ARDComponentsComponent, ARDComponentsModule, ARDComponentsService, CardFormComponent, InputFormComponent };
//# sourceMappingURL=ardcomponents.mjs.map
