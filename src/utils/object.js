export const objectUtil = {
    isEmpty(obj) {
        return Object.keys(obj).length === 0;
    },

    forEach(obj, callback) {
        Object.entries(obj).forEach(([key, value]) => {
            callback(value, key, obj);
        });
    },

    every(obj, callback) {
        return Object.entries(obj).every(([key, value]) => {
            return callback(value, key, obj);
        });
    },

    some(obj, callback) {
        return Object.entries(obj).some(([key, value]) => {
            return callback(value, key, obj);
        });
    },
};

export default objectUtil;
