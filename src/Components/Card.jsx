// Card.jsx


const Card = ({ id, title, description,Image }) => {
  return (
    <div className="card-wrapper">
        <div className="card">
            <img className="card-img" src={Image}  alt=""/>
            <div className="card-text">
                <h3>{title}</h3>
                <p>{description}</p>
            </div>
        </div>
    </div>
  );
};

export default Card;
