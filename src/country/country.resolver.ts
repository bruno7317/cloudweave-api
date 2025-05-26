import { Resolver, Query } from '@nestjs/graphql';
import { Country } from './models/country.model';
import { CountryService } from './country.service';
import { Inject } from '@nestjs/common';

@Resolver(() => Country)
export class CountryResolver {
    constructor(
        @Inject(CountryService) private readonly countryService: CountryService
    ) {}

    @Query(() => [Country])
    async countries(): Promise<Country[]> {
        return this.countryService.getAllCountries();
    }
}