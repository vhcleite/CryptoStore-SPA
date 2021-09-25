export class Content {
    public id: number;
    public name: string;
    public description: string;
    public price: number;
    public status: string;
    public payment_status: string;

    constructor(
        id: number,
        name: string,
        description: string,
        price: number,
        status: string,
        payment_status: string
    ) {
        this.id = id;
        this.name = name;
        this.description = description;
        this.price = price;
        this.status = status;
        this.payment_status = payment_status;
    }
}