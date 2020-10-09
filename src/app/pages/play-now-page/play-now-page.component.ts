import { Component, OnInit, ɵConsole } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import {SnotifyService} from 'ng-snotify';

@Component({
  templateUrl: './play-now-page.component.html',
  styleUrls: ['./play-now-page.component.scss']
})
export class PlayNowPageComponent implements OnInit {

  constructor(private formBuilder : FormBuilder,private snotifyService: SnotifyService) { }
  signUpForm;
  fields =[
    "name",
    "email",
    "birthday",
    "nickname"
  ] 

  formCreator(){
    let form = {}
    this.fields.map((field)=>
    {
      form[field] = '';
    })
    return form;
  }

  ngOnInit(): void {
    this.signUpForm = this.formBuilder.group(this.formCreator())
  }

  submit(){
    debugger;
    let hadError = false;
    this.fields.map((field) =>{
      if(this.signUpForm.value[field] == '')
      {
        this.noFieldMessage(field)
        hadError = true;
      }
    })
    if(!hadError)
    {
      this.success()      
    }
  }

  noFieldMessage(fieldName){
    this.snotifyService.error(`O campo ${fieldName} não foi preenchido.`,`Erro:`,{timeout:3000,showProgressBar:true,closeOnClick:true})
  }

  success(){
    this.snotifyService.success(`${this.signUpForm.value.name}, a confirmação virá por e-mail com link para download (Não funciona ainda.)`,"Seja bem vindo")
  }

}
