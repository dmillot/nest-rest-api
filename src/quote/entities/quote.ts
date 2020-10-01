export class Quote {

  public id: number;
  public author: string;
  public philosophy: string;
  public quote: string;

  public constructor(author: string, philosophy: string, quote: string) {
    this.author = author;
    this.philosophy = philosophy;
    this.quote = quote;
  }

}
