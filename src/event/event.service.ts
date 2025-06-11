import { HttpService } from "@nestjs/axios";
import { HttpException, Injectable } from "@nestjs/common";
import { lastValueFrom } from "rxjs";
import { Event } from "./models/event.model";

@Injectable()
export class EventService {
    constructor(private readonly http: HttpService) {}

    async getEvents(): Promise<Event[]> {
        try {
            const url = 'http://localhost:7000/event'
            const response = await lastValueFrom(this.http.get(url))
            return response.data
        } catch (error) {
            throw new HttpException(`Failed to fetch turn events.`, 500)
        }
    }

    async postEvents(events: Event[]): Promise<void> {
        try {
            const url = 'http://localhost:7000/event'
            await lastValueFrom(this.http.post(url, events))
        } catch (error) {
            throw new HttpException(`Failed to post turn events.`, 500)
        }
    }
}