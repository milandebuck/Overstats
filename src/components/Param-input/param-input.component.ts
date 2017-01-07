import { Component ,Input} from '@angular/core';

import { FormGroup } from '@angular/forms';

import { input } from './../../models/input.model'


@Component({
    selector: 'param-input',
    template: require('./content/param-input.component.html'),
    styles: [ require('./content/param-input.component.css') ]
})
export class ParamInputComponent{

    @Input() param:input<any>;
    @Input() form:FormGroup;
    get isValid(){
        return this.form.controls[this.param.key].valid;
    }

}