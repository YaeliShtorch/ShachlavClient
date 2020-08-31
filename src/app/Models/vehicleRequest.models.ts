import{Driver}from '../Models/driver.models';
import{PumpType}from '../Models/pumpType.model';
export  class VehicleRequest
    {    
        constructor(
            public Id:number,
            public Description:string, 
            public  PipesLength:number,  
            public  LicenseNumber:number,    
            public  Driver:Driver,      
            public  MixerNumber:number,
            public PumpType:PumpType,
        ){
            
        }  
    
    }
