import { Routes, Route } from 'react-router-dom';

import Nevigation from './routes/navigation/navigation.component';
import Home from './routes/home/home.component';
import Authentication from './routes/authentication/authentication.component';

// temporary component
const Shop = () => <h1>Shop page</h1>

const App = () => {
  return (
    <Routes>
      <Route path='/' element={<Nevigation />}>
        <Route index element={<Home />} />
        <Route path='shop' element={<Shop />} />
        <Route path='sign-in' element={<Authentication />} />
      </Route>
    </Routes>
  );
};

export default App;
