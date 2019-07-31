export class Product {

  constructor(private _name?: string, private _description?: string) {
  }


  get name(): string {
    return this._name;
  }

  set name(value: string) {
    this._name = value;
  }

  get description(): string {
    return this._description;
  }

  set description(value: string) {
    this._description = value;
  }
}

export const CONST_PRODUCT = [
  new Product('hamac', 'pour se reposer'),
  new Product('parasol', 'pour se proteger du soleil')
];
