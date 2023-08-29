async function fetchData() {
    try {
        const response = await fetch('https://jsonplaceholder.typicode.com/post/10/comments');
        const data = await response.json();
        return data;
    } catch (error) {
        console.error('An error occurred:', error);
        throw error;
    }
}

fetchData()
    .then(data => {
        console.log('Fetched data:', data);
    })
    .catch(error => {
        console.error('Failed to fetch data:', error);
    });