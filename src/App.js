import { useEffect } from "react";
import { useDispatch } from "react-redux";

import { Routes, Route } from 'react-router-dom';

import { onAuthStateChangedListner, createUserDocumentFromAuth } from "./utils/firebase/firebase.utils";
import Nevigation from './routes/navigation/navigation.component';
import Home from './routes/home/home.component';
import Authentication from './routes/authentication/authentication.component';
import Shop from './routes/shop/shop.component';
import Checkout from './routes/checkout/checkout.component';
import { setCurrentUser } from './store/user/user.action';

const App = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    const unsubscribe = onAuthStateChangedListner((user) => {
        if (user) {
            createUserDocumentFromAuth(user);
        }
        dispatch(setCurrentUser(user));
    });
    
    return unsubscribe;
  }, []);

  return (
    <Routes>
      <Route path='/' element={<Nevigation />}>
        <Route index element={<Home />} />
        <Route path='shop/*' element={<Shop />} />
        <Route path='sign-in' element={<Authentication />} />
        <Route path='checkout' element={<Checkout />} />
      </Route>
    </Routes>
  );
};

export default App;
