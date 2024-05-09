import './CatCard.css';

const CatCard = ({ cat }) => {
  return (
    <div className='cat__img__container'>
      {!cat && <p>Loading...</p>}
      {cat && <img src={cat.img} alt='una imagen de gatito' />}
    </div>
  );
};

export default CatCard;
