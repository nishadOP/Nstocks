import React,{useEffect,useState} from "react";
//import { holdings } from "../data/data";

import axios from 'axios';
import { Verticalgraph } from "./Verticalgraph";



const Holdings = () => {

const  [ allholdings,setallholdings] = useState([]);

useEffect(()=>{

axios.get("http://localhost:3002/allholdings").then((res)=>{
  console.log(res.data);
  setallholdings(res.data)
})


},[])

// const labels = ['January', 'February', 'March', 'April', 'May', 'June', 'July'];
const labels = allholdings.map((subarray)=>subarray["name"])

const data = {
  labels,
  datasets: [
    {
      label: "Stock Price ",
      data: allholdings.map((stock)=>stock.price) ,  
       backgroundColor: 'rgba(255, 99, 132, 0.5)',
    },]

}

// export const data = {
//   labels,
//   datasets: [
//     {
//       label: 'Dataset 1',
//       data: labels.map(() => faker.datatype.number({ min: 0, max: 1000 })),
//       backgroundColor: 'rgba(255, 99, 132, 0.5)',
//     },
//     {
//       label: 'Dataset 2',
//       data: labels.map(() => faker.datatype.number({ min: 0, max: 1000 })),
//       backgroundColor: 'rgba(53, 162, 235, 0.5)',
//     },
//   ],
// };



  return (
    <>
      <h3 className="title">Holdings ({allholdings.length})</h3>
      <div className="order-table">
        <table>
          
            <tr>
              <th>Instrument</th>
              <th>Qty.</th>
              <th>Avg. cost</th>
              <th>LTP</th>
              <th>Cur. val</th>
              <th>P&amp;L</th>
              <th>Net chg.</th>
              <th>Day chg.</th>
            </tr>

            {allholdings.map((stock,index)=>{

              const currvalue = stock.price*stock.qty;
              const isprofit = currvalue-stock.avg*stock.qty>=0.0;
              const profclass = isprofit?"profit":"loss";
              const dayclass = stock.isLoss ? "Loss":"profit";

              return(

                 <tr key={index} >
              <td>{stock.name}</td>
              <td>{stock.qty}</td>
              <td>{stock.avg.toFixed(2)}</td>
              <td>{stock.price.toFixed(2)}</td>
              <td>{currvalue.toFixed(2)}</td>
              <td className={profclass}>{(currvalue-stock.avg*stock.qty).toFixed(2)}</td>
              <td className={profclass}>{stock.net}</td>
              <td className={dayclass}>{stock.day}</td>
            </tr>


              )

            })

            }


         
          
        </table>
      </div>
      <div className="row">
        <div className="col">
          <h5>
            29,875.<span>55</span>
          </h5>
          <p>Total investment</p>
        </div>
        <div className="col">
          <h5>
            31,428.<span>95</span>
          </h5>
          <p>Current value</p>
        </div>
        <div className="col">
          <h5>1,553.40 (+5.20%)</h5>
          <p>P&amp;L</p>
        </div>
      </div>
      <Verticalgraph data={data} />
    </>
  );
};

export default Holdings;
