import { expect } from 'chai';
import sinon from 'sinon';

import Vue from 'vue';
import VueI18n from 'vue-i18n';

import i18nFilter, { filters } from './../i18n-filter';

let sandbox = null;
let i18n = null;

beforeEach(() => {
    sandbox = sinon.sandbox.create();
    sandbox.stub(Vue, 'filter');

    i18n = new VueI18n({
        locale: 'testLocale',
        fallbackLocale: 'testFallback',
        silentTranslationWarn: true, // disable warning when using fallback locale
    });

    i18nFilter.install(Vue, { i18n });
});

afterEach(() => {
    i18n = null;
    sandbox.restore();
    sandbox = null;
});

describe('tr', () => {
    it('i18n key 자체가 존재하지 않는다면 key를 그대로 반환한다', () => {
        // given
        const key = 'UNKNOWN_KEY';

        // when
        const result = filters.tr(key);

        // then
        expect(result).to.be.equal(key);
    });

    it('i18n key가 타겟 locale에는 존재하지 않지만 fallbackLocale에 존재하면 fallback 번역을 반환한다', () => {
        // given
        i18n.setLocaleMessage('testFallback', {
            hello: 'Hello Fallback',
        });

        // when
        const result = filters.tr('hello');

        // then
        expect(result).to.be.equal('Hello Fallback');
    });

    it('i18n key가 존재한다면 번역할 수 있다', () => {
        // given
        i18n.setLocaleMessage('testLocale', {
            hello: 'hello',
        });

        // when
        const result = filters.tr('hello');

        // then
        expect(result).to.be.equal('hello');
    });

    it('값을 채워서 i18n 번역할 수 있다', () => {
        // given
        i18n.setLocaleMessage('testLocale', {
            hello: 'hello {0}',
        });

        // when
        const result = filters.tr('hello', ['world']);

        // then
        expect(result).to.be.equal('hello world');
    });
});
