import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

import Home from './pages/Home';

function App() {
  return (
    <div className='App'>
      <Router>
        {/* <Navbar /> */}
        <Routes>
          <Route exact path='/' element={<Home />} />
          {/* <Route path='/categories' element={<Categories />} />
          <Route path='/single-plate/:id' element={<SinglePlate />} />
          <Route path='/search/:id' element={<SearchPage />} />
          <Route path='/random-menu' element={<RandomPage />} />
          <Route path='/category/:id' element={<Category />} />
          <Route path='/country/:id' element={<Country />} /> */}
        </Routes>
        {/* <Footer /> */}
      </Router>
    </div>
  );
}

export default App;
