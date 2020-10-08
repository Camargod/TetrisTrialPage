import { Component, OnInit } from '@angular/core';

@Component({
  templateUrl: './placar-page.component.html',
  styleUrls: ['./placar-page.component.scss']
})
export class PlacarPageComponent implements OnInit {

  constructor() { }
  score = 
  [
    {nick:"A",score:279999},
    {nick:"AB",score:279999},
    {nick:"AC",score:279999},
    {nick:"AD",score:279999},
    {nick:"AE",score:279999},
    {nick:"AF",score:279999},
    {nick:"AG",score:279999},
    {nick:"AH",score:279999},
    {nick:"AI",score:279999},
    {nick:"AJ",score:279999},
    {nick:"AK",score:279999},
    {nick:"AL",score:279999},
    {nick:"AM",score:279999}
  ]
  ngOnInit(): void {
  }

}
