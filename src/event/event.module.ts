import { HttpModule } from "@nestjs/axios";
import { Module } from "@nestjs/common";
import { EventService } from "./event.service";
import { EventResolver } from "./event.resolver";

@Module({
    imports: [HttpModule],
    providers: [EventResolver, EventService]
})
export class EventModule {}