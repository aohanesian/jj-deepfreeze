`use strict`;

let user = {
    data: {
        a: 1,
        b: 2,
        c: 3,
        d: {
            a1: 1,
            b1: 2,
            c1: 3,
            d1: {
                a2: 3,
                b2: 3,
                c2: 3,
            }
        },
    }
}

function DeepFreeze(object) {
    for (const objectKey in object) {
        if (typeof object[objectKey] === `object`) {
            DeepFreeze(object[objectKey])
        } else {
            Object.freeze(object)
        }
    }
    return Object.freeze(object)
}

DeepFreeze(user);

console.log(Object.isFrozen(user.data.d.d1.c2));
console.log(user.data.d.d1.c2);
user.data.d.d1.c2 = `string`;
console.log(user.data.d.d1.c2);
