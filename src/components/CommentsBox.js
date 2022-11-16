import React, { useState, useEffect } from "react";

export default function CommentsBox() { //pass gameId here as props
 
  const gameId = 2;
  const [commentData, setCommentData] = useState([
    { id: 1, rating: 5, userName: "SmallBananaMan", comments: "not very good", date: "11/11/2022" },
    { id: 2, rating: 4, userName: "OrangeTuna", comments: "lots of fun", date: "07/05/2022" },
    { id: 3, rating: 3, userName: "DogBlue", comments: "i didnt enjoy it", date: "30/10/2022" },
  ]);
  const [rating, setRating] = useState("Select Rating");
  const [comments, setComments] = useState("");
  let [averageRating, setAverageRating] = useState(0)

  useEffect(() => {
    const getRating = () => {
      setAverageRating(0)
      let total = 0
      let count = 0
      commentData.map(each => {
        if (each.id === gameId) {
          total += parseInt(each.rating)
          count ++
        }
        
      })
        setAverageRating ((total/count).toFixed(2))
      return averageRating
    }
   getRating()
  }, [commentData])
  
  const userNameMaker = () => {
    let a = ["Small", "Blue", "Black", "Jimbo", "Rocket", "Car", "Moon", "Cup", "Rose"];
    let b = ["Bear", "Dog", "Banana", "Lion", "Sauce", "Pink", "Guitar", "Man", "Spider"];
    let c = ["Christmas", "Berry", "99", "22", "111", "Mountain", "Lake", "Bath"];

    let rA = Math.floor(Math.random() * a.length);
    let rB = Math.floor(Math.random() * b.length);
    let rC = Math.floor(Math.random() * c.length);
    let name = a[rA] + b[rB] + c[rC];
    return name;
  };

  const handleClick = () => {
    if (rating === "Select Rating") {
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

      setCommentData([...commentData, newComment]);
      setComments("");
      setRating("Select Rating");
    }
  };
  
        
  return (
    <>
      <div className="d-flex flex-column w-75 p-1">
        <div>
          <textarea
            className="form-control"
            placeholder="Leave a review..."
            style={{ backgroundColor: "#6e9095", height: "6em", marginBottom: "1em" }}
            onChange={(e) => setComments(e.target.value)}
            value={comments}
          ></textarea>
          <div className="d-flex justify-content-end pb-3 pt-2">
            <select
              className="form-control"
              style={{ backgroundColor: "#6e9095", marginRight: "1em", width: "8em" }}
              onChange={(e) => setRating(e.target.value)}
              value={rating}
            >
              <option disabled value="Select Rating">
                Select Rating:
              </option>
              <option value="1">1</option>
              <option value="2">2</option>
              <option value="3">3</option>
              <option value="4">4</option>
              <option value="5">5</option>
            </select>
            <button className="btn btn-dark w-25" style={{ maxWidth: "8em" }} onClick={handleClick}>
              Submit
            </button>
          </div>
        </div>
        
        <h5 style={{color: 'white'}}>Overall rating: {averageRating}</h5>
        {commentData.map((each) => {
          
          if (each.id === gameId) {
            return (
              <>
               
                <div className="p-2 mb-2 mt-2" style={{ backgroundColor: "#6e9095", borderRadius: "5px" }}>
                  <h6>{each.userName}</h6>
                  {each.comments}
                  <h6>
                    <div className="d-flex justify-content-between pt-3">
                      <div className>Rating: {each.rating}</div>
                      {each.date}
                    </div>
                  </h6>
                </div>
              </>
            );
          }
        })}
      </div>
    </>
  );
}
