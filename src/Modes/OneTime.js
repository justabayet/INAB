import { compareDate } from "../helpers"
import { Mode } from "./Mode"

export class OneTime extends Mode {
    constructor({ date, amount }) {
        super({ amount })
        this.name = "one time"
        if (date instanceof Date) {
            this.date = date
        } else {
            this.date = new Date(date)
        }
    }

    isValid(date) {
        return compareDate(date, this.date)
    }
}