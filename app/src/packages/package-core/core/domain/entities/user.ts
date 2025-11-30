import { UserProps } from "@/packages/package-core/types";

export class User {
  private props: UserProps;

  constructor(props: UserProps) {
    this.props = props;
  }

  get id(): string | undefined { return this.props.id; }
  get email() { return this.props.email; }
  get password() { return this.props.password; }
  get name() { return this.props.name; }
  get createdAt() { return this.props.createdAt; }
  get updatedAt() { return this.props.updatedAt; }
  // get updatedBy() { return this.props.updatedBy; }
  // get createdBy() { return this.props.createdBy; }
}