import { Component, OnInit, Input } from '@angular/core';
import {Animal} from './Animals';

import {STUDE}from './predes';




@Component({
  selector: 'app-combo',
  templateUrl: './combo.component.html',
  styleUrls: ['./combo.component.css']
})
export class ComboComponent implements OnInit {
 flag:boolean[]=[true,true,true];
 compare:number;
 compare2:number;
message:string;
k:string[];
index:number[]
combine=STUDE;
 
  ad:Animal[]=[{successor:"FC/5.02/3",predecessor:"0"},{successor:"FC/5.05/4",predecessor:"1"},{successor:"FC/5.08/6",predecessor:"2"}];;


   

   toupdate(Success:HTMLInputElement,i:number):void
   {
console.log(Success);
console.log(i);
this.compare=Number((Success.toString()).split('/')[2]);
console.log(this.compare);
this.compare2= Number( this.combine[i].successor.split('/')[2])
if(this.compare>=this.compare2)
{
this.ad[i].successor=Success.toString();
this.message="VALID";
this.flag[i]=true;

}
else 
{
this.flag[i]=false;
this.message="version entered is lesser than   successor";

}


   }


   toupdatemain(val:HTMLInputElement)
   {
     console.log(this.combine);
     this.combine=this.ad;
     console.log(this.combine);
     //val.value='';
     this.message=''
     this.flag=[true,true,true]
   
    val.value="";
   }
    
  ngOnInit() 
  {

  }

}
