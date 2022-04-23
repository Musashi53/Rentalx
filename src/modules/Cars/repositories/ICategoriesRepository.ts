import { Category } from "../model/Category";

// DTO => Data transfer object

interface ICreateCategoryDTO {
  name: string;
  description: string;
}

interface ICategoriesRepository {
  findByName(name: string);
  list(): Category[];
  create({ name, description }: ICreateCategoryDTO): void;
}

export { ICreateCategoryDTO, ICategoriesRepository };
