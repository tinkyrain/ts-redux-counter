export interface counterState {
    count:number;
}

export interface counterActoin{
    type: string;
}

export interface ButtonProps{
    text?:string,
    color?:string,
    bg?:string,
    borderColor?:string,
    actionBtn?:string,
} 