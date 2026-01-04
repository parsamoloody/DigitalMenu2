// Category
import { UpdateCommonUsecase } from '../in-use/common';
import { Timestamps, BaseEntity, AuthorSignature } from '../in-use/shared';

export interface CategoryBasicProps {
    name: string;
    image: string;
    menuId: string
}

export interface CategoryProps extends CategoryBasicProps, BaseEntity{ }

export interface CategoryCreateInput extends CategoryProps, UpdateCommonUsecase, BaseEntity { }

export interface CategoryUpdateInput {
    id: string;
    updates: Partial<CategoryBasicProps> & UpdateCommonUsecase;
}
