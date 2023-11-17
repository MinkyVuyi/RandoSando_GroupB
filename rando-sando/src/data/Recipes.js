export class Recipe {
  constructor({
    _id,
    title,
    description,
    ingredients,
    instructions,
    image,
    creationDate,
  }) {
    this._id = _id;
    this.title = title;
    this.description = description;
    this.ingredients = ingredients;
    this.instructions = instructions;
    this.image = image;
    this.creationDate = creationDate;
  }
}
