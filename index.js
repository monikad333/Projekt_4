const express = require('express')
const app = express()
const port = 3000

app.get('/books', (req, res) => {
    res.send('showing a list of books') // todo get books from mongodb database
})
app.get('/books/:bookId', (req, res) => {
    res.send('showing a specific book') // todo get books from mongodb database
})
app.post('/books', (req, res) => {
    res.send('adding new book') // todo get books from mongodb database
})
app.put('/books/:bookId', (req, res) => {
    res.send('updating a book') // todo get books from mongodb database
})
app.delete('/books/:bookId', (req, res) => {
    res.send('deleting a book') // todo get books from mongodb database
})

// index() -> get all resources
app.get('/authors', (req, res) => {
    res.send('authors')
})

// show() -> get specified resource
app.get('/authors/:authorId', (req, res) => {
    const authorId = req.params.authorId;
    /*
     1. get :authorId -> req.params.authorId
     2. wysyłamy id authora (authorId) przy pomocy mongoose do mongoDb
     3. pobieramy to co zwroci nam mongo
     4. wysylamy to na front przy pomocy res.send()
     */
    res.send('showing author whose id is: ' +authorId)
})

// create() -> create new resource
app.post('/authors/', (req, res) => {
    res.send('create author')
})

// update() -> update specified resource
app.patch('/authors/:authorId', (req, res) => {
    res.send('update specified author')
})

// destroy() -> delete specified resource
app.delete('/authors/:authorId', (req, res) => {
    res.send('delete specified author')
})


app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
})

