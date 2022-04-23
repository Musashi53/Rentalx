import { Specification } from "../model/Specification";

interface ICreateSpecificationDTO {
  name: string;
  description: string;
}

interface ISpecificationsRepository {
  findByName(name: string);
  list(): Specification[];
  create({ name, description }: ICreateSpecificationDTO): void;
}

export { ISpecificationsRepository, ICreateSpecificationDTO };
