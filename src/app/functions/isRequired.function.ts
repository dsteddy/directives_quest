import { AbstractControl } from "@angular/forms";

export function isRequiredValidator(controlName1: string, controlName2: string) {
    return (group: AbstractControl): { [key: string]: boolean} | null => {
      const control1 = group.get(controlName1);
      const control2 = group.get(controlName2);

      if (!control1 || !control2) {
        return null;
      }

      if (!control1.value && !control2.value) {
        return { isRequired: true };
      }
      return null;
    };
  }