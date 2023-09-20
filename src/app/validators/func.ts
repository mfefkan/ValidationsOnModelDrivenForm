import { AbstractControl, ValidationErrors } from '@angular/forms';

export function capitalLetterValidator(  control: AbstractControl): ValidationErrors | null 
{

  const value = control.value;

 const ascii: string[] = [];

 for (let n = 65; n <= 90; n++)
 ascii.push(String.fromCharCode(n));

 if (ascii.indexOf(value[0]) == -1){
    return {capitalLetter : true }
 }
  return null;

//Baş harfi küçükse capitalLetter değilse null döndüren metoda sahip bir klas. 

}
