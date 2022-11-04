import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'fcfa'
})
export class FcfaPipe implements PipeTransform {

  transform(prix: number): string {
    return prix+" FCFA";
  }

}
