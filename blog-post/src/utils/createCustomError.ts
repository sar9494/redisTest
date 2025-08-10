export class customError extends Error {
    status: number
    constructor(message: string, status: number) {
        super(message)
        this.message = message
        this.status = status
        Error.captureStackTrace(this, customError)
    }
}
