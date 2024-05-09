import { useId } from 'react';
import CountryCard from '../CountryCard/CountryCard';
import './CountryList.css';

const CountriesList = ({ countryData }) => {
  const id = useId();

  const isThereCountriesLength = Boolean(countryData.length);

  return (
    <>
      <section className='list__cards__container'>
        {isThereCountriesLength && (
          <>
            {countryData.map((country) => (
              <div
                key={`${id}${country.name.official}`}
                className='card__general__container'
              >
                <CountryCard k country={country} />
              </div>
            ))}
          </>
        )}
      </section>
    </>
  );
};

export default CountriesList;
