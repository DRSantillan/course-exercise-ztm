// #1) Create a promise that resolves in 4 seconds and returns "success" string

// const success = new Promise((resolve, reject) => {
// 	setTimeout(resolve, 4000, 'success');
// });

// #2) Run the above promise and make it console.log "success"
// success.then(result => {
//     console.log(result)
// })

// #3) Read about Promise.resolve() and Promise.reject(). How can you make
// the above promise shorter with Promise.resolve() and console loggin "success"
// const newPromise = new Promise.resolve(
//     setTimeout(() => {
//         console.log('success');
//     },4000)
// )

// #4) Catch this error and console log 'Ooops something went wrong'
//Promise.reject('failed').catch(console.log('Ooops something went wrong!'))

// #5) Use Promise.all to fetch all of these people from Star Wars (SWAPI) at the same time.
// Console.log the output and make sure it has a catch block as well.
const urls = [
	'http://jsonplaceholder.typicode.com/users',
	'http://jsonplaceholder.typicode.com/posts',
	'http://jsonplaceholder.typicode.com/albums',
];

Promise.all(urls.map((url) => fetch(url).then((res) => res.json())))
	.then((results) => {
		console.log(results[0]);
		console.log(results[1]);
		console.log(results[2]);
	})
	.catch(console.log('error'));
