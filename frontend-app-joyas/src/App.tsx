import './App.css';
import CustomNavbar from './components/CustomNavbar.tsx';
import CustomFooter from './components/CustomFooter.tsx';
import JoyasProvider from './context/JoyasContext/JoyasProvider.tsx';
import ProductsGrid from './components/ProductsGrid.tsx';

export const App = () => {

  return (
    <JoyasProvider>
      <CustomNavbar />
      <ProductsGrid />
      <CustomFooter />
    </JoyasProvider>
  );
};