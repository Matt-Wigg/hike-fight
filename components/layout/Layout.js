// layout components
import Nav from './Nav/Nav';
import HikerCard from '../HikerCard/HikerCard';

const Layout = ({ children }) => {
  return (
    <div>
      <Nav />
      <HikerCard images={'Images Placeholder'} />
      <main>{children}</main>
    </div>
  );
};

export default Layout;
