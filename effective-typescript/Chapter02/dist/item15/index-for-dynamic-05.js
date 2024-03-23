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
const rows = parseCSV(csvData);
const prices = {};
for (const row of rows) {
    prices[row.productId] = Number(row.price);
}
const safeRows = safeParseCSV(csvData);
for (const row of safeRows) {
    prices[row.productId] = Number(row.price);
    // ~~~~~~~~~~~~~ 'undefined' 형식을 인덱스 형식으로 사용할 수 없음
}
