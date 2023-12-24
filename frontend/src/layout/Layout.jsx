
import PropTypes from 'prop-types';
import NavBar from '../components/NavBar';
import Footer from '../components/Footer';

const Layout = ({ children }) => {
  return (
    <div style={{ display: 'flex', flexDirection: 'column', minHeight: '100vh' }}>
      <NavBar />
      <main style={{ flexGrow: 1, paddingBottom: '60px' }}>
        {children}
      </main>
      <Footer style={{ position: 'fixed', bottom: 0, width: '100%', height: '60px' }} />
    </div>
  );
};

// Add PropTypes validation
Layout.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Layout;
