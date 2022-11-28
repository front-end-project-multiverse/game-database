import React, { createContext, useState } from 'react';

const CommentContext = createContext();

function CommentProvider({ children }) {
  
    const [commentData, setCommentData] = useState([
        { id: "540", rating: 5, userName: "SmallBananaMan", comments: "not very good", date: "11/11/2022" },
        { id: "517", rating: 4, userName: "OrangeTuna", comments: "lots of fun", date: "07/05/2022" },
        { id: "521", rating: 3, userName: "DogBlue", comments: "i didnt enjoy it", date: "30/10/2022" },
      ]);
  console.log(commentData);
    function addComment(newComment) {
      setCommentData([...commentData, newComment]);
    }

  return (
    <CommentContext.Provider value={{commentData, addComment}}>
      {children}
    </CommentContext.Provider>
  );
}

export { CommentProvider, CommentContext };