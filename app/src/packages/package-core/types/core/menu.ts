// Menu
import { CreateCommonUsecase, UpdateCommonUsecase } from '../in-use/common';
import { AuthorSignature, Contacts, OpenTime, SocialNetworks } from '../in-use/shared';
import { Timestamps, BaseEntity } from '../in-use/shared';

export interface MenuBasicProps {
    displayId: string;
    name: string;
    subname?: string;
    avatar?: string;
    bio?: string;
    connections?: Connection[];
}

export interface Connection {
    socialMedias?: SocialNetworks;
    openTimes?: OpenTime[];
    location?: string;
    contacts?: Contacts[];
}

export interface MenuCreateInput extends MenuBasicProps, CreateCommonUsecase, BaseEntity { }

export interface MenuUpdateInput {
    id: string;
    updates: Partial<MenuBasicProps> & UpdateCommonUsecase;
}

export interface MenuResponse extends MenuBasicProps, Partial<BaseEntity>, Partial<AuthorSignature>, Partial<Timestamps> {}
