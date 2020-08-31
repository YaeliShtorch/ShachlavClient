export class MaterialTypeOrder
    {
      public get Id(): number {
        return this._Id;
    }
    public set Id(value: number) {
        this._Id = value;
    }
      constructor(
        private _Id: number,
   
        public  OrderId:number ,
   
        public  IsConcrete:boolean, 
        public  ConcreteTypeId:number, 
        public  ConcDescId:number, 
        
        public  DeepId:number, 
        
        public  ExposureId:number, 
     
        public  ExtensionId:number, 
     
        public  IsClay:boolean,
        public  ClayTypeId:number, 
      
        public  IsPump:boolean, 
        public  VehicleTypeId:number, 
       
      
        public  Element:string,
   
        public  Amount:number 
     
      ){}
     
   
}