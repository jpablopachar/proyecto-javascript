import { BookController } from "../controllers/bookController.js"

const bookForm = document.getElementById('book-forms')

const btnCancel = document.getElementById('btn-cancel')

bookForm.addEventListener('submit', () => {
  event.preventDefault()

  const id = bookForm.id.value
  const title = bookForm.title.value.trim()
  const author = bookForm.author.value.trim()
  const isbn = bookForm.isbn.value.trim()
  const img = bookForm.img.value.trim()

  const bookController = new BookController()

  if (title === '' || author === '' || isbn == '') {
    bookController.renderMessage('Existen campos vacíos', 'danger', 3000)

    return
  }

  const book = {
    title,
    author,
    isbn,
    img: img.length > 0 ? img : 'https://i.pinimg.com/originals/80/a5/1a/80a51a0b7293317a273207178aa12358.jpg'
  }

  if (id !== '') {
    book.id = id

    bookController.updateBook(book)
  } else {
    bookController.addBook(book)
  }

  bookController.renderMessage('Libro agregado', 'success', 3000)
})

btnCancel.addEventListener('click', (e) => {
  e.preventDefault()

  const bookController = new BookController()

  bookController.clearBookForm()
})