class CustomException {
    _body: string;
}
class CustomExceptionBody {
    status: string;
    message: string;
}
export class ExceptionHandler {

    exception: CustomException;
    exceptionBody: CustomExceptionBody;

    getMessage(error) {
        this.exception = JSON.parse(JSON.stringify(error));
        this.exceptionBody = JSON.parse(this.exception._body);
        return this.exceptionBody.status + ' - ' + this.exceptionBody.message;
    }
}
