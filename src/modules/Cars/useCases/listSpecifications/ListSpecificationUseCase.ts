import { SpecificationsRepository } from "../../repositories/SpecificationsRepository";

class ListSpecificationUseCase {
  constructor(private specificationsRepository: SpecificationsRepository) {}

  execute() {
    const specifications = this.specificationsRepository.list();

    return specifications;
  }
}

export { ListSpecificationUseCase };
