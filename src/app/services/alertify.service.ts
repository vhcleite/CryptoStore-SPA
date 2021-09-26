import { Injectable } from '@angular/core';
import * as alertify from 'alertifyjs';

@Injectable({
    providedIn: "root"
})
export class AlertifyService {
    constructor() { }

    confirm(title: string,
        message: string,
        okCallback: () => void) {

        alertify.confirm(title,
            message,
            okCallback,
            function () { });
    }

    success(message: string) {
        alertify.success(message);
    }

    error(message: string) {
        alertify.error(message);
    }

    warning(message: string) {
        alertify.warning(message);
    }

    message(message: string) {
        alertify.message(message);
    }

    alert(message: string) {
        alertify.alert(message);
    }
}
