import { Args, Mutation, Query, Resolver } from "@nestjs/graphql";
import { Event, EventInput } from "./models/event.model";
import { EventService } from "./event.service";

@Resolver(() => Event)
export class EventResolver{
    constructor(private readonly eventService: EventService) {}

    @Query(() => [Event])
    async events(): Promise<Event[]> {
        return this.eventService.getEvents()
    }

    @Mutation(() => Boolean)
    async addEvents(@Args('events', { type: () => [EventInput] }) events: EventInput[]): Promise<boolean> {
        await this.eventService.postEvents(events)
        return true
    }
}