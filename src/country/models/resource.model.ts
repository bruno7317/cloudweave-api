import { Field, Float, ObjectType } from "@nestjs/graphql";

@ObjectType()
export class Resource {
    @Field()
    name: string;

    @Field(() => Float)
    base_price: number;
}