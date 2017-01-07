export class input<T>{
    value:T;
    key:string;
    label:string;
    required:boolean;
    type:string;
    desc:string;

    constructor(
        options: {
            value?: T,
            key?: string,
            label?: string,
            required?:boolean;
            type?: string;
            desc?:string;
        } = {}
        ){
        this.value = options.value;
        this.key = options.key || "";
        this.label = options.label || "";
        this.required = !!options.required;
        this.type = options.type || "";
        this.desc = options.desc || "";


    }
}