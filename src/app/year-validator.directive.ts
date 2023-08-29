import { Directive } from '@angular/core';
import { NG_VALIDATORS, AbstractControl, Validator, ValidatorFn, ValidationErrors } from '@angular/forms';

export function yearValidator(): ValidatorFn {
  const currentYear = new Date().getFullYear();
  const minYear = 1900;

  return (control: AbstractControl): ValidationErrors | null => {
    const selectedYear = parseInt(control.value);
    const valid = selectedYear >= minYear && selectedYear <= currentYear;

    if (valid) {
      return null;
    } else {
      return {
        yearValidator: {
          valid: false
        }
      };
    }
  };
}

@Directive({
  selector: '[appYearValidator]',
  providers: [{
    provide: NG_VALIDATORS,
    useExisting: YearValidatorDirective,
    multi: true
  }]
})
export class YearValidatorDirective implements Validator {
  constructor() {}

  public validate(control: AbstractControl): ValidationErrors | null {
    return yearValidator()(control);
  }
}