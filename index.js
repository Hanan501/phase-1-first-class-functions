function receivesAFunction(callback) {
    callback();
}

function returnsANamedFunction() {
    return function somthing(){

    };
}

function returnsAnAnonymousFunction () {
    return function(){

    }
}