import React, { useState, useEffect, useContext } from "react";
import { CommentContext } from "../context/CommentProvider";

export default function CommentsBox({ gameId }) {
  const { commentData, addComment } = useContext(CommentContext);
  const [rating, setRating] = useState("0");
  const [comments, setComments] = useState("");
  const [isChecked, setIsChecked] = useState(true);
  const [averageRating, setAverageRating] = useState(0);

  useEffect(() => {
    const getRating = () => {
      setAverageRating(0);
      let total = 0;
      let count = 0;
      commentData.map((each) => {
        if (each.id === gameId) {
          total += parseInt(each.rating);
          count++;
        }
      });
      setAverageRating((total / count).toFixed(2));
      return averageRating;
    };
    getRating();
  }, [commentData]);

  const userNameMaker = () => {
    const a = ["Small", "Blue", "Black", "Fast", "Rocket", "Car", "Moon", "Cup", "Rose", "Orange", "Custard"];
    const b = ["Bear", "Dog", "Banana", "Cucumber", "Lion", "Sauce", "Pink", "Guitar", "Man", "Spider", "Cream"];
    const c = ["Christmas", "Berry", "99", "22", "111", "Mountain", "Lake", "Bath", "Tuna"];

    const rA = Math.floor(Math.random() * a.length);
    const rB = Math.floor(Math.random() * b.length);
    const rC = Math.floor(Math.random() * c.length);
    const userName = a[rA] + b[rB] + c[rC];
    return userName;
  };

  const handleClick = () => {
    if (rating === "0") {
      alert("Please select a rating");
    } else {
      const now = Date.now();
      const today = new Date(now);
      const date = today.toLocaleDateString();

      const newComment = {
        id: gameId,
        rating: rating,
        userName: userNameMaker(),
        comments: comments,
        date: date,
      };

      addComment(newComment);
      setComments("");
      setRating("0");
    }
    setIsChecked(true);
  };

  const handleRatingChange = (e) => {
    setRating(e.target.value);
    setIsChecked(false);
  };

  return (
    <>
      <div className="d-flex flex-column p-1">
        <h6 style={{ color: "white", marginBottom: "2em" }}>
          Overall rating: {averageRating === "NaN" ? "No rating" : averageRating}
        </h6>
        <div>
          <textarea
            className="comments"
            placeholder="Leave a review..."
            style={{ backgroundColor: "#6e9095", height: "6em", marginBottom: "1em" }}
            onChange={(e) => setComments(e.target.value)}
            value={comments}
          ></textarea>

          <div className="d-flex flex-row justify-content-between pb-3 pt-2  flex-wrap">
            <div className="rating">
              <input type="radio" id="star5" name="rating" value="5" onClick={(e) => handleRatingChange(e)} />
              <label htmlFor="star5"></label>
              <input type="radio" id="star4" name="rating" value="4" onClick={(e) => handleRatingChange(e)} />
              <label htmlFor="star4"></label>
              <input type="radio" id="star3" name="rating" value="3" onClick={(e) => handleRatingChange(e)} />
              <label htmlFor="star3"></label>
              <input type="radio" id="star2" name="rating" value="2" onClick={(e) => handleRatingChange(e)} />
              <label htmlFor="star2"></label>
              <input type="radio" id="star1" name="rating" value="1" onClick={(e) => handleRatingChange(e)} />
              <label htmlFor="star1"></label>
              <input type="radio" id="star0" name="rating" value="0" checked={isChecked} readOnly />
              <label htmlFor="star0" style={{ display: "none" }}></label>
              <h6 style={{ color: "white", paddingTop: "0.7em" }}>Your rating:</h6>
            </div>
            <button className="btn btn-dark w-25 mt-1" style={{ minWidth: "6em"}} onClick={handleClick}>
              Submit
            </button>
          </div>
        </div>

        {commentData.map((each, index) => {
          if (each.id === gameId) {
            return (
              <div className="comments" key={index}>
                <h6 className="userName">{each.userName}</h6>
                {each.comments}
                <h6>
                  <div className="d-flex justify-content-between pt-3 flex-wrap">
                    <div>Rating: {each.rating} out of 5</div>
                    {each.date}
                  </div>
                </h6>
              </div>
            );
          }
        })}
      </div>
    </>
  );
}
