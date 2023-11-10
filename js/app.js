import './components/bookForm.js'
import { BookController } from './controllers/bookController.js'

document.addEventListener('DOMContentLoaded', () => {
  const bookController = new BookController()

  bookController.getBooks()
})

document.getElementById('books-cards').addEventListener('click', (event) => {
  const bookController = new BookController()

  if (event.target.classList.contains('delete')) {
    if (window.confirm('¿Estás seguro de que deseas eliminar el libro?')) {
      const id = event.target.getAttribute('_id')

      bookController.deleteBook(id)

      bookController.renderMessage('El libro se ha eliminado correctamente', 'success', 3000)
    }
  }

  if (event.target.classList.contains('edit')) {
    const id = event.target.getAttribute('_id')

    bookController.editBook(id)
  }

  event.preventDefault()
})