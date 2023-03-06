import Footer from './Footer';
import Navigation from './Menu/Navigation';

const Layout = ({ children }) => {
  return (
    <div>
      <Navigation />
      {children}
      <Footer />
    </div>
  );
};

export default Layout;
