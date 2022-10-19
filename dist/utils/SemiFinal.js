"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.final = exports.disputaTerceiroQuarto = exports.semiFinais = void 0;
const Game_1 = require("../entities/Game");
exports.semiFinais = [
    new Game_1.Game(new Date('2022-12-13 16:00:00'), 'Lusail', null, null, null, null, null).toJson(),
    new Game_1.Game(new Date('2022-12-14 16:00:00'), 'Al Bayt', null, null, null, null, null)
];
exports.disputaTerceiroQuarto = new Game_1.Game(new Date('2022-12-17 12:00:00'), 'Internacional Khalifa', null, null, null, null, null);
exports.final = new Game_1.Game(new Date('2022-12-18 12:00:00'), 'Lusail', null, null, null, null, null);
//# sourceMappingURL=SemiFinal.js.map