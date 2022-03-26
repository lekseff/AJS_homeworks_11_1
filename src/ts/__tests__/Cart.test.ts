import Cart from '../service/Cart';
import Book from '../domain/Book'

describe('CartService', () => {
  let cart: any;

  beforeEach(() => {
    cart = new Cart();
  });

  test('new card should be empty', () => {
    expect(cart.items.length).toBe(0);
  });

  test('add an item to the cart', () => {
    const book = new Book(2022, 'Пикник на обочине', 'Стругацкие', 2500, 320);
    const expected = [{ id: 2022, name: 'Пикник на обочине', author: 'Стругацкие', price: 2500, pages: 320 }];
    cart.add(book);

    expect(cart.items).toEqual(expected);
  });
})
