import { createContext, useEffect, useState } from "react";

import {  getCategoriesAndDocuments } from "../utils/firebase/firbase.utils.js";

export const  CategoriesContext = createContext({
    categoriesMap: [],
});

export const CategoriesProvider = ({children}) => {
    const [categoriesMap, SetCategoriesMap] = useState({});

    useEffect(() => {
        const getCategoriesMap = async () => {
            const categoryMap = await getCategoriesAndDocuments();
            console.log(categoryMap);
            SetCategoriesMap(categoryMap);
        }

        getCategoriesMap()
    }, []);

    const value = {categoriesMap, SetCategoriesMap};

    return (
        <CategoriesContext.Provider value={value}>{children}</CategoriesContext.Provider>
    )
};
