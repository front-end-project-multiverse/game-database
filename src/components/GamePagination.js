import Pagination from 'react-bootstrap/Pagination';
import React, {useState} from 'react';


function GamePagination({ game }) {

  const  [active, setActive] = useState(1);
  const numGames = 30;


  const LastGame = active * numGames;
  const FirstGame = LastGame - numGames;


  return (
    <Pagination>
      <Pagination.Prev />
      
        <Pagination.Item>
        </Pagination.Item>

      <Pagination.Next />
    </Pagination>
  );
}

export {GamePagination}

