import React, {useContext} from 'react'
import { GameCard } from "../components/GameCard"
import { WishlistContext } from "../context/WishlistProvider";

export default function Wishlist() {

  const { wishlist } = useContext(WishlistContext);

  return (
    <>
    <GameCard game={wishlist} />
    </>
  )
}
