import { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import { getCountries } from './services/getCountries';
import { setCountries } from './store/slices/countrySlice';
import { addCatToState } from './store/slices/catSlice';
import { CAT_STATUS_CODES } from './constants';
import { getCat } from './services/getCat';
import { getRandomNumber } from './utils/getRandomNumber';
import usePagination from './hooks/usePagination';
import PageButtons from './components/PageButtons/PageButtons';
import CatsList from './components/CatsList/CatsList';
import CountriesList from './components/CountriesList/CountriesList';
import './App.css';

function App() {
  const dispatch = useDispatch();
  const [currentStatusCode, setCurrentStatusCode] = useState([]);
  // usePagination ===================================
  const {
    handleChangePage,
    currentPage,
    totalPages,
    handleSetCurrentPage,
    paginatedData,
  } = usePagination();

  // Functions ===================================
  const loadCountries = async () => {
    const countriesData = await getCountries();
    dispatch(setCountries(countriesData));
  };

  const loadCats = async () => {
    let number = 0;
    let randomNumber = getRandomNumber(CAT_STATUS_CODES);
    while (number < 10) {
      randomNumber = getRandomNumber(CAT_STATUS_CODES);
      const newCat = await getCat(randomNumber);
      dispatch(addCatToState(newCat));
      setCurrentStatusCode((prevState) => [...prevState, randomNumber]);
      number++;
    }
  };

  // Props for the PagesButtons Component ===================================
  const buttonsProps = {
    handleChangePage,
    handleSetCurrentPage,
    currentPage,
    totalPages,
  };
  // useEffects ===================================
  useEffect(() => {
    loadCountries();
    loadCats();
  }, []);

  return (
    <div className='App'>
      <header>
        <figure>
          <img src='/react.png' alt='' />
        </figure>
        <h2>
          Prueba trainee by <span>Santiago</span>
        </h2>
      </header>
      <main>
        <PageButtons
          buttonsProps={buttonsProps}
          currentStatusCode={currentStatusCode}
        />
        <CountriesList countryData={paginatedData} />
        <CatsList />
      </main>
      <footer></footer>
    </div>
  );
}

export default App;
