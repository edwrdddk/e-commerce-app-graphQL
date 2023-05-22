import { createContext, useState, useEffect } from 'react';
import { gql, useQuery } from '@apollo/client';

export const CategoriesContext = createContext({
  categoriesMap: {},
});

const COLLECTIONS = gql`
query {
  collections {
    id
    title
    items {
      id
      name
      price
      imageUrl
    }
  }
}
`

export const CategoriesProvider = ({ children }) => {
  const { loading, error, data } = useQuery(COLLECTIONS);
  const [categoriesMap, setCategoriesMap] = useState({});

  console.log('loading', loading);
  console.log('data', data);

  const value = { categoriesMap };
  return (
    <CategoriesContext.Provider value={value}>
      {children}
    </CategoriesContext.Provider>
  );
};


// pre-qraphQL version

// import { createContext, useState, useEffect } from 'react';

// import { getCategoriesAndDocuments } from '../utils/firebase/firebase.utils';

// export const CategoriesContext = createContext({
//   categoriesMap: {},
// });

// export const CategoriesProvider = ({ children }) => {
//   const [categoriesMap, setCategoriesMap] = useState({});

//   useEffect(() => {
//     const getCategoriesMap = async () => {
//       const categoryMap = await getCategoriesAndDocuments();
//       setCategoriesMap(categoryMap);
//     };

//     getCategoriesMap();
//   }, []);

//   const value = { categoriesMap };
//   return (
//     <CategoriesContext.Provider value={value}>
//       {children}
//     </CategoriesContext.Provider>
//   );
// };
