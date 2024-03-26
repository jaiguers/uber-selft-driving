import { Test, TestingModule } from '@nestjs/testing';
import { UserBookingTripResolver } from './user-booking-trip.resolver';
import { UserBookingTripService } from './user-booking-trip.service';

describe('UserBookingTripResolver', () => {
  let resolver: UserBookingTripResolver;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [UserBookingTripResolver, UserBookingTripService],
    }).compile();

    resolver = module.get<UserBookingTripResolver>(UserBookingTripResolver);
  });

  it('should be defined', () => {
    expect(resolver).toBeDefined();
  });
});
