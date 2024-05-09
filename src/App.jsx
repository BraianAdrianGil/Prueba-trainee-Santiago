import { useDispatch } from 'react-redux';
import { getCountries } from './services/getCountries';
import { setCountries } from './store/slices/countrySlice';
import { useEffect } from 'react';
import CountriesList from './components/CountriesList/CountriesList';
import usePagination from './hooks/usePagination';
import PageButtons from './components/PageButtons/PageButtons';
import './App.css';

function App() {
  const dispatch = useDispatch();
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
        <PageButtons buttonsProps={buttonsProps} />
        <CountriesList countryData={paginatedData} />
      </main>
      <footer></footer>
    </div>
  );
}

export default App;
