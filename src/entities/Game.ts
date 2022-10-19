import { Team } from "./Team";

 export class Game {

  private _date: Date;
  private _stadium: string;
  private _group: string | null;
  private _homeTeam: Team | null;
  private _outsideTeam: Team | null;
  private _homeScore: number | null;
  private _outsideScore: number | null;

  constructor(
    date: Date, 
    stadium: string, 
    group: string | null, 
    homeTeam: Team | null, 
    outsideTeam: Team | null, 
    homeScore: number | null , 
    outsideScore: number | null
) {
    this._date = date
    this._stadium = stadium
    this._group = group
    this._homeTeam = homeTeam
    this._outsideTeam = outsideTeam
    this._homeScore = homeScore
    this._outsideScore = outsideScore
  }

    public get_date(): Date {
        return this._date;
    }

    public set_date(_date: Date): void {
        this._date = _date;
    }

    public get_stadium(): string {
        return this._stadium;
    }

    public set_stadium(_stadium: string): void {
        this._stadium = _stadium;
    }

    public get_group(): string | null {
        return this._group;
    }

    public set_group(_group: string | null): void {
        this._group = _group;
    }

    public get_homeTeam(): Team | null {
        return this._homeTeam;
    }

    public set_homeTeam(_homeTeam: Team | null): void {
        this._homeTeam = _homeTeam;
    }

    public get_outsideTeam(): Team | null {
        return this._outsideTeam;
    }

    public set_outsideTeam(_outsideTeam: Team | null): void {
        this._outsideTeam = _outsideTeam;
    }

    public get_homeScore(): number | null {
        return this._homeScore;
    }

    public set_homeScore(_homeScore: number | null): void {
        this._homeScore = _homeScore;
    }

    public get_outsideScore(): number | null {
        return this._outsideScore;
    }

    public set_outsideScore(_outsideScore: number | null): void {
        this._outsideScore = _outsideScore;
    }

    toJson(): any {
      return {
        date: this._date, 
        stadium: this._stadium, 
        group: this._group, 
        homeTeam: this._homeTeam, 
        outsideTeam: this._outsideTeam, 
        homeScore: this._homeScore, 
        outsideScore: this._outsideScore
      }
    }

}