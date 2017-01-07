import { Injectable }   from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

import { input } from './../models/input.model';

@Injectable()
export class InputControl{
    constructor(){}

    toFormgroup(inputs:input<any>[]){
        let group:any={};
        inputs.map((i) => {
            group[i.key] = i.required ? new FormControl( i.value || '',Validators.required) : new FormControl(i.value || '');
        });
        return new FormGroup(group);
    }
}