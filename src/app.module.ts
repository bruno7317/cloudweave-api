import { ApolloDriver, ApolloDriverConfig } from '@nestjs/apollo'
import { Module } from '@nestjs/common';
import { GraphQLModule } from '@nestjs/graphql';
import { CountryModule } from './country/country.module';
import { join } from 'path';
import { ResourceModule } from './resource/resource.module';

@Module({
  imports: [
    GraphQLModule.forRoot<ApolloDriverConfig>({
      driver: ApolloDriver,
      autoSchemaFile: join(process.cwd(), 'src/schema.gql')
    }),
    CountryModule,
    ResourceModule
  ]
})

export class AppModule {}
