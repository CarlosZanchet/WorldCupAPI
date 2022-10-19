export class Team {

  private _id: string;
  private _name: string;
  private _urlFlag: string;

    public get_id(): string {
        return this._id;
    }

    public set_id(_id: string): void {
        this._id = _id;
    }

    public get_name(): string {
        return this._name;
    }

    public set_name(_name: string): void {
        this._name = _name;
    }

    public get_urlFlag(): string {
        return this._urlFlag;
    }

    public set_urlFlag(_urlFlag: string): void {
        this._urlFlag = _urlFlag;
    }


  constructor(id: string, name: string, urlFlag: string) {
    this._id = id
    this._name = name
    this._urlFlag = urlFlag
  }
 

}