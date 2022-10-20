import { Team } from "./Team";

 export class Game {

  private _date: Date;
  private _stadium: string;
  private _group: string | null;
  private _homeTeam: Team | null;
  private _outsideTeam: Team | null;
  private _homeScore: number | null;
  private _outsideScore: number | null;
  private _step: string;

  constructor(
    date: Date, 
    stadium: string, 
    group: string | null, 
    homeTeam: Team | null, 
    outsideTeam: Team | null, 
    homeScore: number | null , 
    outsideScore: number | null,
    step: string
) {
    this._date = date
    this._stadium = stadium
    this._group = group
    this._homeTeam = homeTeam
    this._outsideTeam = outsideTeam
    this._homeScore = homeScore
    this._outsideScore = outsideScore
    this._step = step
  }

    public get date(): Date {
        return this._date;
    }

    public set date(_date: Date) {
        this._date = _date;
    }

    public get stadium(): string {
        return this._stadium;
    }

    public set stadium(_stadium: string) {
        this._stadium = _stadium;
    }

    public get group(): string | null {
        return this._group;
    }

    public set group(_group: string | null) {
        this._group = _group;
    }

    public get homeTeam(): Team | null {
        return this._homeTeam;
    }

    public set homeTeam(_homeTeam: Team | null) {
        this._homeTeam = _homeTeam;
    }

    public get outsideTeam(): Team | null {
        return this._outsideTeam;
    }

    public set outsideTeam(_outsideTeam: Team | null) {
        this._outsideTeam = _outsideTeam;
    }

    public get homeScore(): number | null {
        return this._homeScore;
    }

    public set homeScore(_homeScore: number | null) {
        this._homeScore = _homeScore;
    }

    public get outsideScore(): number | null {
        return this._outsideScore;
    }

    public set outsideScore(_outsideScore: number | null) {
        this._outsideScore = _outsideScore;
    }

    public get step(): string {
      return this._step;
    }

    public set step(step: string) {
        this._step = step;
    }

    toJson(): any {
      return {
        date: this._date, 
        stadium: this._stadium, 
        group: this._group, 
        homeTeam: this._homeTeam, 
        outsideTeam: this._outsideTeam, 
        homeScore: this._homeScore, 
        outsideScore: this._outsideScore,
        step: this._step
      }
    }

}