export class materialTypeOrderViewDTO{

    constructor(
        public Id:number,
        public OrderId:number,
        public Element:string,
        public Amount:number,
        public StatusMaterial:string,
        public MaterialName:string,
        public ManagerComment:string,
        public PipeLength:number,
    ){

    }

}