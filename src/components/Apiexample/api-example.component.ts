import { Component ,OnInit,Input} from '@angular/core';
import{ FormGroup } from '@angular/forms'

import { input } from './../../models/input.model'

import { InputControl } from './../../services/input-control.service'
import {ApiService} from "../../services/api.service";


@Component({
    selector: 'api-example',
    template: require('./content/api-example.component.html'),
    styles: [ require('./content/api-example.component.css') ],
})
export class ApiexampleComponent implements OnInit{

    @Input() apimodel:any;
    @Input() apiurl:string;
    params:input<any>[] = [];
    form:FormGroup;
    result:any;
    constructor(private ic:InputControl,private api:ApiService){}

    ngOnInit(){
        this.params=this.apimodel.params;
        this.form=this.ic.toFormgroup(this.params);
    }

    onSubmit(){
        if(this.apimodel.httptype === 'post'){
            this.api.post(this.apiurl + this.apimodel.url,this.form.value).subscribe(res => this.result=this.processResult(res));
            console.log(this.form.value);
        }
        else if(this.apimodel.httptype === 'get'){
            this.api.get(this.apiurl + this.apimodel.url,this.form.value).subscribe(res => this.result= this.processResult(res));
            console.log(this.form.value);
        }

    }

    private processResult(res){
        return JSON.parse(JSON.stringify(res.json())
            .replace(',',',\n')
            .replace('{','{\n')
            .replace('}','}\n'));

    }

}