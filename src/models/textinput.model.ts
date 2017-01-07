import { input } from './input.model'

export class textinput extends input{
    controlType:string='string';
    type:string;
    constructor(options:{} = {}){
        super(options);
        this.type=options['type'] || 'text';
    }
}