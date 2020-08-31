export class Material
    {   
        public get Id(): number {
            return this._Id;
        }
        public set Id(value: number) {
            this._Id = value;
        }
        constructor(
       
        private _Id:number,
            public Name:string
        )
{}       
     
         }
