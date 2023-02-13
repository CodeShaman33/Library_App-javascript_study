const Book = require('./index.js');

describe('Book', () => {
  it('creates a new Book object with default values', () => {
    const book = new Book();
    expect(book.author).toBe('unknown');
    expect(book.title).toBe('unknown');
    expect(book.ISBN).toBe('unknown');
  });

  it('creates a new Book object with specified values', () => {
    const book = new Book('John Doe', 'The Great Gatsby', '123456789');
    expect(book.author).toBe('John Doe');
    expect(book.title).toBe('The Great Gatsby');
    expect(book.ISBN).toBe('123456789');
  });
});
