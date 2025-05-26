import { Module } from '@nestjs/common';
import { HttpModule } from '@nestjs/axios';
import { CountryResolver } from './country.resolver';
import { CountryService } from './country.service';

@Module({
    imports: [HttpModule],
    providers: [CountryResolver, CountryService]
})
export class CountryModule {}
