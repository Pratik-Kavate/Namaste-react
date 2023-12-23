import RestaurantCard from "./RestaurantCard";
import { useEffect, useState } from "react";
import axios from "axios";
import { Shimmer } from "./Shimmer";


const Body = () => {

    const [restoList2, setRestoList] = useState([]);
    const [filteredRest, setFilteredRest] = useState([]);
    const [resName, setSearchResto] = useState("");
    const [cityName, setCityName] = useState("");
    const [resListByCity , setResListByCity] = useState("");

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

    const searchRestByCity = () => {
      axios.get("http://localhost:5000/api/getDishBYCityName", {
        params : {
          cityName : cityName
        }
      })
      .then(result => {
        setResListByCity(result.data.data);
      })
    }

   
    //Ternary Operator
    return restoList2.length === 0 ? ( <Shimmer/>) : filteredRest.length === 0 ? ( <h3 className="text-center mt-4">No Data Available</h3>) :  (
      <>
        <div className="d-flex justify-content-end me-2 mt-3">
          <button type="button" class="btn btn-primary" data-bs-toggle="modal" data-bs-target="#myModal" >
            Search By City
          </button>
        </div>
      
        <div class="modal" id="myModal">
          <div class="modal-dialog">
            <div class="modal-content">

              <div class="modal-header">
                <h4 class="modal-title">City</h4>
                <button type="button" class="btn-close" data-bs-dismiss="modal"></button>
              </div>

              <div class="modal-body">
                <input className="form-control" type="text" value={cityName} onChange={(e)=> setCityName(e.target.value)}/>
              </div>

              <div class="modal-footer d-flex">
                <button type="button" class="btn btn-success" data-bs-dismiss="modal" onClick={searchRestByCity}>Search</button>
                <button type="button" class="btn btn-danger" data-bs-dismiss="modal">Close</button>
              </div>

            </div>
          </div>
        </div>

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
                setResListByCity([]);
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
                  {resListByCity.length != 0 ? resListByCity.map((restaurant) => (
                      <RestaurantCard key={restaurant.id} restoData={restaurant} />
                  )) : filteredRest.map((restaurant) => (
                      <RestaurantCard key={restaurant.id} restoData={restaurant} />
                  ))}
              </div>
            </div>
        </div>
      </>
  );
   
};

export default Body;
