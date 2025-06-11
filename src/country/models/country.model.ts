import { ObjectType, Field, ID, Float } from '@nestjs/graphql';
import { CountryResource } from './country_resource.model';

@ObjectType()
export class Country {
  @Field(() => ID)
  id: number;

  @Field()
  name: string;

  @Field()
  flag: string;
  
  @Field(() => Float)
  money_reserves: number;

  @Field(() => [CountryResource], { nullable: true })
  resources?: CountryResource[];
}