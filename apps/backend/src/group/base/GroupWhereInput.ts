/*
------------------------------------------------------------------------------ 
This code was generated by Amplication. 
 
Changes to this file will be lost if the code is regenerated. 

There are other ways to to customize your code, see this doc to learn more
https://docs.amplication.com/how-to/custom-code

------------------------------------------------------------------------------
  */
import { InputType, Field } from "@nestjs/graphql";
import { ApiProperty } from "@nestjs/swagger";
import { JsonFilter } from "../../util/JsonFilter";
import { Type } from "class-transformer";
import { IsOptional, ValidateNested } from "class-validator";
import { EventListRelationFilter } from "../../event/base/EventListRelationFilter";
import { StringFilter } from "../../util/StringFilter";
import { PersonListRelationFilter } from "../../person/base/PersonListRelationFilter";
import { StringNullableFilter } from "../../util/StringNullableFilter";

@InputType()
class GroupWhereInput {
  @ApiProperty({
    required: false,
    type: JsonFilter,
  })
  @Type(() => JsonFilter)
  @IsOptional()
  @Field(() => JsonFilter, {
    nullable: true,
  })
  description?: JsonFilter;

  @ApiProperty({
    required: false,
    type: () => EventListRelationFilter,
  })
  @ValidateNested()
  @Type(() => EventListRelationFilter)
  @IsOptional()
  @Field(() => EventListRelationFilter, {
    nullable: true,
  })
  events?: EventListRelationFilter;

  @ApiProperty({
    required: false,
    type: StringFilter,
  })
  @Type(() => StringFilter)
  @IsOptional()
  @Field(() => StringFilter, {
    nullable: true,
  })
  id?: StringFilter;

  @ApiProperty({
    required: false,
    type: () => PersonListRelationFilter,
  })
  @ValidateNested()
  @Type(() => PersonListRelationFilter)
  @IsOptional()
  @Field(() => PersonListRelationFilter, {
    nullable: true,
  })
  people?: PersonListRelationFilter;

  @ApiProperty({
    required: false,
    type: StringNullableFilter,
  })
  @Type(() => StringNullableFilter)
  @IsOptional()
  @Field(() => StringNullableFilter, {
    nullable: true,
  })
  title?: StringNullableFilter;
}

export { GroupWhereInput as GroupWhereInput };