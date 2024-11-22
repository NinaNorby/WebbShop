// Likande uppsättnings om på lektionem 

import { http, HttpResponse } from 'msw';
import { mockProducts } from '../Mocks/mockProducts';

export const handlers = [
  // Hanterar GET-förfrågan för att hämta alla produkter
  http.get('http://localhost:5100/api/products', () => {
    return HttpResponse.json(mockProducts, { status: 200 });
  }),

  // Hanterar GET-förfrågan för att hämta en enskild produkt baserat på ID
  http.get('/api/products/:id', ({ params }) => {
    const { id } = params;
    const product = mockProducts.find((prod) => prod.id === Number(id));

    if (product) {
      return HttpResponse.json(product, { status: 200 });
    } else {
      return HttpResponse.json(
        { message: 'Product not found' },
        { status: 404 }
      );
    }
  }),
];
