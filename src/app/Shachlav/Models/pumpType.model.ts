import { Optional } from '@angular/core';

export  class PumpType
    {    
        public get Id():number{
            return this._Id;
        }

        public set Id(value:number){
             this._Id=value;
        }

        constructor(
           
           @Optional() private _Id:number,
            public PType:string,

        ){}  
    
    }