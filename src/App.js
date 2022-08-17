import Navbar from './components/Navbar';

import Left from './components/Left';
import Article from './components/Article';

export default function App() {
  return (
    <div className="">
        <header className="App-header">
          <Navbar></Navbar>
        </header>
        <body className='overflow-auto flex flex-col sm:flex-row'>
          <Left></Left>
          <Article></Article>
        </body>
    </div>
  );
}
