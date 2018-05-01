import { FormControl, AbstractControl } from '@angular/forms';

export function matchOtherValidator(otherControlName: string) {
	return (control: AbstractControl): { [key: string]: any } => {
		try {
			let match = control.value == control.parent.get(otherControlName).value;

			return match ? null : { "matchOtherValidator": { value: control.value } };
		}
		catch {
			return { "matchOtherValidator": { value: control.value } };
		}
	}
}