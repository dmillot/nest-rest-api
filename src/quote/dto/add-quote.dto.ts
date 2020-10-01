export class AddQuoteDto {

  public readonly author: string;
  public readonly philosophy: string;
  public readonly quote: string;

  public constructor(opts?: Partial<AddQuoteDto>) {
    Object.assign(this, opts);
  }

}
