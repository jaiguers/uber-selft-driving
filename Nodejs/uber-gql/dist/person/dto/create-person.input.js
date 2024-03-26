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
exports.CreatePersonInput = void 0;
const graphql_1 = require("@nestjs/graphql");
const class_validator_1 = require("class-validator");
let CreatePersonInput = class CreatePersonInput {
};
exports.CreatePersonInput = CreatePersonInput;
__decorate([
    (0, class_validator_1.IsNotEmpty)({ message: "PersonName es requerido" }),
    (0, class_validator_1.IsAlpha)('es-ES', { message: "PersonName debe contener solo letras" }),
    (0, graphql_1.Field)({ description: 'Nombre de la persona' }),
    __metadata("design:type", String)
], CreatePersonInput.prototype, "PersonName", void 0);
__decorate([
    (0, class_validator_1.IsOptional)(),
    (0, graphql_1.Field)({ nullable: true }),
    __metadata("design:type", String)
], CreatePersonInput.prototype, "PersonPhone", void 0);
__decorate([
    (0, class_validator_1.IsOptional)(),
    (0, graphql_1.Field)({ nullable: true }),
    __metadata("design:type", String)
], CreatePersonInput.prototype, "PersonAddress", void 0);
__decorate([
    (0, class_validator_1.IsOptional)(),
    (0, graphql_1.Field)({ nullable: true }),
    __metadata("design:type", String)
], CreatePersonInput.prototype, "PersonStatus", void 0);
__decorate([
    (0, class_validator_1.IsOptional)(),
    (0, graphql_1.Field)({ nullable: true }),
    __metadata("design:type", String)
], CreatePersonInput.prototype, "UserId", void 0);
exports.CreatePersonInput = CreatePersonInput = __decorate([
    (0, graphql_1.InputType)()
], CreatePersonInput);
//# sourceMappingURL=create-person.input.js.map