import { EventEmitter } from '@angular/core';
import { FormGroup } from '@angular/forms';
import * as i0 from "@angular/core";
interface masksCard {
    card: string;
    cvv: string;
}
export declare class CardFormComponent {
    SubmitEvent: EventEmitter<FormGroup>;
    text: string;
    form: FormGroup;
    masks: masksCard;
    constructor();
    submit(): void;
    static ɵfac: i0.ɵɵFactoryDeclaration<CardFormComponent, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<CardFormComponent, "ard-card-form", never, {}, { "SubmitEvent": "SubmitEvent"; }, never, never>;
}
export {};
