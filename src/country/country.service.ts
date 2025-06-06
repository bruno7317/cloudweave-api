import { Injectable } from '@nestjs/common';
import { HttpException } from '@nestjs/common/exceptions';
import { lastValueFrom } from 'rxjs';
import { HttpService as LegacyHttpService } from '@nestjs/axios';
import { Country } from './models/country.model';
import { CountryResource } from './models/country_resource.model';

@Injectable()
export class CountryService {
  constructor(private readonly http: LegacyHttpService) {}

  async getAllCountries(): Promise<Country[]> {
    try {
      const url = `http://localhost:7100/country`;
      const response = await lastValueFrom(this.http.get(url));
      return response.data;
    } catch (error) {
      throw new HttpException('Failed to fetch countries', 500);
    }
  }

  async getCountryResources(countryId: number): Promise<CountryResource[]> {
    try {
      const url = `http://localhost:7100/country/${countryId}/resources`;
      const response = await lastValueFrom(this.http.get(url));
      return response.data;
    } catch (error) {
      throw new HttpException('Failed to fetch country resources', 500);
    }
  }
}
