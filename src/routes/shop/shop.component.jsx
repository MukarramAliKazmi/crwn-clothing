import { useEffect } from 'react';
import { Routes, Route } from 'react-router-dom';
import { useDispatch } from 'react-redux';

import { getCategoriesAndDocuments } from "../../utils/firebase/firebase.utils.js";
import CategoriesPreview from '../categories-preview/categories-preview.component';
import Category from '../category/category.component';
import { setCategories } from '../../store/categories/category.action.js';

const Shop = () => {
    const dispatch = useDispatch();

    useEffect(() => {
        const getCategoreisMap = async () => {
           const categoriesArray  = await getCategoriesAndDocuments();
            dispatch(setCategories(categoriesArray));
        };

        getCategoreisMap();
    }, []);

    return (
        <Routes>
            <Route index element={<CategoriesPreview />} />
            <Route path=":category" element={<Category />} />
        </Routes>
    );
};

export default Shop;