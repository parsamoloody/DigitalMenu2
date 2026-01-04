import { CategoryProps } from "@/packages/package-core/types";

// Categoey
export class Category {
  private props: CategoryProps;

  constructor(props: CategoryProps) {
    this.props = props;
  }

  get id() { return this.props.id; }
  get name() { return this.props.name; }
  get menuId() { return this.props.menuId }
  get image() { return this.props.image }
  // get createdAt() { return this.props.createdAt; }
  // get updatedAt() { return this.props.updatedAt; }
  // get updatedBy() { return this.props.updatedBy; }
  // get createdBy() { return this.props.createdBy; }
}