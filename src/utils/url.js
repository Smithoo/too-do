const validUrlRegex = /((https?):\/\/)([-가-힣]|\w)+(?:[/.:@]([-가-힣]|\w)+)+\/?([^\n]*)$/i;
const protocolRegex = /^((http|https|ftp|mailto|tel):(?:\/\/)?)/;

export const urlUtil = {
    isValidURL(url) {
        return validUrlRegex.test(url);
    },
    refineUrl(url = '') {
        url = url.trim();
        if (url && protocolRegex.test(url) === false) {
            url = 'http://' + url;
        }

        if (this.isValidURL(url)) {
            return url;
        }

        return '';
    },
    isDataURIImage(src) {
        return /data:image\/png/.test(src);
    },
};

export default urlUtil;
