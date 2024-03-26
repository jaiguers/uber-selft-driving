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
exports.PersonService = void 0;
const common_1 = require("@nestjs/common");
const typeorm_1 = require("@nestjs/typeorm");
const person_entity_1 = require("./entities/person.entity");
const typeorm_2 = require("typeorm");
const users_service_1 = require("../users/users.service");
let PersonService = class PersonService {
    constructor(personRepo, userService) {
        this.personRepo = personRepo;
        this.userService = userService;
    }
    create(createPersonInput) {
        const newPerson = this.personRepo.create(createPersonInput);
        return this.personRepo.save(newPerson);
    }
    findAll() {
        return this.personRepo.find();
    }
    findOne(id) {
        return this.personRepo.findOne({ where: { PersonId: id } });
    }
    findUser(id) {
        return this.userService.findById(id);
    }
    update(id, updatePersonInput) {
        return `This action updates a #${id} person`;
    }
    remove(id) {
        return `This action removes a #${id} person`;
    }
};
exports.PersonService = PersonService;
exports.PersonService = PersonService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, typeorm_1.InjectRepository)(person_entity_1.Person)),
    __metadata("design:paramtypes", [typeorm_2.Repository,
        users_service_1.UsersService])
], PersonService);
//# sourceMappingURL=person.service.js.map