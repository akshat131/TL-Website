import { Component, OnInit } from '@angular/core';
import * as $ from 'jquery'
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  

  constructor() { }

  ngOnInit(): void {
    
    $(document).ready(function(){
      $(".card").mouseover(function(){
        $(".card").css("cursor","pointer")
      });
    
      $(".card-body").click(function(){
        $(this).siblings(".overlay").show(600)
      });
      $(".card-footer").click(function(){
        $(this).siblings(".overlay").show(600)
      });

      $(".closeOverlay").click(function(){
        $(".overlay").hide(600)
      });
     
    });
  }
}
