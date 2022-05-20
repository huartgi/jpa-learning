export class DateUtils {
    static toDate(value: string) {
        if (value) {
            const dateString = value.split('/');
            const date = new Date(Date.UTC(parseInt(dateString[2], 10), parseInt(dateString[1], 10) - 1, parseInt(dateString[0], 10)));
            if (isNaN(date.getTime())) {
                return undefined;
            } else {
                return date;
            }
        } else {
            return undefined;
        }
    }
}
