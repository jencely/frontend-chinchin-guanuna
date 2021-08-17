import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-book',
  templateUrl: './book.component.html',
  styleUrls: ['./book.component.css']
})
export class BookComponent implements OnInit {
  disabled: boolean = true;

  value1: string = 'value1';
  
  value2: string = '';

  value3: string = '';

  value4: string = '';

  value5: string = 'Disabled';
  constructor() { }
  date1: Date = new Date();

    date2: Date = new Date();

    date3: Date = new Date();

    date4: Date = new Date();

    date5: Date = new Date();

    date6: Date = new Date();

    date7: Date = new Date();

    date8: Date = new Date();

    date9: Date = new Date();

    date10: Date = new Date();

    date11: Date = new Date();

    date12: Date = new Date();

    date13: Date = new Date();

    date14: Date = new Date();
    
    dates: Date[] = [];

    rangeDates: Date[] = [];

    minDate: Date= new Date(); 

    maxDate!: Date;

    es: any;

    invalidDates!: Array<Date>;


  ngOnInit(): void {
    this.es = {
      firstDayOfWeek: 1,
      dayNames: [ "domingo","lunes","martes","miércoles","jueves","viernes","sábado" ],
      dayNamesShort: [ "dom","lun","mar","mié","jue","vie","sáb" ],
      dayNamesMin: [ "D","L","M","X","J","V","S" ],
      monthNames: [ "enero","febrero","marzo","abril","mayo","junio","julio","agosto","septiembre","octubre","noviembre","diciembre" ],
      monthNamesShort: [ "ene","feb","mar","abr","may","jun","jul","ago","sep","oct","nov","dic" ],
      today: 'Hoy',
      clear: 'Borrar'
  }

  let today = new Date();
  let month = today.getMonth();
  let year = today.getFullYear();
  let prevMonth = (month === 0) ? 11 : month -1;
  let prevYear = (prevMonth === 11) ? year - 1 : year;
  let nextMonth = (month === 11) ? 0 : month + 1;
  let nextYear = (nextMonth === 0) ? year + 1 : year;
  this.minDate = new Date();
  this.minDate.setMonth(prevMonth);
  this.minDate.setFullYear(prevYear);
  this.maxDate = new Date();
  this.maxDate.setMonth(nextMonth);
  this.maxDate.setFullYear(nextYear);

  let invalidDate = new Date();
  invalidDate.setDate(today.getDate() - 1);
  this.invalidDates = [today,invalidDate];
}
  }

