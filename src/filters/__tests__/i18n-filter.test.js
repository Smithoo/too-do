import i18n from './../../i18n';
import i18nFilter from './../i18n-filter';

beforeEach(() => {
    i18n.locale = 'testLocale';
    i18n.fallbackLocale = 'testFallback';
});

describe('tr >', () => {
    it('i18n key 자체가 존재하지 않는다면 key를 그대로 반환한다', () => {
        // given
        const key = 'UNKNOWN_KEY';

        // when
        const result = i18nFilter.tr(key);

        // then
        expect(result).toEqual(key);
    });

    it('i18n key가 타겟 locale에는 존재하지 않지만 fallbackLocale에 존재하면 fallback 번역을 반환한다', () => {
        // given
        i18n.setLocaleMessage('testFallback', {
            hello: 'Hello Fallback',
        });

        // when
        const result = i18nFilter.tr('hello');

        // then
        expect(result).toEqual('Hello Fallback');
    });

    it('i18n key가 존재한다면 번역할 수 있다', () => {
        // given
        i18n.setLocaleMessage('testLocale', {
            hello: 'hello',
        });

        // when
        const result = i18nFilter.tr('hello');

        // then
        expect(result).toEqual('hello');
    });

    it('값을 채워서 i18n 번역할 수 있다', () => {
        // given
        i18n.setLocaleMessage('testLocale', {
            hello: 'hello {0}',
        });

        // when
        const result = i18nFilter.tr('hello', ['world']);

        // then
        expect(result).toEqual('hello world');
    });
});
