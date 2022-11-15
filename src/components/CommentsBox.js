import React, { useState } from "react";
import Dropdown from "react-bootstrap/Dropdown";

export default function CommentsBox() {   //pass gameId here as props
  const gameId = 1;
  const [commentData, setCommentData] = useState([
    { id: 1, rating: 5, comments: "not very good", date: "11/11/2022" },
    { id: 2, rating: 4, comments: "lots of fun", date: "07/05/2022" },
    { id: 3, rating: 3, comments: "i didnt enjoy it", date: "30/10/2022" },
  ]);
  const [rating, setRating] = useState()
  const [comments, setComments] = useState("")

  const handleClick = () => {
    const now = Date.now()
    const today = new Date(now)
    const date = today.toLocaleDateString()

    const newComment = {
        id: gameId,
        rating: rating,
        comments: comments,
        date: date
    }

    setCommentData([...commentData, newComment])
    setComments("")
    setRating("Select Rating")

  }

  return (
    <>
      <div className="d-flex flex-column w-75 p-1">
        <div>
          <textarea
            class="form-control"
            placeholder="Leave a review..."
            style={{ backgroundColor: "#6e9095", height: "6em" }}
            onChange={(e)=>setComments(e.target.value)}
            value={comments}
          ></textarea>
          <div className="d-flex justify-content-between pb-3 pt-2">
            <select className="form-control" style={{ backgroundColor: "#6e9095", marginRight: "1em" }} onChange={(e)=>setRating(e.target.value)} value={rating}>
              <option selected disabled value='Select Rating'>Select Rating:</option>
              <option value="1">1</option>
              <option value="2">2</option>
              <option value="3">3</option>
              <option value="4">4</option>
              <option value="5">5</option>
            </select>
            <button className="btn btn-dark w-25" onClick={handleClick}>Submit</button>
          </div>
        </div>

        {commentData.map((each) => {

            if (each.id === gameId) {
                return (
                    <>
                      <div className="p-2 m-2" style={{ backgroundColor: "#6e9095", borderRadius: "5px" }}>
                        {each.comments}
                        <div className="d-flex justify-content-between">
                          <div>Rating: {each.rating}</div>
                          {each.date}
                        </div>
                      </div>
                    </>
                  );
            }
        })}
      </div>
    </>
  );
}
