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
exports.Person = void 0;
const graphql_1 = require("@nestjs/graphql");
const users_entity_1 = require("../../users/users.entity");
const typeorm_1 = require("typeorm");
let Person = class Person {
};
exports.Person = Person;
__decorate([
    (0, typeorm_1.PrimaryGeneratedColumn)('identity'),
    (0, graphql_1.Field)((type) => graphql_1.Int, { description: 'LLave primaria' }),
    __metadata("design:type", Number)
], Person.prototype, "PersonId", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    (0, graphql_1.Field)(),
    __metadata("design:type", String)
], Person.prototype, "PersonName", void 0);
__decorate([
    (0, typeorm_1.Column)({ nullable: true }),
    (0, graphql_1.Field)({ nullable: true }),
    __metadata("design:type", String)
], Person.prototype, "PersonPhone", void 0);
__decorate([
    (0, typeorm_1.Column)({ nullable: true }),
    (0, graphql_1.Field)({ nullable: true }),
    __metadata("design:type", String)
], Person.prototype, "PersonAddress", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    (0, graphql_1.Field)(),
    __metadata("design:type", String)
], Person.prototype, "PersonStatus", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    (0, graphql_1.Field)({ description: 'Relación con Users' }),
    __metadata("design:type", String)
], Person.prototype, "UserId", void 0);
__decorate([
    (0, typeorm_1.OneToOne)(() => users_entity_1.Users, (users) => users.Person),
    (0, graphql_1.Field)(() => users_entity_1.Users, { nullable: true }),
    __metadata("design:type", users_entity_1.Users)
], Person.prototype, "User", void 0);
exports.Person = Person = __decorate([
    (0, typeorm_1.Entity)('Person'),
    (0, graphql_1.ObjectType)()
], Person);
//# sourceMappingURL=person.entity.js.map