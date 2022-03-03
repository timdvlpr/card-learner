export class ErrorResponse extends Error {
    statusCode: number;
    message: string;

    constructor(statusCode, message) {
        super(message);
        this.statusCode = statusCode;
        this.message = message;
    }
}
