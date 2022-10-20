export class Team {

  private _id: string;
  private _name: string;
  private _group: string;
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

    public get group(): string {
      return this._group;
  }

  public set group(group: string) {
      this._group = group;
  }


  constructor(id: string, name: string, group: string, urlFlag: string) {
    this._id = id
    this._name = name
    this._group = group
    this._urlFlag = urlFlag
  }

  toJson(): any {
    return {
      id: this._id,
      name: this._name,
      group: this._group,
      urlFlag: this._urlFlag
    }
  }
 

}