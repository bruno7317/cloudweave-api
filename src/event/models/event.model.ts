import { Field, InputType, Int, ObjectType } from "@nestjs/graphql";

@ObjectType()
export class Event {

    @Field(() => Int)
    turn: number

    @Field()
    actor: string

    @Field()
    action: string

    @Field()
    resource: string

    @Field(() => Int)
    quantity: number
}

@InputType()
export class EventInput {
    @Field(() => Int)
    turn: number

    @Field()
    actor: string

    @Field()
    action: string

    @Field()
    resource: string

    @Field(() => Int)
    quantity: number
}