"use strict";
function parseCSV(input) {
    const lines = input.split("\n");
    const [header, ...rows] = lines;
    return rows.map(rowStr => {
        const row = {};
        rowStr.split(",").forEach((cell, i) => {
            row[header[i]] = cell;
        });
        return row;
    });
}
const products = parseCSV(csvData);
function safeParseCSV(input) {
    return parseCSV(input);
}
