import Navbar from './components/Navbar';

import Left from './components/Left';
import Article from './components/Article';
import Footer from './components/Footer';


export default function App() {
  return (
    <div className="">
        <header className="App-header">
          <Navbar></Navbar>
        </header>
        <div className='overflow-auto flex flex-col sm:flex-row'>
          <Left></Left>
          <Article></Article>
        </div>
        <footer>
          <Footer></Footer>
        </footer>
    </div>
  );
}
