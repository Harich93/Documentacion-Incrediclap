import { Component } from '@angular/core';
import { DataService } from 'src/app/services/data.service'

@Component({
  selector: 'app-accordion-front',
  templateUrl: './accordion-front.component.html',
  styleUrls: ['./accordion-front.component.scss']
})
export class AccordionFrontComponent {

  baseUrlCode: string = 'https://github.com/Harich93/Flutter--App_IncredibClap/blob/main/lib'; 

  constructor(public dataS: DataService){}


}
