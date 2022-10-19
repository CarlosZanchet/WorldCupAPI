export class Team {

  private _id: string;
  private _name: string;
  private _urlFlag: string;

    public get id(): string {
      return this._id;
    }

    public set id(id: string) {
      this._id = id;
    }

    public get name(): string {
        return this._name;
    }

    public set name(name: string) {
        this._name = name;
    }

    public get urlFlag(): string {
        return this._urlFlag;
    }

    public set urlFlag(urlFlag: string) {
        this._urlFlag = urlFlag;
    }


  constructor(id: string, name: string, urlFlag: string) {
    this._id = id
    this._name = name
    this._urlFlag = urlFlag
  }

  toJson(): any {
    return {
      id: this._id,
      name: this._name,
      urlFlag: this._urlFlag
    }
  }
 

}