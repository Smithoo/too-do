import { Injector } from './../injector';

describe('Injector >', () => {
    let injector;

    class ModuleA {
        constructor(name = '') {
            this.name = name;
        }

        getName() {
            return this.name;
        }
    }

    beforeEach(() => {
        injector = new Injector();
    });
    afterEach(() => {
        injector = null;
    });

    describe('set >', () => {
        it('Injector에 모듈 스펙을 등록할 수 있다', () => {
            // given
            class DummyClass {}
            const specs = {
                dummy: {
                    Class: DummyClass,
                },
            };

            // when
            injector.set(specs);

            // then
            expect(injector.specs.dummy).not.toBeUndefined();
            expect(Object.keys(injector.registry).length).toBe(0);  // 객체 생성 전이기 때문에 비어있다
        });

        it('생성자 없이 모듈 스펙을 등록하면 에러를 발생시킨다', () => {
            // given
            const specs = {
                dummy: {},
            };

            // when
            const noClassFn = () => {
                injector.set(specs);
            };

            // then
            expect(noClassFn).toThrow();
        });

        it('지정한 인자로 모듈을 등록할 수 있다', () => {
            // given
            const specs = {
                moduleA: {
                    Class: ModuleA,
                    args: ['hello'],
                },
            };

            // then
            injector.set(specs);

            // when
            const module = injector.get('moduleA');
            expect(module).toBeInstanceOf(ModuleA);
            expect(module.getName()).toBe('hello');
        });

        it('기존에 등록된 모듈들이 있다면 파괴하고 등록한다', () => {
            // given
            // register moduleA to be destroyed
            const destroyStub = jest.fn();
            class OldModule {
                destroy() {
                    destroyStub();
                }
            }
            injector.set({
                oldModule: {
                    Class: OldModule,
                },
            });
            injector.get('oldModule');

            class NewModule {}
            const specs = {
                newModule: {
                    Class: NewModule,
                },
            };

            // when
            injector.set(specs);

            // then
            expect(injector.specs.oldModule).toBeUndefined();
            expect(injector.specs.newModule).not.toBeUndefined();
            expect(destroyStub.mock.calls.length).toBe(1);
        });
    });

    describe('get >', () => {
        it('존재하지 않는 모듈을 가져오면 null을 반환한다', () => {
            // given
            // when
            const result = injector.get('unknownModule');

            // then
            expect(result).toBeNull();
        });

        it('모듈을 처음 가져온다면 생성하면서 가져올 수 있다', () => {
            // given
            const specs = {
                moduleA: {
                    Class: ModuleA,
                },
            };
            injector.set(specs);

            // when
            const result = injector.get('moduleA');

            // then
            expect(result).toBeInstanceOf(ModuleA);
        });

        it('이미 등록된 모듈 인스턴스를 가져올 수 있다', () => {
            // given
            const specs = {
                moduleA: {
                    Class: ModuleA,
                },
            };
            injector.set(specs);
            const firstGet = injector.get('moduleA');

            // when
            const secondGet = injector.get('moduleA');

            // then
            expect(firstGet).toBeInstanceOf(ModuleA);
            expect(secondGet).toBeInstanceOf(ModuleA);
            expect(firstGet === secondGet).toBe(true);
        });

        it('싱글톤이 아닌 모듈을 매번 생성해서 가져올 수 있다 (registry에 등록하지 않는다)', () => {
            // given
            const specs = {
                moduleA: {
                    Class: ModuleA,
                    singleton: false,
                },
            };
            injector.set(specs);
            const firstGet = injector.get('moduleA');

            // when
            const secondGet = injector.get('moduleA');

            // then
            expect(firstGet).toBeInstanceOf(ModuleA);
            expect(secondGet).toBeInstanceOf(ModuleA);
            expect(firstGet === secondGet).toBe(false);
            expect(injector.registry.moduleA).toBeUndefined();
        });

        it('다른 모듈을 포함하는 모듈을 가져올 수 있다', () => {
            // given
            class ModuleB {
                constructor() {
                    this.moduleA = injector.get('moduleA');
                }

                getModuleA() {
                    return this.moduleA;
                }
            }
            const specs = {
                moduleA: {
                    Class: ModuleA,
                },
                moduleB: {
                    Class: ModuleB,
                },
            };
            injector.set(specs);

            // when
            const moduleB = injector.get('moduleB');

            // then
            expect(moduleB).toBeInstanceOf(ModuleB);
            expect(moduleB.getModuleA()).toBeInstanceOf(ModuleA);
        });

        it('순환 참조가 발생할 경우 에러가 발생한다', () => {
            // given
            class ModuleB {
                constructor() {
                    injector.get('moduleC');
                }
            }
            class ModuleC {
                constructor() {
                    injector.get('moduleB');
                }
            }
            const specs = {
                moduleB: {
                    Class: ModuleB,
                },
                moduleC: {
                    Class: ModuleC,
                },
            };

            injector.set(specs);

            // when
            const circularDependencyFn = () => {
                injector.get('moduleB');
            };

            // then
            expect(circularDependencyFn).toThrow();
        });
    });

    describe('destroy >', () => {
        it('injector 내부 변수들을 파괴할 수 있다', () => {
            // given
            class DummyClass {}
            const specs = {
                dummy: {
                    Class: DummyClass,
                },
            };
            injector.set(specs);

            // when
            injector.destroy();

            // then
            expect(injector.specs).toEqual({});
            expect(injector.registry).toEqual({});
            expect(injector.dependencyStack).toEqual([]);
        });

        it('injector에 등록된 싱글톤인 내부 모듈에 destroy 함수가 있다면 호출해준다', () => {
            // given
            class DummyClass {
                destroy() {}
            }
            const specs = {
                dummy: {
                    Class: DummyClass,
                },
            };
            injector.set(specs);
            const dummyModule = injector.get('dummy');
            const destroyStub = jest.spyOn(dummyModule, 'destroy');

            // when
            injector.destroy();

            // then
            expect(destroyStub).toHaveBeenCalled();
        });
    });
});
