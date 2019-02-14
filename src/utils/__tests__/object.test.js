import objectUtil from './../object';

describe('object util >', () => {
    describe('isEmpty >', () => {
        it('object가 비어 있다면 true를 반환한다', () => {
            // given
            const obj = {};

            // when
            const result = objectUtil.isEmpty(obj);

            // then
            expect(result).toBe(true);
        });

        it('object가 비어 있지 않다면 false를 반환한다', () => {
            // given
            const obj = {
                a: 'dummy',
            };

            // when
            const result = objectUtil.isEmpty(obj);

            // then
            expect(result).toBe(false);
        });
    });

    describe('forEach >', () => {
        it('빈 object는 순회하지 않는다', () => {
            // given
            const obj = {};
            const callback = jest.fn();

            // when
            objectUtil.forEach(obj, callback);

            // then
            expect(callback.mock.calls.length).toBe(0);
        });

        it('object를 순회하면서 callback function을 실행할 수 있다', () => {
            // given
            const obj = {
                a: 1,
                b: 2,
            };
            const callback = jest.fn();

            // when
            objectUtil.forEach(obj, callback);

            // then
            expect(callback.mock.calls.length).toBe(2);
            expect(callback.mock.calls[0][0]).toBe(1);      // value of a: 1
            expect(callback.mock.calls[0][1]).toBe('a');    // key of a: 1
            expect(callback.mock.calls[1][0]).toBe(2);      // value of b: 2
            expect(callback.mock.calls[1][1]).toBe('b');    // key of b: 2
        });
    });

    describe('every >', () => {
        it('빈 object에 대해서는 true를 반환한다', () => {
            // given
            const obj = {};
            const callback = jest.fn();

            // when
            const result = objectUtil.every(obj, callback);

            // then
            expect(result).toBe(true);
            expect(callback.mock.calls.length).toBe(0);
        });

        it('object를 순회하면서 모든 value가 callback의 조건을 만족하면 true를 반환한다', () => {
            // given
            const obj = {
                a: 1,
                b: 2,
            };
            const callback = jest.fn((value) => value > 0);

            // when
            const result = objectUtil.every(obj, callback);

            // then
            expect(result).toBe(true);
            expect(callback.mock.calls.length).toBe(2);
            expect(callback.mock.calls[0][0]).toBe(1);      // value of a: 1
            expect(callback.mock.calls[0][1]).toBe('a');    // key of a: 1
            expect(callback.mock.calls[1][0]).toBe(2);      // value of b: 2
            expect(callback.mock.calls[1][1]).toBe('b');    // key of b: 2
        });

        it('object를 순회하면서 value 중 하나라도 callback의 조건을 만족하지 못 하면 false를 반환하면서 callback 호출을 중단한다', () => {
            // given
            const obj = {
                a: 1,
                b: 2,
            };
            const callback = jest.fn((value) => value > 1);

            // when
            const result = objectUtil.every(obj, callback);

            // then
            expect(result).toBe(false);
            expect(callback.mock.calls.length).toBe(1);
        });
    });

    describe('some >', () => {
        it('빈 object에 대해서는 false를 반환한다', () => {
            // given
            const obj = {};
            const callback = jest.fn();

            // when
            const result = objectUtil.some(obj, callback);

            // then
            expect(result).toBe(false);
            expect(callback.mock.calls.length).toBe(0);
        });

        it('object를 순회하면서 모든 value가 callback의 조건을 만족하지 않으면 false를 반환한다', () => {
            // given
            const obj = {
                a: 1,
                b: 2,
            };
            const callback = jest.fn((value) => value > 4);

            // when
            const result = objectUtil.some(obj, callback);

            // then
            expect(result).toBe(false);
            expect(callback.mock.calls.length).toBe(2);
            expect(callback.mock.calls[0][0]).toBe(1);      // value of a: 1
            expect(callback.mock.calls[0][1]).toBe('a');    // key of a: 1
            expect(callback.mock.calls[1][0]).toBe(2);      // value of b: 2
            expect(callback.mock.calls[1][1]).toBe('b');    // key of b: 2
        });

        it('object를 순회하면서 value 중 하나라도 callback의 조건을 만족하면 true를 반환하면서 callback 호출을 중단한다', () => {
            // given
            const obj = {
                a: 1,
                b: 2,
            };
            const callback = jest.fn((value) => value > 0);

            // when
            const result = objectUtil.some(obj, callback);

            // then
            expect(result).toBe(true);
            expect(callback.mock.calls.length).toBe(1);
        });
    });
});
