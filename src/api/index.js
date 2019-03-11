import { dummyData } from './dummy-data.js';

class Api {
    testRequest() {
        return new Promise((resolve) => {
            setTimeout(() => {
                resolve('result!@');
            }, 1000);
        });
    }

    fetchData() {
        return new Promise((resolve) => {
            setTimeout(() => {
                resolve(dummyData);
            }, 500);
        });
    }
}

export default new Api();
