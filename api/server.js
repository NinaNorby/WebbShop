// Steg 1. Importera alla beroenden...
import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv'; 
import productsRoutes from './routes/products-routes.js';


// Steg 2. Laddar .env-konfiguration...
dotenv.config();

// Steg 3. Globala variabler...
const PORT = process.env.PORT || 5100;

// Steg 4. Skapar express-applikationen...
const app = express();

// Steg 5. Middleware
app.use(cors());
app.use(express.json());

// Steg 6. Aktiverar routes...
app.use('/api/products', productsRoutes);

// Steg 7. Startar servern...
app.listen(PORT, () => {
  console.log(`Servern körs på http://localhost:${PORT}`);
});
