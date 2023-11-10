export interface RawBinaceItem {
  e: string;
  E: Date;
  s: string;
  p: number;
  i: number;
  P: number;
  r: number;
  T: string;
}

export enum RawBinaceItemMapper {
  E = 'eventTime',
  s = 'symbol',
  p = 'markPrice',
  i = 'indexPrice',
  P = 'estimatedSettlePrice',
  r = 'fundingRate',
  T = 'nextFundingTime'
}

export enum GameWSprocess {
  START = 'start',
  STOP = 'stop'
}
