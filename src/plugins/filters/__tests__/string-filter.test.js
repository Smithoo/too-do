import { expect } from 'chai';
import { filters } from './../string-filter';

describe('capitalize', () => {
    it('capitalize', () => {
        // given
        const str1 = 'hello';
        const str2 = 'Bye';

        // when
        const result1 = filters.capitalize(str1);
        const result2 = filters.capitalize(str2);

        // then
        expect(result1).to.be.equal('Hello');
        expect(result2).to.be.equal('Bye');
    });
});
