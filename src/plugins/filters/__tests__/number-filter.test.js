import { expect } from 'chai';
import { filters } from './../number-filter';

describe('comma', () => {
    it('number with length 3', () => {
        // given
        const num = 123;

        // when
        const result = filters.comma(num);

        // then
        expect(result).to.be.equal('123');
    });

    it('number over length 3', () => {
        // given
        const num = 123456;

        // when
        const result = filters.comma(num);

        // then
        expect(result).to.be.equal('123,456');
    });

    it('number over length 6', () => {
        // given
        const num = 1234567890;

        // when
        const result = filters.comma(num);

        // then
        expect(result).to.be.equal('1,234,567,890');
    });

    it('number with decimal', () => {
        // given
        const num = 123456.7890;

        // when
        const result = filters.comma(num);

        // then
        expect(result).to.be.equal('123,456.7890');
    });
});
