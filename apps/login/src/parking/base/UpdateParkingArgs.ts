/*
------------------------------------------------------------------------------ 
This code was generated by Amplication. 
 
Changes to this file will be lost if the code is regenerated. 

There are other ways to to customize your code, see this doc to learn more
https://docs.amplication.com/how-to/custom-code

------------------------------------------------------------------------------
  */
import { ArgsType, Field } from "@nestjs/graphql";
import { ApiProperty } from "@nestjs/swagger";
import { ParkingWhereUniqueInput } from "./ParkingWhereUniqueInput";
import { ValidateNested } from "class-validator";
import { Type } from "class-transformer";
import { ParkingUpdateInput } from "./ParkingUpdateInput";

@ArgsType()
class UpdateParkingArgs {
  @ApiProperty({
    required: true,
    type: () => ParkingWhereUniqueInput,
  })
  @ValidateNested()
  @Type(() => ParkingWhereUniqueInput)
  @Field(() => ParkingWhereUniqueInput, { nullable: false })
  where!: ParkingWhereUniqueInput;

  @ApiProperty({
    required: true,
    type: () => ParkingUpdateInput,
  })
  @ValidateNested()
  @Type(() => ParkingUpdateInput)
  @Field(() => ParkingUpdateInput, { nullable: false })
  data!: ParkingUpdateInput;
}

export { UpdateParkingArgs as UpdateParkingArgs };
