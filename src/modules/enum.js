export class Enum {
    constructor(items = []) {
        const length = items.length;
        const result = {};

        for (let i = 0; i < length; i++) {
            const item = items[i];
            result[i] = item;
            result[item] = i;
        }

        return result;
    }
}

export default Enum;
