
const RestaurantCard = (props) => {

    const { dish_img, res_name, dish_name, res_address, res_rating, dish_price} = props.restoData;

    return(
        <>
            <div className='col-md-3 mt-4 btn-hover '>
                <div className='text-center'>
                    <img src={dish_img} className='w-100'></img>
                </div>
                <h5 className='ms-2 mt-2'>{res_name}</h5>
                <div className='mt-1 d-flex justify-content-between'>
                    <span className='ms-2'>{dish_name}</span>
                    <span className='me-2 text-muted'>{dish_price}</span>
                </div>
                <div>
                    <span className='text-muted ms-2 mb-2'>{res_address} {res_rating}</span>
                </div>
            </div>
        </>
    )
}



export default RestaurantCard;