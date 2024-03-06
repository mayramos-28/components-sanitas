import { Component, Input, OnInit } from '@angular/core';


@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrl: './main.component.scss'
})
export class MainComponent implements OnInit{
  @Input() configs: any[] = [];

  ngOnInit(): void {
     
  }
}
