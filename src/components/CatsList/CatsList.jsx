import { useSelector } from 'react-redux';
import CatCard from '../CatCard/CatCard';
import './CatsList.css';

const CatsList = () => {
  const catsData = useSelector((store) => store.cat);
  return (
    <section className='cats__list'>
      {catsData.map((cat, index) => (
        <div key={index} className='cat__card'>
          <CatCard cat={cat} />
        </div>
      ))}
    </section>
  );
};

export default CatsList;
