"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Game = void 0;
class Game {
    constructor(date, stadium, group, homeTeam, outsideTeam, homeScore, outsideScore) {
        this._date = date;
        this._stadium = stadium;
        this._group = group;
        this._homeTeam = homeTeam;
        this._outsideTeam = outsideTeam;
        this._homeScore = homeScore;
        this._outsideScore = outsideScore;
    }
    get_date() {
        return this._date;
    }
    set_date(_date) {
        this._date = _date;
    }
    get_stadium() {
        return this._stadium;
    }
    set_stadium(_stadium) {
        this._stadium = _stadium;
    }
    get_group() {
        return this._group;
    }
    set_group(_group) {
        this._group = _group;
    }
    get_homeTeam() {
        return this._homeTeam;
    }
    set_homeTeam(_homeTeam) {
        this._homeTeam = _homeTeam;
    }
    get_outsideTeam() {
        return this._outsideTeam;
    }
    set_outsideTeam(_outsideTeam) {
        this._outsideTeam = _outsideTeam;
    }
    get_homeScore() {
        return this._homeScore;
    }
    set_homeScore(_homeScore) {
        this._homeScore = _homeScore;
    }
    get_outsideScore() {
        return this._outsideScore;
    }
    set_outsideScore(_outsideScore) {
        this._outsideScore = _outsideScore;
    }
    toJson() {
        return {
            date: this._date,
            stadium: this._stadium,
            group: this._group,
            homeTeam: this._homeTeam,
            outsideTeam: this._outsideTeam,
            homeScore: this._homeScore,
            outsideScore: this._outsideScore
        };
    }
}
exports.Game = Game;
//# sourceMappingURL=Game.js.map