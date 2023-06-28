export interface IBattleStore {
  loading: boolean;
  trueData: Array<any>;
  fullData: IFullData;
  data: IData;
}

export interface IFullData {
  [key: string]: any;
}

export interface IData {
  [key: string]: string | null;
}
