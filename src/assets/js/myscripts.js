var LINK_GET_ALL = "http://127.0.0.1:8080/api/getAll"
async function loadPage() {
    const response = await fetch(LINK_GET_ALL, {
        headers: {
            'Content-Type': 'application/json',
            "Access-Control-Allow-Origin": "*",
            "Access-Control-Allow-Credentials": true
        }
    })
        .then((response) => response.json())
        .then((data) => console.log(data));
}