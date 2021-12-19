// #1) Convert the below promise into async await
fetch('https://jsonplaceholder.typicode.com/users/')
	.then((response) => response.json())
	.then(console.log);

const getUsers = async () => {
	const results = await fetch('https://jsonplaceholder.typicode.com/users');
	const data = await results.json();

	console.log(data, 'results');
};

getUsers();

// #2) ADVANCED: Update the function below from the video to also have
// async await for this line: fetch(url).then(resp => resp.json())
// So there shouldn't be any .then() calls anymore!
// Don't get discouraged... this is a really tough one...
const urls = [
	'https://jsonplaceholder.typicode.com/users',
	'https://jsonplaceholder.typicode.com/posts',
	'https://jsonplaceholder.typicode.com/albums',
];

const getData = async function () {
	try {
		const [users, posts, albums] = await Promise.all(
			urls.map(async (url) => {
				const response = await fetch(url);
				const data = await response.json();
				return data;
			})
		);
		console.log('users', users);
		console.log('posta', posts);
		console.log('albums', albums);
	} catch (err) {
		console.log(err);
	}
};

getData();
