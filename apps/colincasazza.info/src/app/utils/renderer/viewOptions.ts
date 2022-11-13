import { Color, Object3D, Scene, Vector3 } from "three";
import { View } from "./view";

export interface IControlsOptions {
  enabled?: boolean;
  minAzimuthAngle?: number;
  minPolarAngle?: number;
  enableRotate?: boolean;
  startDirection?: Vector3;
}

export interface ICameraOptions {
  fov?: number;
  aspect?: number;
  near?: number;
  far?: number;
  startingPosition?: Vector3;
}

export type IViewData = Record<string, unknown>;

export interface IViewOptions {
  id: string;
  renderTickCallback: (view: View, timeStepMS: number) => void;
  background?: Color;
  scene?: Scene;
  cameraOptions?: ICameraOptions;
  controlsOptions?: IControlsOptions;
  objects?: Record<string, Object3D>;
}
