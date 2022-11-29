import React, {useContext} from 'react'
import { GameCard } from "../components/GameCard"
import { WishlistContext } from "../context/WishlistProvider";

export default function Wishlist() {

  const { wishlist } = useContext(WishlistContext);

  return (
    <div className='d-flex flex-wrap'>
    <GameCard game={wishlist} />
    </div>
  )
}
