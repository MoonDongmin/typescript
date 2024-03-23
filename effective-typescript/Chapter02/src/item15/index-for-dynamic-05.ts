function parseCSV(input: string): { [columnName: string]: string }[] {
    const lines = input.split("\n");
    const [header, ...rows] = lines;
    return rows.map(rowStr => {
        const row: { [columnName: string]: string } = {};
        rowStr.split(",").forEach((cell, i) => {
            row[header[i]] = cell;
        });
        return row;
    });
}

interface ProductRow {
    productId: string;
    name: string;
    price: string;
}

declare let csvData: string;
const products = parseCSV(csvData) as unknown as ProductRow[];

function safeParseCSV(
    input: string,
): { [columnName: string]: string | undefined }[] {
    return parseCSV(input);
}

const rows = parseCSV(csvData);
const prices: { [produt: string]: number } = {};
for (const row of rows) {
    prices[row.productId] = Number(row.price);
}

const safeRows = safeParseCSV(csvData);
for (const row of safeRows) {
    prices[row.productId] = Number(row.price);
    // ~~~~~~~~~~~~~ 'undefined' 형식을 인덱스 형식으로 사용할 수 없음
}