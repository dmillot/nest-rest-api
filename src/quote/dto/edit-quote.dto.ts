export class EditQuoteDto {

  public readonly author: string;
  public readonly philosophy: string;
  public readonly quote: string;

  public constructor(opts?: Partial<EditQuoteDto>) {
    Object.assign(this, opts);
  }

}
