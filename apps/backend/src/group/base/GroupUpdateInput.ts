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
import { IsJSONValue } from "@app/custom-validators";
import { IsOptional, ValidateNested, IsString } from "class-validator";
import { GraphQLJSON } from "graphql-type-json";
import { InputJsonValue } from "../../types";
import { EventUpdateManyWithoutGroupsInput } from "./EventUpdateManyWithoutGroupsInput";
import { Type } from "class-transformer";
import { PersonUpdateManyWithoutGroupsInput } from "./PersonUpdateManyWithoutGroupsInput";

@InputType()
class GroupUpdateInput {
  @ApiProperty({
    required: false,
  })
  @IsJSONValue()
  @IsOptional()
  @Field(() => GraphQLJSON, {
    nullable: true,
  })
  description?: InputJsonValue;

  @ApiProperty({
    required: false,
    type: () => EventUpdateManyWithoutGroupsInput,
  })
  @ValidateNested()
  @Type(() => EventUpdateManyWithoutGroupsInput)
  @IsOptional()
  @Field(() => EventUpdateManyWithoutGroupsInput, {
    nullable: true,
  })
  events?: EventUpdateManyWithoutGroupsInput;

  @ApiProperty({
    required: false,
    type: () => PersonUpdateManyWithoutGroupsInput,
  })
  @ValidateNested()
  @Type(() => PersonUpdateManyWithoutGroupsInput)
  @IsOptional()
  @Field(() => PersonUpdateManyWithoutGroupsInput, {
    nullable: true,
  })
  people?: PersonUpdateManyWithoutGroupsInput;

  @ApiProperty({
    required: false,
    type: String,
  })
  @IsString()
  @IsOptional()
  @Field(() => String, {
    nullable: true,
  })
  title?: string | null;
}

export { GroupUpdateInput as GroupUpdateInput };
