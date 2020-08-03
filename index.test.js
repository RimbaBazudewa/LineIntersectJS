const cal = require('./index');

test('test 1 ', () => {
    expect(cal({
        p1: {
            x: 5,
            y: 5
        },
        p2: {
            x: 20,
            y: 20,
        }

    }, {
        p1: {
            x: 5,
            y: 15
        },
        p2: {
            x: 15,
            y: 5,
        }

    })).toEqual({ x: 10, y: 10 });
});

test('test 2 ', () => {
    expect(cal({
        p1: {
            x: 1,
            y: 1
        },
        p2: {
            x: 3,
            y: 3,
        }

    }, {
        p1: {
            x: 1,
            y: 3
        },
        p2: {
            x: 3,
            y: 1,
        }

    })).toEqual({ x: 2, y: 2 });
});