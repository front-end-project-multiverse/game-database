import React, { createContext, useState } from 'react';

const WishlistContext = createContext();

function WishlistProvider({ children }) {
  
    const [wishlist, setWishlist] = useState([]);
    function addToWishlist(game) {
      setWishlist([...wishlist, game]);
      console.log(wishlist)
    }

    function removeFromWishlist(game) {
        setWishlist(wishlist.filter((each) => game !== each));
      }

  return (
    <WishlistContext.Provider value={{wishlist, addToWishlist, removeFromWishlist}}>
      {children}
    </WishlistContext.Provider>
  );
}

export { WishlistProvider, WishlistContext };