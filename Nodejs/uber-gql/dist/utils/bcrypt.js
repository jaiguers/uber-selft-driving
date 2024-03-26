"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.encodePassword = void 0;
const bcrypt = require("bcrypt");
async function encodePassword(rawPassword) {
    const SALT = bcrypt.genSaltSync();
    return bcrypt.hashSync(rawPassword, SALT);
}
exports.encodePassword = encodePassword;
//# sourceMappingURL=bcrypt.js.map