<<<<<<< HEAD
function fetchData() {
	fetch('http://localhost:3000/api/filmer')
		.then((response) => {
			if (!response.ok) {
				throw Error('ERROR')
			}
			return response.json()
		})
		.then((data) => {
			console.log(data)
			const html = data
				.map((filmer) => {
					return `<div class="filmer">
				<a href="http://localhost:3000/api/filmer/:${filmer.filmId}">${filmer.titel}</a>
				</div>
				`
				})
				.join('')
			console.log(html)
			document.querySelector('#app').insertAdjacentHTML('afterbegin', html)
		})
		.catch((error) => {
			console.log(error)
		})
}

fetchData()

// function createNode(element) {
// 	return document.createElement(element)
// }

// function append(parent, el) {
// 	return parent.appendChild(el)
// }

// const a = document.getElementById('film')
// fetch('http://localhost:3000/api/filmer')
// 	.then((resp) => resp.json())
// 	.then(function (data) {
// 		console.log(data)
// 		console.log('Visa första i json-objektet: ' + data[0].filmId)
// 		let film = data
// 		return film.map(function (data) {
// 			let li = createNode('li')
// 			li.innerHTML = data.titel
// 			append(a, li)
// 		})
// 	})
// 	.catch(function (error) {
// 		console.log(error)
// 	})
