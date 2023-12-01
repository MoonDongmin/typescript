const uri = "https://jsonplaceholder.typicode.com/users/1";

interface user {
    id: number;
    name: string;
    username: string;
    email: string;
    phone: string;
    website: string;
    address: Object;
    company: Object;
}

async function Data(uri: string): Promise<user> {
    const response = await fetch(uri);
    const data = await response.json();
    return data;
}


Data(uri)
    .then(data => {
        console.log(data);
    })
    .catch(error => console.error("Error:", error));
