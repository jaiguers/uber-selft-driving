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
exports.CreateTripInput = void 0;
const graphql_1 = require("@nestjs/graphql");
let CreateTripInput = class CreateTripInput {
};
exports.CreateTripInput = CreateTripInput;
__decorate([
    (0, graphql_1.Field)(),
    __metadata("design:type", String)
], CreateTripInput.prototype, "TripDescription", void 0);
__decorate([
    (0, graphql_1.Field)(),
    __metadata("design:type", Date)
], CreateTripInput.prototype, "TripDate", void 0);
__decorate([
    (0, graphql_1.Field)(),
    __metadata("design:type", String)
], CreateTripInput.prototype, "TripStatus", void 0);
__decorate([
    (0, graphql_1.Field)(),
    __metadata("design:type", String)
], CreateTripInput.prototype, "TripOrigin", void 0);
__decorate([
    (0, graphql_1.Field)(),
    __metadata("design:type", String)
], CreateTripInput.prototype, "TripDestination", void 0);
__decorate([
    (0, graphql_1.Field)((type) => graphql_1.Int),
    __metadata("design:type", Number)
], CreateTripInput.prototype, "TripValue", void 0);
exports.CreateTripInput = CreateTripInput = __decorate([
    (0, graphql_1.InputType)()
], CreateTripInput);
//# sourceMappingURL=create-trip-input.js.map