export class Content {
    public id: number;
    public name: string;
    public description: string;
    public price: number;
    public contentStatus: string;
    public paymentStatus: string;

    constructor(
        id: number,
        name: string,
        description: string,
        price: number,
        contentStatus: string,
        paymentStatus: string
    ) {
        this.id = id;
        this.name = name;
        this.description = description;
        this.price = price;
        this.contentStatus = contentStatus;
        this.paymentStatus = paymentStatus;
    }
}