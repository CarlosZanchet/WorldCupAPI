"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Team = void 0;
class Team {
    constructor(id, name, group, urlFlag) {
        this._id = id;
        this._name = name;
        this._group = group;
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
    get group() {
        return this._group;
    }
    set group(group) {
        this._group = group;
    }
    toJson() {
        return {
            id: this._id,
            name: this._name,
            group: this._group,
            urlFlag: this._urlFlag
        };
    }
}
exports.Team = Team;
//# sourceMappingURL=Team.js.map