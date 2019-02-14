import { objectUtil } from '@/utils';

export class Injector {
    specs = {};
    registry = {};
    dependencyStack = [];

    set(specs = {}) {
        this.validateSpecs(specs);

        if (objectUtil.isEmpty(this.registry) === false) {
            this.destroy();
        }

        this.specs = specs;
        this.registry = {};
        this.dependencyStack = [];
    }

    get(key) {
        if (!this.findSpec(key)) {
            return null;
        }

        if (this.isCircularDependency(key)) {
            this.pushDependency(key);
            throw new Error(`[ERROR] Circular dependencies was found at ${this.toStackTrace()}`);
        }

        this.pushDependency(key);
        const instance = this.resolveInstance(key);
        this.popDependency();

        return instance;
    }

    destroy() {
        const registry = this.registry;

        objectUtil.forEach(registry, (instance, key) => {
            if (registry.hasOwnProperty(key)) {
                if (instance.destroy) {
                    instance.destroy();
                }

                registry[key] = null;
                delete registry[key];
            }
        });

        this.specs = {};
        this.registry = {};
        this.dependencyStack = [];
    }

    validateSpecs(specs) {
        let invalidKey = null;
        const isValid = objectUtil.every(specs, (spec, key) => {
            if (spec.Class) {
                return true;
            }

            invalidKey = key;
            return false;
        });

        if (!isValid) {
            throw new Error(`[ERROR] No Class in specification ${invalidKey}`);
        }
    }

    findSpec(key) {
        return this.specs[key];
    }

    findInstance(key) {
        return this.registry[key];
    }

    createInstance(key) {
        const { Class: SpecClass, args = [] } = this.findSpec(key);

        class Injected extends SpecClass {
            constructor() {
                super(...args);
            }
        }

        return new Injected();
    }

    isRegistered(key) {
        return !!this.findInstance(key);
    }

    isSingleton(key) {
        const { singleton = true } = this.findSpec(key);
        return singleton;
    }

    register(key, instance) {
        this.registry[key] = instance;
    }

    resolveInstance(key) {
        if (this.isRegistered(key)) {
            return this.findInstance(key);
        }

        const instance = this.createInstance(key);
        if (this.isSingleton(key)) {
            this.register(key, instance);
        }

        return instance;
    }

    pushDependency(key) {
        this.dependencyStack.push(key);
    }

    popDependency() {
        this.dependencyStack.pop();
    }

    isCircularDependency(key) {
        return this.dependencyStack.includes(key);
    }

    toStackTrace() {
        return this.dependencyStack.join(' > ');
    }
}

export const injector = new Injector();

export default injector;
