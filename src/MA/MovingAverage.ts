import Big, {BigSource} from 'big.js';

export abstract class MovingAverage {
  protected result: Big | undefined;

  constructor(public readonly interval: number) {}

  get isStable(): boolean {
    return !!this.result;
  }

  getResult(): Big {
    if (!this.result) {
      // throw new NotEnoughDataError();
      this.result = new Big(0);
    }
    return this.result;
  }

  abstract update(price: BigSource): void;
}
