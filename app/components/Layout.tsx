import Footer from './Footer';
import Navigation from './Navigation';

const Layout = ({ children }) => (
  <div className='container mx-auto'>
    <Navigation/>
    <div>{children}</div>
    <Footer/>
  </div>
);

export default Layout;
