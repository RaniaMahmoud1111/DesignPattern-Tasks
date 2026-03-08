export class Book {
    constructor(name, pages) {
        this.name = name;
        this.pages = pages;
    }

    show() {
        console.log(this.name, "-", this.pages);

    }
}