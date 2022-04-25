import { AfterViewInit, ElementRef } from '@angular/core';
import { AbstractControl, ControlValueAccessor, ValidationErrors, Validator } from '@angular/forms';
import * as i0 from "@angular/core";
interface styleInput {
    width?: string;
    center?: boolean;
}
export declare class InputFormComponent implements ControlValueAccessor, Validator, AfterViewInit {
    inputElement: ElementRef | undefined;
    inputComponent: ElementRef | undefined;
    id?: string;
    name?: string;
    min?: string;
    max?: string;
    minLength?: string;
    maxLength?: string;
    value?: any;
    disabled: boolean;
    placeholder?: string;
    type?: string;
    control: AbstractControl;
    pattern: string;
    mask: string;
    label: string | null;
    description?: string;
    style?: styleInput;
    constructor();
    ngAfterViewInit(): void;
    validate(control: AbstractControl): ValidationErrors | null;
    writeValue(obj: any): void;
    registerOnChange(fn: any): void;
    registerOnTouched(fn: any): void;
    setFocus(): void;
    static ɵfac: i0.ɵɵFactoryDeclaration<InputFormComponent, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<InputFormComponent, "ard-input-form", never, { "id": "id"; "name": "name"; "min": "min"; "max": "max"; "minLength": "minLength"; "maxLength": "maxLength"; "value": "value"; "disabled": "disabled"; "placeholder": "placeholder"; "type": "type"; "control": "control"; "pattern": "pattern"; "mask": "mask"; "label": "label"; "description": "description"; "style": "style"; }, {}, never, never>;
}
export {};
