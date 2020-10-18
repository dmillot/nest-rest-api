import { IsNotEmpty, IsString } from "class-validator";

export class AddQuoteDto {

  @IsNotEmpty()
  @IsString()
  public readonly author: string;

  @IsNotEmpty()
  @IsString()
  public readonly philosophy: string;

  @IsNotEmpty()
  @IsString()
  public readonly quote: string;

  public constructor(opts?: Partial<AddQuoteDto>) {
    Object.assign(this, opts);
  }

}
