import { ProductProps } from "@/packages/package-core/types";

// Product
export class Product {
  private props: ProductProps;

  constructor(props: ProductProps) {
    this.props = props;
  }

  get id() { return this.props.id; }
  get menuId() { return this.props.menuId }
  get categories() { return this.props.categories; }
  get media() { return this.props.media }
  get title() { return this.props.title; }
  get description() { return this.props.description; }
  get price() { return this.props.price; }
  // get createdAt() { return this.props.createdAt; }
  // get updatedAt() { return this.props.updatedAt; }
  // get updatedBy() { return this.props.updatedBy; }
  // get createdBy() { return this.props.createdBy; }
}