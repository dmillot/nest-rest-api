export class QuoteDto {

  public readonly id: number;
  public readonly author: string;
  public readonly philosophy: string;
  public readonly quote: string;

  public constructor(opts?: Partial<QuoteDto>) {
    Object.assign(this, opts);
  }

}
