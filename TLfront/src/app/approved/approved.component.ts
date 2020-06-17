import { Component, OnInit } from '@angular/core';
import { ApiService } from '../api.service';

import * as $ from 'jquery';

@Component({
  selector: 'app-approved',
  templateUrl: './approved.component.html',
  styleUrls: ['./approved.component.css'],
  providers: [ApiService]
})
export class ApprovedComponent implements OnInit {

  items = []
  requests = []
  total_items=0
  choice="request.is_denied"
  roll="19D070003"
  chooseapp()
  {
    this.choice="request.is_approved"
  }
  chooseden()
  {
    this.choice="request.is_denied"
  }


  constructor(private api: ApiService) { 
    
  }

  ngOnInit(): void {
   
      this.api.getItems().subscribe(
        data => {
          this.items = data;
        },
        error => {
          console.log(error);
        }
      );
      this.api.getRequests().subscribe(
        data => {
          this.requests = data;
        },
        error => {
          console.log(error);
        }
      );
      
        
  }
  flagItem(request)
  {
    this.items[request.item-1].is_flagged= true;
    this.api.updateItem(this.items[request.item-1]).subscribe(
      data => {
        console.log(data)
      },
      error => {
        console.log(error);
      }
    );

    this.api.createFlag(request).subscribe(
      data => {
        console.log(data)
      },
      error => {
        console.log(error);
      }
    );
  }


  choose(a, b){

    if(a == b)
      return true

      else
      return false

  }

 
  total(roll) {


//     var i;
//   for (i = 0; i < this.requests.length; i+=1) {
  
//     if( this.requests[i].is_sent == false){
//       this.total_items+= this.requests[i].quantity
  
//       console.log(this.total_items)
//       console.log(this.requests[i].quantity)
      
//        console.log(this.requests.length)
      
//       console.log("this.requests[1].quantity")
//   }
// }



    const keys= Object.keys(this.requests)
    this.total_items=0

    for( const key of keys) {

     

      if( this.requests[key].is_sent == false){
          this.total_items+= this.requests[key].quantity
          
      
         
       }
    }
    

  }  


 


}
