import i18n from './../i18n';

export default {
    tr: (key, values) => {
        if (i18n.te(key) === false &&
            i18n.te(key, i18n.fallbackLocale) === false) {
            return key;
        }

        return i18n.t(key, values);
    }
};
