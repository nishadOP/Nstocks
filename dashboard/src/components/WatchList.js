
import React, { useState, useContext } from "react";
import {
  BarChartOutlined,
  KeyboardArrowDown,
  KeyboardArrowUp,
  MoreHoriz,
} from "@mui/icons-material";
import { watchlist } from "../data/data";
import GeneralContext from "./GeneralContext";
import { Tooltip, Grow } from "@mui/material";
import { Doughnoutchart } from "./Doughnoutchart";

const labels = watchlist.map((subarray)=>subarray["name"])


const WatchList = () => {


  const data = {
    labels,
    datasets: [
     {
       label: "price ",
       data: watchlist.map((stock)=>stock.price),
       backgroundColor: [
        'rgba(255, 99, 132, 0.5)',
         'rgba(54, 162, 235, 0.5)',
         'rgba(255, 206, 86, 0.5)',
         'rgba(75, 192, 192, 0.5)',
         'rgba(153, 102, 255, 0.5)',
         'rgba(255, 159, 64, 0.5)',
       ],
      borderColor: [
        'rgba(255, 99, 132, 1)',
         'rgba(54, 162, 235, 1)',
         'rgba(255, 206, 86, 1)',
         'rgba(75, 192, 192, 1)',
        'rgba(153, 102, 255, 1)',
       'rgba(255, 159, 64, 1)',
      ],
      borderWidth: 1,
     },
   ],
   
  }



  return (
    <div className="watchlist-container">
      <div className="search-container">
        <input
          type="text"
          name="search"
          id="search"
          placeholder="Search eg: infy, bse, nifty fut weekly, gold mcx"
          className="search"
        />
        <span className="counts">{watchlist.length} / 50</span>
      </div>

      <ul className="list">
        {watchlist.map((stock, index) => (
          <Watchlistitem
            stock={stock}
            index={index}
            key={stock.name}
          />
        ))}
      </ul>
        
<Doughnoutchart data={data}/>


    </div>
  );
};

export default WatchList;

function Watchlistitem({ stock }) {
  const [showwatchlist, setwatchlist] = useState(false);

  return (
    <li
      onMouseEnter={() => setwatchlist(true)}
      onMouseLeave={() => setwatchlist(false)}
    >
      <div className="item">
        <p className={stock.isDown ? "down" : "up"}>
          {stock.name}
        </p>

        <div className="itemInfo">
          <span className="percent">{stock.percent}</span>

          {stock.isDown ? (
            <KeyboardArrowDown className="down" />
          ) : (
            <KeyboardArrowUp className="up" />
          )}

          <span className="price">{stock.price}</span>
        </div>
      </div>

      {showwatchlist && <Watchlisthovereffect uid={stock.name} />}
    </li>
  );
}

function Watchlisthovereffect({ uid }) {
  const { openBuyWindow } = useContext(GeneralContext);

  return (
    <span className="actions">
      <Tooltip title="Buy (B)" placement="top" arrow TransitionComponent={Grow}>
        <button
          className="buy"
          onClick={() => openBuyWindow(uid)}
        >
          buy
        </button>
      </Tooltip>

      <Tooltip title="Sell (S)" placement="top" arrow TransitionComponent={Grow}>
        <button className="sell">sell</button>
      </Tooltip>

      <Tooltip title="Analytics (A)" placement="top" arrow TransitionComponent={Grow}>
        <button className="action">
          <BarChartOutlined className="icon" />
        </button>
      </Tooltip>

      <Tooltip title="more" placement="top" arrow TransitionComponent={Grow}>
        <button className="action">
          <MoreHoriz className="icon" />
        </button>
      </Tooltip>
    </span>
  );
}
