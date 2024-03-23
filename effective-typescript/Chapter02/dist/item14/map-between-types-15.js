"use strict";
const couple1 = [
    {
        first: "Fred",
        last: "Astaire",
    },
    {
        first: "Ginger",
        last: "Rogers",
    },
]; // OK
const couple2 = [
    // ~~~~~~~~~~~~~~~
    // Property 'last' is missing in type
    // '{ first: string; }' but required in type 'Name'
    { first: "Sonny" },
    { first: "Cher" },
];
