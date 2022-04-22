const express = require('express')
const app = express()
const cors = require('cors')
const bodyParser = require('body-parser')
const connection = require('./connection')

const mongo = require('mongodb').MongoClient
const url = 'mongodb://localhost:27017'
let db

mongo.connect(
	url,
	{
		useNewUrlParser: true,
		useUnifiedTopology: true
	},
	(err, client) => {
		if (err) {
			console.error(err)
			return
		}
		// Namnet på collection tror jag
		db = client.db('?')
		books = db.collection('?')
	}
)

app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: false }))

app.use(cors())
app.use(express.static('public'))
const port = 3000

app.listen(port, () => console.log(`Example app listening on port ${port}!`))

app.put('/api/movies', (req, res) => {
	// Samma "problem" som i post, just nu måste man välja mellan det som finns
	let sql =
		'UPDATE bok SET titel = ?, filmKategoriId = ?, filmHuvudrollsinnehavareId = ?,filmLandId = ?, filmRegissoerId = ? WHERE filmId = ?'
	let params = [
		req.body.titel,
		req.body.filmKategoriId,
		req.body.filmHuvudrollsinnehavareId,
		req.body.filmLandId,
		req.body.filmRegissoerId,
		req.body.filmId
	]
	connection.query(sql, params, function (error, results, fields) {
		if (error) throw error
		res.json(results)
	})
})
