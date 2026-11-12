import React from "react";
function Leftimage({
  imageUrl,
  productName,
  productDescription,
  tryDemo,
  LearnMore,
  googleplay,
  appstore,
}) {
  return (
    <div className="container mt-5 ">
      <div className="row ">
        <div className="col-6 ">
          <img src={imageUrl} ></img>
        </div>
       
        <div className="col-6 p-5 mt-5">
          <h1>{productName}</h1>
          <p>{productDescription}</p>
          <div>
            <a href={tryDemo} style={{textDecoration:"none"}}>Try Demo →</a>
            <a href={LearnMore} style={{marginLeft:"50px",textDecoration:"none"}}>Learn More →</a>
          </div>

          <div className="mt-3">
            <a href={googleplay}>
              <img src="media/images/googlePlayBadge.svg"></img>
            </a>
            <a href={appstore}>
              <img src="media/images/appstoreBadge.svg" style={{marginLeft:"50px"}}></img>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Leftimage;
