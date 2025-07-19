const url = 'https://jsonplaceholder.typicode.com/posts/1'

// Standard promise (then class)
fetch(url)
    .then(res => res.json())
    .then(res => console.log(res))
    .catch(err => console.error(err))

// Async await
const getPosts = async () => {
    try {
        const result = await fetch(url);
        const data = await result.json();
        console.log(data);
    } catch (error) {
        console.error(error);
    }
}
getPosts();