import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  mydata:any;
  DataArr=new Array();
  sum!: number;
  constructor() { }

  ngOnInit(): void {
  }
  Onclick()
  {

    // console.log(this.mydata)
    this.DataArr.push(this.mydata)
    // console.log(this.DataArr)
    }

remove()
{
  this.DataArr.pop()
}

getAdd()
{

 
console.log(this.DataArr.reduce((a, b) => a + b, 0))
}
}
