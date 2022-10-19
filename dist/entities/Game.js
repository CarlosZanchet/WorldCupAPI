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
    get date() {
        return this._date;
    }
    setdate(_date) {
        this._date = _date;
    }
    get stadium() {
        return this._stadium;
    }
    setstadium(_stadium) {
        this._stadium = _stadium;
    }
    get group() {
        return this._group;
    }
    setgroup(_group) {
        this._group = _group;
    }
    get homeTeam() {
        return this._homeTeam;
    }
    sethomeTeam(_homeTeam) {
        this._homeTeam = _homeTeam;
    }
    get outsideTeam() {
        return this._outsideTeam;
    }
    setoutsideTeam(_outsideTeam) {
        this._outsideTeam = _outsideTeam;
    }
    get homeScore() {
        return this._homeScore;
    }
    sethomeScore(_homeScore) {
        this._homeScore = _homeScore;
    }
    get outsideScore() {
        return this._outsideScore;
    }
    setoutsideScore(_outsideScore) {
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