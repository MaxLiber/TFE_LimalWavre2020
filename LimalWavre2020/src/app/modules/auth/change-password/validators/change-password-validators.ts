import { AbstractControl, ValidatorFn } from '@angular/forms';

/*
export function ageRangeValidator(control: AbstractControl): { [key: string]: boolean } | null {
    if (control.value !== undefined && (isNaN(control.value) || control.value < 18 || control.value > 45)) {
        return { 'ageRange': true };
    }
    return null;
}
*/

export function jetonValidator(jetonExpectedValue: string): ValidatorFn {
    return (control: AbstractControl): { [key: string]: boolean } | null => {
        //console.log('control value:'+control.value);
        //console.log('control expected value:'+jetonExpectedValue);
        if (control.value !== undefined && ( control.value !== jetonExpectedValue )) {
            return { jetonInvalid: true };
        }
        return null; // return null if no error !
    };
}
