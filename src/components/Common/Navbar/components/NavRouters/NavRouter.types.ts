export interface NavRouterType {
  location: any;
  selected: string;
  checkActiveLink(e:any, address: string): void;
  isTechVision: boolean
}