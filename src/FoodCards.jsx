const FoodCards = (props) => {
  return (
    <div className={'movie'}>
      <div>
        <p>Quantity - {props.food1.quantity}</p>
      </div>

      <div>
        <img
          src={
            props.food1.image_front_url ? props.food1.image_front_url : 'N/A'
          }
          alt={props.food1.product_name}
        />
      </div>

      <div>
        <span>expires on {props.food1.expiration_date}</span>
        <h3>{props.food1.product_name}</h3>
      </div>
    </div>
  );
};

export default FoodCards;
