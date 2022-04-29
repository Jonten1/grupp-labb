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
				<a class="link" href="http://localhost:3000/filmdetaljvy.html?id=${filmer.filmId}">${filmer.titel}</a>
				</div>
				`
					//http://localhost:3000/filmdetaljvy.html?id=1
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

function fetchNumberOfFilms() {
	fetch('http://localhost:3000/api/antalfilmer')
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
					return `<p>Just nu finns det ${filmer.antalFilmer} filmer i databasen</p>	`
					//http://localhost:3000/filmdetaljvy.html?id=1
				})
				.join('')
			console.log(html)
			document.querySelector('#app').insertAdjacentHTML('afterbegin', html)
		})
		.catch((error) => {
			console.log(error)
		})
}
fetchNumberOfFilms()
