"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Game = void 0;
class Game {
    constructor(date, stadium, group, homeTeam, outsideTeam, homeScore, outsideScore, step) {
        this._date = date;
        this._stadium = stadium;
        this._group = group;
        this._homeTeam = homeTeam;
        this._outsideTeam = outsideTeam;
        this._homeScore = homeScore;
        this._outsideScore = outsideScore;
        this._step = step;
    }
    get date() {
        return this._date;
    }
    set date(_date) {
        this._date = _date;
    }
    get stadium() {
        return this._stadium;
    }
    set stadium(_stadium) {
        this._stadium = _stadium;
    }
    get group() {
        return this._group;
    }
    set group(_group) {
        this._group = _group;
    }
    get homeTeam() {
        return this._homeTeam;
    }
    set homeTeam(_homeTeam) {
        this._homeTeam = _homeTeam;
    }
    get outsideTeam() {
        return this._outsideTeam;
    }
    set outsideTeam(_outsideTeam) {
        this._outsideTeam = _outsideTeam;
    }
    get homeScore() {
        return this._homeScore;
    }
    set homeScore(_homeScore) {
        this._homeScore = _homeScore;
    }
    get outsideScore() {
        return this._outsideScore;
    }
    set outsideScore(_outsideScore) {
        this._outsideScore = _outsideScore;
    }
    get step() {
        return this._step;
    }
    set step(step) {
        this._step = step;
    }
    toJson() {
        return {
            date: this._date,
            stadium: this._stadium,
            group: this._group,
            homeTeam: this._homeTeam,
            outsideTeam: this._outsideTeam,
            homeScore: this._homeScore,
            outsideScore: this._outsideScore,
            step: this._step
        };
    }
}
exports.Game = Game;
//# sourceMappingURL=Game.js.map