/*
For this first set of functions, assume the input array looks like this:

const petsArray = [
    { name: 'spot', type: 'dog' },
    { name: 'rover', type: 'dog' },
    { name: 'jumpy', type: 'frog' },
    { name: 'einstein', type: 'cat' },
];


/*
OUTPUT: 
[
    { name: 'spot', type: 'dog' },
    { name: 'rover', type: 'dog' },

]*/

// 1
export function getDogs(petsArr) {
    //VERBOSE
    // return petsArr.filter(eachPet => {
    //     if(eachPet.type === 'dog') return true;
    // });

    //GOLFY - get rid of return true b/c yr conditional returns a boolean
    // return petsArr.filter(eachPet => {
    //     return eachPet.type === 'dog';
    // });

    //SUPER GOLFY - get rid of {} and return because without {} => implicitly returns
    return petsArr.filter(eachPet => eachPet.type === 'dog');
}

/*
OUTPUT: 
['spot', 'rover']
*/

//2
export function getNamesOfDogs(arr) {
    // const justDogs = arr.filter(eachPet => eachPet.type === 'dog');
    // const dogNames2 = justDogs.map(eachDog => eachDog.name);
    // return dogNames2;

    // CHAINING ARRAY METHODS
    const dogNames = arr
        .filter(eachPet => eachPet.type === 'dog')
        .map(eachPet => eachPet.name);
    return dogNames;
}

// 3
/*
Output:

['spot', 'rover', 'jumpy', 'einstein']
*/

export function makeArrayOfNames(arr) {
    return arr.map(eachPet => eachPet.name);
}

//4
/*
Output:

['cat', 'frog', 'dog', 'dog']
*/

export function makeReversedArrayOfTypes(arr) {
    return arr.map(eachPet => eachPet.type).reverse();
}

//5
/*
Output:

[
    { nombre: 'spot', tipo: 'dog' },
    { nombre: 'rover', tipo: 'dog' },
    { nombre: 'jumpy', tipo: 'frog' },
    { nombre: 'einstein', tipo: 'cat' },
]
*/

export function makeSpanishLanguageArray(arr) {
    // const spanishArr = arr.map(eachPet => {
    //     return {
    //         nombre: eachPet.name,
    //         tipo: eachPet.type
    //     };
    // });

    // return spanishArr;

    // SUPER GOLFY - can get rid of outside {} and return but have to wrap the object {} in ()
    return arr.map(eachPet => ({
        nombre: eachPet.name,
        tipo: eachPet.type
    }));
}

//6
/*
Output:

[
    { name: 'spot', isHungry: true, type: 'dog' },
    { name: 'rover', isHungry: true, type: 'dog' },
    { name: 'jumpy', isHungry: true, type: 'frog' },
    { name: 'einstein', isHungry: true, type: 'cat' },
]*/

export function makeArrayWithIsHungry(arr) {
    return arr.map(item => {
        const copy = { ...item };
        // do stuff here

        //this works if you make let copy
        // copy = {
        //     name: item.name,
        //     type: item.type,
        //     isHungry: true
        // };

        copy.isHungry = true; // this seems like cheating

        return copy;
    });
}

//7
/*
Output:

[
    { name: 'SPOT', type: 'dog' },
    { name: 'ROVER', type: 'dog' },
    { name: 'JUMPY', type: 'frog' },
    { name: 'EINSTEIN', type: 'cat' },
]*/

export function makeShoutingArray(arr) {
    return arr.map(eachPet => ({
        name: eachPet.name.toUpperCase(),
        type: eachPet.type
    }));
}

//8
/*

Output:
['spotdog', 'roverdog', 'jumpyfrog', einsteincat']
*/

export function makeStringArray(arr) {
    const string = arr.map(eachPet => eachPet.name + eachPet.type);
    // console.log(string);
    return string;
}
//9
/*
findByName('jumpy', petsArray)

(hint: how do you get the first item out of an array?)

OUTPUT: 
{ name: 'jumpy', type: 'frog' }
*/

export function findByName(name, arr) {
    //loops through and only returns when supplied name is same as name property, returns an array of one object so [0] is to return that first object
    return arr.filter(eachPet => name === eachPet.name)[0];
}

//10
/*
Output:

[
    [
        ['name', 'spot'], 
        ['type', 'dog']
    ], 
    [
        ['name', 'rover'], 
        ['type', 'dog']
    ], 
    [
        ['name', 'jumpy'], 
        ['type', 'frog']
    ],
    [ 
        ['name', 'einstein'], 
        ['type', 'cat']
    ]
*/

export function makeArrayOfArraysOfArrays(arr) {
    return arr.map(eachPet => [
        ['name', eachPet.name],
        ['type', eachPet.type]
    ]);
}

////////////////////////////////////////////////////////

/*
For the next set of functions, assume the following input:

[
    { type: 'car', make: 'ford', model: 'taurus', age: 2 },
    { type: 'car', make: 'chevy', model: 'malibu', age: 3 },
    { type: 'truck', make: 'ford', model: 'bronco', age: 5 },
    { type: 'truck', make: 'chevy', model: 'silverado', age: 2 },
    { type: 'van', make: 'chevy', model: 'express', age: 1 },
    { type: 'car', make: 'chevy', model: 'camero', age: 1 },
]
*/

/*

Output: 
[
    { type: 'car', make: 'ford', model: 'taurus', age: 2 },
    { type: 'car', make: 'chevy', model: 'malibu', age: 3 },
    { type: 'car', make: 'chevy', model: 'camero', age: 1 },    
];
*/

export function getCars(arr) {
    return [];
}

/*
Output:
 [
        { type: 'car', make: 'chevy', model: 'malibu' },
        { type: 'car', make: 'chevy', model: 'camero' },
  ] ;

*/

export function getChevyCars(arr) {
    return [];
}

//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

// Stretch Goals!

/*
Output:
'taurusmalibubroncosilveradoexpresscamero'
 */

export function makeModelsStringWithReduce(arr) {
    return '';
}

/*
(add all ages)

Output: 14 
 */

export function getSumOfAges(arr) {
    return 0;
}

/*

Output: 
{
    car: 3,
    truck: 2,
    van: 1
}
 */

export function makeCountObject(arr) {
    return {};
}


/*

Output: 
(order doesn't matter--but the string must include all keys for the first object in the array)
'typemakemodelage'
 */


export function makeKeysString(arr) {
    return '';
}
