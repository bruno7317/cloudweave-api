import { Field, Float, Int, ObjectType } from "@nestjs/graphql";
import { Resource } from "./resource.model";

@ObjectType()
export class CountryResource {
    @Field(() => Int)
    stockpile: number;

    @Field(() => Int)
    production: number;

    @Field(() => Int)
    consumption: number;

    @Field(() => Resource)
    resource: Resource;
}