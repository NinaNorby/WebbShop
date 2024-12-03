// HomePage.tsx
import { Home } from "../../Components/Home/Home";
import { IProduct } from "../../Models/IProduct";


interface HomePageProps {
  products?: IProduct[];
}

export const HomePage = ({ products }: HomePageProps) => {
  return (
    <div>
      <Home products={products} /> {/* Skickar vidare produkterna */}
    </div>
  );
};
