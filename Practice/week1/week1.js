"use strict";
const uri = "https://jsonplaceholder.typicode.com/todos/1";
async function Data(uri) {
    const response = await fetch(uri);
    const data = await response.json();
    return data;
}
Data(uri)
    .then(data => {
    console.log(`User ID: ${data.userId}`);
    console.log(`ID: ${data.id}`);
    console.log(`Title: ${data.title}`);
    console.log(`Completed: ${data.completed ? "Yes" : "No"}`);
})
    .catch(error => console.error("Error:", error));
