import { Pipe, PipeTransform } from '@angular/core';
import { Bike } from './../listings/bike';

@Pipe({
  name: 'search'
})
export class SearchPipe implements PipeTransform {

  transform(bikes: Array<Bike>, search_text: string): Array<Bike> {

    if (!search_text) { return bikes; }

        search_text = search_text.toLowerCase();

      return bikes.filter(bike => bike.title.toLowerCase().includes(search_text) || bike.location.toLowerCase().includes(search_text));
  }

}
