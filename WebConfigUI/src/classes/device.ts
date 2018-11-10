export class Device {
    ID: number;
    DeviceParent: string;
    PartNumber: string;
    DeviceName: string;
    DeviceType: string;
    PrimaryIP: string;
    Architecture: string;
    Capabilities: string[];
    BoardCount: number;
    HatCount: number;
    ShieldCount: number;
    SensorCount: number;
    //pins
  }
  export class DeviceTree {
    Parent: Device;
    ChildDevices: Device[];
    
  }