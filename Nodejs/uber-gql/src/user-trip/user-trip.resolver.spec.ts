import { Test, TestingModule } from '@nestjs/testing';
import { UserTripResolver } from './user-trip.resolver';
import { UserTripService } from './user-trip.service';

describe('UserTripResolver', () => {
  let resolver: UserTripResolver;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [UserTripResolver, UserTripService],
    }).compile();

    resolver = module.get<UserTripResolver>(UserTripResolver);
  });

  it('should be defined', () => {
    expect(resolver).toBeDefined();
  });
});
