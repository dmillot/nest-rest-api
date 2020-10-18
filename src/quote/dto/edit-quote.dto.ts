import { IsNotEmpty, IsString } from "class-validator";

export class EditQuoteDto {

  @IsNotEmpty()
  @IsString()
  public readonly author: string;

  @IsNotEmpty()
  @IsString()
  public readonly philosophy: string;

  @IsNotEmpty()
  @IsString()
  public readonly quote: string;

  public constructor(opts?: Partial<EditQuoteDto>) {
    Object.assign(this, opts);
  }

}
