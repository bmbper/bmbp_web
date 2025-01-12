export interface BmbpDict {
  dictCode: string;
  dictCodePath: string;
  dictParentCode: string;
  dictName: string;
  dictNamePath: string;
  dictAlias: string;
  dictValue: string;
  dictChildren: BmbpDict[];
  dataStatus: string;
}
