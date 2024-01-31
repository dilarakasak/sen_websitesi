import './App.css';
import Header from './Header';
import Footer from './Footer';
import { Route, Routes } from 'react-router-dom';
import Anasayfa from './Anasayfa';
import Kurumsal from './pages/Kurumsal';
import Sektorler from './pages/Sektorler';
import Tfayda from './pages/Tfayda';
import Kariyer from './pages/Kariyer';
import Bilgi from './pages/İletisim';

function App() {
  return (
    <div>
      <Header/>
      <Routes>
        <Route path='' element={<Anasayfa/>}/>
        <Route path='/kurumsal' element={<Kurumsal/>}/>
        <Route path='/sektorler' element={<Sektorler/>}/>
        <Route path='/toplumsalfayda' element={<Tfayda/>}/>
        <Route path='/kariyer' element={<Kariyer/>}/>
        <Route path='/bilgi' element={<Bilgi/>}/>
      </Routes>
      <Footer/>
    </div>
  );
}

export default App;
