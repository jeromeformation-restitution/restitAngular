import * as slug from 'slug';

export class Product {

  public id: number;
  public name: string;
  public slug: string;
  public description: string;
  public price: number;
  public createdAt: Date;
  public modifiedAt: Date;
  public nbreViews: number;
  public isPublished: boolean;
  public imageName: string;

  constructor(name?: string, description?: string) {
    this.name = name;
    this.description = description;
    console.log(name);
    if (name) {
      this.slug = slug(name, {lower: true});
    }
    this.isPublished = true;
  }
}

export const CONST_PRODUCT = [
  new Product('hamac', 'pour se reposer'),
  new Product('parasol', 'pour se proteger du soleil')
];
