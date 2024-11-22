// Den här funktionen gör faktiska nätverksanrop  när jag hämtar data som användare kan se och interagera med i applikationen. 
import { IProduct } from '../Models/IProduct';

export const fetchProducts = async (): Promise<IProduct[]> => {
  const apiUrl = import.meta.env.VITE_API_URL || 'http://localhost:5100';
  try {
    const response = await fetch(`${apiUrl}/api/products`);
    if (!response.ok) {
      throw new Error('Failed to fetch products');
    }
    const data = await response.json();
    return data.result; // Här extraherar jag `result` från svaret
  } catch (error) {
    console.error('Error fetching products:', error);
    return [];
  }
};
