import { QueryReposity } from "../../domain/repositories/queryRepo";
import { Product } from "../../domain/entities/product";
import { ProductBasicProps } from "@/packages/package-core/types";

export class CreateProductUseCase {
    constructor(
        private productRepository: QueryReposity<Product>
    ) { }

    async execute(product: ProductBasicProps): Promise<Product> {

        const create = await this.productRepository.create(product as any);
        return new Product(create)
    }

}