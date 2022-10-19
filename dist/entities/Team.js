"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Team = void 0;
class Team {
    constructor(id, name, urlFlag) {
        this._id = id;
        this._name = name;
        this._urlFlag = urlFlag;
    }
    get_id() {
        return this._id;
    }
    set_id(_id) {
        this._id = _id;
    }
    get_name() {
        return this._name;
    }
    set_name(_name) {
        this._name = _name;
    }
    get_urlFlag() {
        return this._urlFlag;
    }
    set_urlFlag(_urlFlag) {
        this._urlFlag = _urlFlag;
    }
}
exports.Team = Team;
//# sourceMappingURL=Team.js.map