import { Routes, Route } from 'react-router-dom';
import Layout from './layouts/Layout';
import Home from './pages/Home';
import Buffets from './pages/Buffets';
import Menu from './pages/Menu'; // I will create this next

function App() {
    return (
        <Routes>
            <Route path="/" element={<Layout />}>
                <Route index element={<Home />} />
                <Route path="buffets" element={<Buffets />} />
                <Route path="menu" element={<Menu />} />
            </Route>
        </Routes>
    );
}

export default App;
