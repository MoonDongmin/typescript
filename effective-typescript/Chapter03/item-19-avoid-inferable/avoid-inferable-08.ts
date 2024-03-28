// HIDE
namespace express {
    export interface Request {
    }

    export interface Response {
        send(text: string): void;
    }
}

interface App {
    get(path: string, cb: (request: express.Request, response: express.Response) => void): void;
}

const app: App = null!;
// END

// 이렇게 하지말라
app.get("/health", (request: express.Request, response: express.Response) => {
    response.send("OK");
});

// 이렇게 해라
app.get("/health", (request, response) => {
    response.send("OK");
});
