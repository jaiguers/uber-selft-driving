import { Test, TestingModule } from '@nestjs/testing';
import { UserBookingTripService } from './user-booking-trip.service';

describe('UserBookingTripService', () => {
  let service: UserBookingTripService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [UserBookingTripService],
    }).compile();

    service = module.get<UserBookingTripService>(UserBookingTripService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
