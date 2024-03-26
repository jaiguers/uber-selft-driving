"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.UpdateUserBookingTripInput = void 0;
const create_user_booking_trip_input_1 = require("./create-user-booking-trip.input");
const graphql_1 = require("@nestjs/graphql");
let UpdateUserBookingTripInput = class UpdateUserBookingTripInput extends (0, graphql_1.PartialType)(create_user_booking_trip_input_1.CreateUserBookingTripInput) {
};
exports.UpdateUserBookingTripInput = UpdateUserBookingTripInput;
__decorate([
    (0, graphql_1.Field)(() => graphql_1.Int),
    __metadata("design:type", Number)
], UpdateUserBookingTripInput.prototype, "id", void 0);
exports.UpdateUserBookingTripInput = UpdateUserBookingTripInput = __decorate([
    (0, graphql_1.InputType)()
], UpdateUserBookingTripInput);
//# sourceMappingURL=update-user-booking-trip.input.js.map