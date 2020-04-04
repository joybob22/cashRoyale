import { AbstractControl } from '@angular/forms';

export function ValidateIsNumber(control: AbstractControl) {
  if (isNaN(control.value)) {
    return { validUrl: true };
  }
  return null;
}