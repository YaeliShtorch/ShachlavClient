export class MaterialTypeOrder {
  constructor(
    public Id: number,
    public OrderId:number,
    public IsConcrete: boolean,
    public ConcreteTypeId: number,
    public ConcDescId: number,
    public DeepId: number,
    public ExposureId: number,
    public ExtensionId: number,
    public IsClay: boolean,
    public ClayTypeId: number,
    public IsPump: boolean,
    public Element: string,
    public Amount: number,
    public VehicleTypeId: number,
    public StatusMaterialId: number,
  ) { }




}

