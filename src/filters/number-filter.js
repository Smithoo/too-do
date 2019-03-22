export default {
    comma(num) {
        if (!num) {
            return '';
        }

        const parts = num.toString().split('.');
        const regex = /\B(?=(\d{3})+(?!\d))/g;
        parts[0] = parts[0].replace(regex, ',');
        return parts.join('.');
    },
};
