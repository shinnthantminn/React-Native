import { createContext, useState } from "react";

export const FavoriateContext = createContext({
  ids: [],
  addFavoriate: () => {},
  removeFavoriate: () => {},
});

const FavoriateContextProvider = ({ children }) => {
  const [favoriateIds, setFavoriateIds] = useState([]);

  const addFavoriate = (id) => {
    setFavoriateIds((pre) => [...pre, id]);
  };

  const removeFavoriate = (id) => {
    setFavoriateIds((pre) => pre.filter((i) => i !== id));
  };

  const value = {
    ids: favoriateIds,
    addFavoriate: addFavoriate,
    removeFavoriate: removeFavoriate,
  };

  return (
    <FavoriateContext.Provider value={value}>
      {children}
    </FavoriateContext.Provider>
  );
};

export default FavoriateContextProvider;
