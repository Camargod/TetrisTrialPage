import { Component, HostListener, OnInit } from '@angular/core';

@Component({
  selector: 'page-header',
  templateUrl: './page-header.component.html',
  styleUrls: ['./page-header.component.scss']
})
export class PageHeaderComponent implements OnInit 
{
  isResponsiveMenuHidden : boolean = true;
  hiddenMenuClass = "header-responsive-close";
  constructor() { }

  ngOnInit() {
  }

  setMenuResponsibility()
  {
    this.isResponsiveMenuHidden = !this.isResponsiveMenuHidden;
    if(this.isResponsiveMenuHidden)
    {
      this.hiddenMenuClass = "";
    }
    else
    {
      this.hiddenMenuClass = "header-responsive-open";
    }
  }

  @HostListener("window:resize",['$event'])
  resetMenu(event)
  {
    if(event.target.innerWidth > 1000)
    {
      this.hiddenMenuClass = "";
      this.isResponsiveMenuHidden = true;
    }
  }
}

