export class Content {
    public id: number;
    public name: string;
    public description: string;
    public price: number;
    public contentStatus: string;
    public status_pagamento: string;

    constructor(
        id: number,
        name: string,
        description: string,
        price: number,
        contentStatus: string,
        status_pagamento: string
    ) {
        this.id = id;
        this.name = name;
        this.description = description;
        this.price = price;
        this.contentStatus = contentStatus;
        this.status_pagamento = status_pagamento;
    }
}