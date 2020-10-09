import { Component, OnInit } from '@angular/core';
@Component({
  templateUrl: './about-page.component.html',
  styleUrls: ['./about-page.component.scss'],
  // animations:[
  //   trigger('changePicture',[
  //     state('left',style({

  //     })),
  //     state('right',style({

  //     })),
  //     transition('* => left',animate('2s ease-in',keyframes(
  //       [
  //         style({}),
  //         style({})
  //       ]
  //     )))

  //   ])
  // ]
})
export class AboutPageComponent implements OnInit {

  colabs =
  [
    {name:"Gabriel Silva de Camargo", picture:"./assets/gabriel.jpg", role:"FullStack Developer / Game Programmer"},
    {name:"Augusto Sousa Gomes", picture:"./assets/augusto.jpg",role:"Documentador"},
    {name:"Giulia Neves", picture:"./assets/giulia.png",role:"Roteirista"},
    {name:"Fernando Plá", picture:"./assets/pla.jpg",role:"Arte"},
    {name:"André Luis Ramos", picture:"./assets/andre.jpg",role:"Sound Effects"},
    {name:"Breno Capitanio", picture:"./assets/breno.jpg",role:"Som e Música"},
    
  ]
  constructor() { }
  
  colabActualIndex = 0;
  ngOnInit(): void 
  {
    this.colabActualIndex = 0;
  }

  changeColabPicture(next: number)
  {
    if(this.colabActualIndex + next < 0){
      this.colabActualIndex = this.colabs.length - 1;
    }
    else if(this.colabActualIndex + next > this.colabs.length - 1){
      this.colabActualIndex = 0;
    }
    else{
      this.colabActualIndex += next;
    }
  }

}
