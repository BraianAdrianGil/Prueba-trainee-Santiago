import './CountryCard.css';

const CountryCard = ({ country }) => {
  const countryLanguageObject = new Object(country.languages);
  const allCountryLanguages = Object.values(countryLanguageObject).join(' / ');

  const copyCountry = structuredClone(country);
  const capitalCopyArray = Array(copyCountry.capital);
  const singleCapitalCopy =
    capitalCopyArray[0] !== undefined
      ? capitalCopyArray[0].slice(0, 1)
      : 'Sin capital';

  return (
    <>
      <figure className='card__img__container'>
        <img src={country.flags.svg} alt='' />
      </figure>
      <h2 className='card__title__name'>{country.name.official}</h2>
      <ul className='card__ul__container'>
        <li className='card__li__item'>
          <b>Región</b>: {country.subregion}
        </li>
        <li className='card__li__item'>
          <b>Capital</b>: {singleCapitalCopy}
        </li>
        <li className='card__li__item'>
          <b>Idiomas</b>: {allCountryLanguages}
        </li>
        <li className='card__li__item'>
          <b>Población</b>: {country.population}
        </li>
      </ul>
    </>
  );
};

export default CountryCard;
