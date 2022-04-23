import { Specification } from "../model/Specification";
import { ICreateSpecificationDTO, ISpecificationsRepository } from "./ISpecificationsRepository";

class SpecificationsRepository implements ISpecificationsRepository {
  findByName(name: string): string {
    return name;
  }
  list(): Specification[] {
    return this.specifications;
  }
  create({ name, description }: ICreateSpecificationDTO) {
    throw new Error("Method not implemented.");
  }
}

export { SpecificationsRepository };
