import RestaurantCard from "./RestaurantCard";
import { useEffect, useState } from "react";
import axios from "axios";
import { Shimmer } from "./Shimmer";


const Body = () => {

    const [restoList2, setRestoList] = useState([]);
    const [filteredRest, setFilteredRest] = useState([]);
    const [resName, setSearchResto] = useState("");

    useEffect(()=> {
      axios.get('http://localhost:5000/api/getRestaurantData')
      .then(result => {
        setRestoList(result.data.data);
        setFilteredRest(result.data.data);
      })
      .catch(err => {
        console.log(err)
      })

    },[])

   
    //Ternary Operator
    return restoList2.length === 0 ? ( <Shimmer/>) : filteredRest.length === 0 ? ( <h3 className="text-center mt-4">No Data Available</h3>) :  (
      <>
        <div className="d-flex mt-4 ms-2">
            <input
              type="text"
              value={resName}
              onChange={(e) => {
                setSearchResto(e.target.value)
              }}
              className="form-control w-50"
              placeholder="Search Items"
            />
            <button
              className="btn btn-primary ms-4"
              onClick={() => {
                const filteredList = restoList2.filter(elem => elem.res_name === resName)
                setFilteredRest(filteredList)
              }}
            >
            Search Top Restaurants
            </button>
        </div>
        <div className="body col-md-12">
            <div className="card mt-4">
              <div className="card-body row justify-content-between ms-4">
                  {filteredRest.map((restaurant) => (
                      <RestaurantCard key={restaurant.id} restoData={restaurant} />
                  ))}
              </div>
            </div>
        </div>
      </>
  );
   
};

export default Body;
