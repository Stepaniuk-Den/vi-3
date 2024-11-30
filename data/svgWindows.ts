import AirPermeability from "@/public/icons/WindowsFeatures/F7Wind.svg";
import WaterResistance from "@/public/icons/WindowsFeatures/F7Drop.svg";
import WindLoadResistance from "@/public/icons/WindowsFeatures/F7CloudFog.svg";
import CoefficientOfHeatTransfer from "@/public/icons/WindowsFeatures/F7Thermometer.svg";
import { IWindowSvgItems } from "@/helpers/interfaces";



export const windowSvgItems: IWindowSvgItems = {
    windows: [
      { svg: AirPermeability, name: "AirPermeability" },
      { svg: WindLoadResistance, name: "WindLoadResistance" },
      { svg: WaterResistance, name: "WaterResistance" },
      { svg: CoefficientOfHeatTransfer, name: "CoefficientOfHeatTransfer" },
    ]
  };