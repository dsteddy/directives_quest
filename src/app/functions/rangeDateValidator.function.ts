import { AbstractControl, ValidationErrors } from "@angular/forms";

export function rangeDateValidator(minYear: number, maxYear: number) {
    return (control: AbstractControl): ValidationErrors | null => {
      const year = control.value;
      if (year < minYear || year > maxYear) {
        return {
          min: {
            requiredMin: minYear,
            requiredMax: maxYear,
          }
        };
      }
      return null;
    };
  }