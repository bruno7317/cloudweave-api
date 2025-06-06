import { Resolver, Query, ResolveField, Parent } from '@nestjs/graphql';
import { Country } from './models/country.model';
import { CountryService } from './country.service';
import { Inject } from '@nestjs/common';
import { CountryResource } from './models/country_resource.model';

@Resolver(() => Country)
export class CountryResolver {
    constructor(
        private readonly countryService: CountryService
    ) {}

    @Query(() => [Country])
    async countries(): Promise<Country[]> {
        return this.countryService.getAllCountries();
    }

    @ResolveField(() => [CountryResource])
    async resources(@Parent() country: Country): Promise<CountryResource[]> {
        return this.countryService.getCountryResources(country.id);
    }
}