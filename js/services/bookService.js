const URL = 'http://localhost:3000/books'

export class BookService {
  async getBooks() {
    return (await fetch(URL)).json()
  }

  async getBook(id) {
    return (await fetch(`${URL}/${id}`)).json()
  }

  async postBook(book) {
    await fetch(URL, {
      method: 'POST',
      body: JSON.stringify(book),
      headers: { 'Content-Type': 'application/json' }
    })
  }

  async putBook(book) {
    await fetch(`${URL}/${book.id}`, {
      method: 'PUT',
      body: JSON.stringify(book),
      headers: { 'Content-Type': 'application/json' }
    })
  }

  async deleteBook(id) {
    await fetch(`${URL}/${id}`, {
      method: 'DELETE',
      headers: { 'Content-Type': 'application/json' }
    })
  }
}