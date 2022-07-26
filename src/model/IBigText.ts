interface IModel {
  year: number;
  day: number;
}

export interface IBigText {
  text: string;
  code: string;
  model: IModel;
}
