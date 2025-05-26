import { Injectable } from '@nestjs/common';
import { HttpException } from '@nestjs/common/exceptions';
import { lastValueFrom } from 'rxjs';
import { HttpService as LegacyHttpService } from '@nestjs/axios';

@Injectable()
export class CountryService {
  constructor(private readonly http: LegacyHttpService) {}

  async getAllCountries() {
    try {
      const url = 'http://localhost:7100/country';
      const response = await lastValueFrom(this.http.get(url));
      return response.data;
    } catch (error) {
      throw new HttpException('Failed to fetch countries', 500);
    }
  }
}
