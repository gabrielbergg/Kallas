import { Component, ElementRef, HostListener, OnInit, ViewChild } from '@angular/core';
import AOS from 'aos';


@Component({
  selector: 'app-about-us',
  templateUrl: './about-us.component.html',
  styleUrls: ['./about-us.component.css']
})
export class AboutUsComponent {
  salao1:string  = "assets/salao1.jpg";
  whats:string = "assets/whatsapp.png";
  kallas1:string = "assets/kallas1.jpg";
  kallas2:string = "assets/kallas2.jpg";
  kallas3:string = "assets/kallas3.jpg";
  kallas4:string = "assets/kallas4.jpg";

}
