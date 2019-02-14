class Api {
    testRequest() {
        return new Promise((resolve) => {
            setTimeout(() => {
                resolve('result!@');
            }, 1000);
        });
    }
}

export default new Api();
