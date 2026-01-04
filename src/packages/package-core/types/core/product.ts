import { CreateCommonUsecase, UpdateCommonUsecase } from '../in-use/common';
import { Timestamps, BaseEntity, AuthorSignature } from '../in-use/shared';

export interface ProductBasicProps {
    categories: string[];
    title: string;
    menuId: string;
    description: string;
    price: number;
    media: {
        main: string
    }
}

export interface ProductProps extends Partial<ProductBasicProps>, BaseEntity, AuthorSignature { }

export interface ProductCreateInput extends ProductBasicProps, CreateCommonUsecase { }

export interface ProductUpdateInput {
    id: string;
    updates: Partial<ProductBasicProps> & UpdateCommonUsecase;
}