import { MenuResponse } from "@/packages/package-core/types";

// Menu
export class Menu {
    private props: MenuResponse;

    constructor(props: MenuResponse) {
        this.props = props;
    }

    get id() { return this.props.id; }
    get name() { return this.props.name; }
    get subname() { return this.props.subname; }
    get avatar() { return this.props.avatar; }
    get bio() { return this.props.bio; }
    get connections() { return this.props.connections; }
    get displayId() { return this.props.displayId; }
    get categories() { return this.props.categories }
    get createdAt() { return this.props.createdAt; }
    get updatedAt() { return this.props.updatedAt; }
    // get updatedBy() { return this.props.updatedBy; }
    // get createdBy() { return this.props.createdBy; }
}