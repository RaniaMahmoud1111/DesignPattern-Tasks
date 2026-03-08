export class Box {
    constructor(name) {
        this.name = name;
        this.items = [];
    }
    add(item) {
        this.items.push(item);
    }
    show(indent = "") {
        console.log(indent + this.name);
        this.items.forEach((item) => {
            if (item.show) {
                item.show(indent + "--");
            }
        });
    }
}
