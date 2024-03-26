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
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.PersonResolver = void 0;
const graphql_1 = require("@nestjs/graphql");
const person_service_1 = require("./person.service");
const person_entity_1 = require("./entities/person.entity");
const update_person_input_1 = require("./dto/update-person.input");
const users_entity_1 = require("../users/users.entity");
const create_person_input_1 = require("./dto/create-person.input");
let PersonResolver = class PersonResolver {
    constructor(personService) {
        this.personService = personService;
    }
    createPerson(createPersonInput) {
        return this.personService.create(createPersonInput);
    }
    findAllPerson() {
        return this.personService.findAll();
    }
    findOne(id) {
        return this.personService.findOne(id);
    }
    user(person) {
        return this.personService.findUser(person.UserId);
    }
    updatePerson(updatePersonInput) {
        return this.personService.update(updatePersonInput.id, updatePersonInput);
    }
    removePerson(id) {
        return this.personService.remove(id);
    }
};
exports.PersonResolver = PersonResolver;
__decorate([
    (0, graphql_1.Mutation)(() => person_entity_1.Person),
    __param(0, (0, graphql_1.Args)('createPersonInput')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [create_person_input_1.CreatePersonInput]),
    __metadata("design:returntype", void 0)
], PersonResolver.prototype, "createPerson", null);
__decorate([
    (0, graphql_1.Query)(() => [person_entity_1.Person]),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", void 0)
], PersonResolver.prototype, "findAllPerson", null);
__decorate([
    (0, graphql_1.Query)(() => person_entity_1.Person, { name: 'person' }),
    __param(0, (0, graphql_1.Args)('id', { type: () => graphql_1.Int })),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number]),
    __metadata("design:returntype", void 0)
], PersonResolver.prototype, "findOne", null);
__decorate([
    (0, graphql_1.ResolveField)(() => users_entity_1.Users),
    __param(0, (0, graphql_1.Parent)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [person_entity_1.Person]),
    __metadata("design:returntype", Promise)
], PersonResolver.prototype, "user", null);
__decorate([
    (0, graphql_1.Mutation)(() => person_entity_1.Person),
    __param(0, (0, graphql_1.Args)('updatePersonInput')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [update_person_input_1.UpdatePersonInput]),
    __metadata("design:returntype", void 0)
], PersonResolver.prototype, "updatePerson", null);
__decorate([
    (0, graphql_1.Mutation)(() => person_entity_1.Person),
    __param(0, (0, graphql_1.Args)('id', { type: () => graphql_1.Int })),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number]),
    __metadata("design:returntype", void 0)
], PersonResolver.prototype, "removePerson", null);
exports.PersonResolver = PersonResolver = __decorate([
    (0, graphql_1.Resolver)(() => person_entity_1.Person),
    __metadata("design:paramtypes", [person_service_1.PersonService])
], PersonResolver);
//# sourceMappingURL=person.resolver.js.map