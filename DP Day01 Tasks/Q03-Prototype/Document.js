export class Document {
    constructor(header, footer, pages, text) {
        this.header = header;
        this.footer = footer;
        this.pages = pages;
        this.text = text;
    }
    clone() {
        return new Document(this.header, this.footer, this.pages, this.text);
    }
}