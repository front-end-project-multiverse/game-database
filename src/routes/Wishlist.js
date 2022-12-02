import React, { useContext } from "react";
import { GameCard } from "../components/GameCard";
import { WishlistContext } from "../context/WishlistProvider";

export default function Wishlist() {
  const { wishlist } = useContext(WishlistContext);

  return (
    <>
      <h2 className="m-4" style={{ color: "white" }}>
        My Wishlist
      </h2>
      <div className="d-flex flex-wrap">
        {wishlist.length > 0 ? (
          <GameCard game={wishlist} />
        ) : (
          <h5 className="m-4" style={{ color: "white" }}>
            Your wishlist is currently empty
          </h5>
        )}
      </div>
    </>
  );
}
