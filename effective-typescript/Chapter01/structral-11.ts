interface PostgresDB {
    runQuery: (sql: string) => any[];
}

interface Author {
    first: string;
    last: string;
}

interface DB {
    runQuery: (sql: string) => any[];
}

function getAuthors(database: DB): Author[] {
    const authorRows = database.runQuery(`SELECT FIRST, LAST FROM AUTHORS`);
    return authorRows.map(row => ({first: row[0], last: row[1]}));
}