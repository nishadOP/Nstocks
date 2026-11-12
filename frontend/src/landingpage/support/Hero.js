import React from "react";

function Hero() {
  return (
    <>
      <section className="container-fluid" id="supportHero">
        <div className=" p-4  " id="supportWrapper">
          <h4>Support Portal</h4>
          <a href="">Track Tickets</a>
        </div>
        <div className="row  p-4  m-5 gx-5">
          <div className="col-6 p-4 ">
            <h1 className="fs-3">search for an answer or browse help topics to create a ticket</h1>
            <input placeholder="EG. how to i activate F&O"></input>
            <br></br>
            <a>Track Account opening</a>
            <br></br>
            <a>Track segment activation</a>
            <br></br>
            <a>Intraday margins</a>
            <br></br>
            <a>Kite user Manuels</a>

          </div>
          <div className="col-6 p-4  ">
            <h1 className="fs-3">Featured</h1>
            <ol>
              <li><a>Current takeovers and Delisting-january 2024</a></li>
              <li> <a>Latest intrady leverages-MIS & CO</a></li>
            </ol>
            
            
           
          </div>
        </div>
      </section>
    </>
  );
}
export default Hero;
