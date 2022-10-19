"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Team = void 0;
class Team {
    constructor(id, name, urlFlag) {
        this._id = id;
        this._name = name;
        this._urlFlag = urlFlag;
    }
    get id() {
        return this._id;
    }
    set id(id) {
        this._id = id;
    }
    get name() {
        return this._name;
    }
    set name(name) {
        this._name = name;
    }
    get urlFlag() {
        return this._urlFlag;
    }
    set urlFlag(urlFlag) {
        this._urlFlag = urlFlag;
    }
    toJson() {
        return {
            id: this._id,
            name: this._name,
            urlFlag: this._urlFlag
        };
    }
}
exports.Team = Team;
//# sourceMappingURL=Team.js.map