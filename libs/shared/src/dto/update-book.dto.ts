import { IsString, IsOptional, IsNumber, IsNotEmpty } from 'class-validator';

export class UpdateBookDto {
  // ID must be present and a string
  @IsNotEmpty()
  @IsString()
  id: string;

  // Title is optional, but if present, must be a string
  @IsOptional()
  @IsString()
  title?: string;

  // Author is optional, but if present, must be a string
  @IsOptional()
  @IsString()
  author?: string;

  // Price is optional, but if present, must be a number
  @IsOptional()
  @IsNumber()
  price?: number;
}