import { useDispatch, useSelector } from 'react-redux';
import { getRandomNumber } from '../../utils/getRandomNumber';
import { CAT_STATUS_CODES } from '../../constants';
import { getCat } from '../../services/getCat';
import { addCatToState } from '../../store/slices/catSlice';
import './PageButtons.css';

const PageButtons = ({ buttonsProps, currentStatusCode }) => {
  const { totalPages, handleChangePage, handleSetCurrentPage, currentPage } =
    buttonsProps;
  const arrayFromTotalPages = Array(totalPages).fill('undefined');
  const catData = useSelector((store) => store.cat);
  const dispatch = useDispatch();

  const handleCatButtonClick = async () => {
    const randomNUmber = getRandomNumber(CAT_STATUS_CODES);
    if (currentStatusCode.includes(randomNUmber)) return;
    const newCat = await getCat(randomNUmber);
    dispatch(addCatToState(newCat));
  };

  return (
    <>
      <div className='buttons__container'>
        {/* left arrow button */}
        <button
          className='button__left'
          onClick={() => handleChangePage(currentPage - 1)}
        >
          <i className='bx bxs-chevron-left'></i>
        </button>

        {/* cat button */}
        <button className='cat__button' onClick={handleCatButtonClick}>
          Agregar un gatito 🐈
        </button>

        {/* right arrow button  */}
        <button
          className='button__right'
          onClick={() => handleChangePage(currentPage + 1)}
        >
          <i className='bx bxs-chevron-right'></i>
        </button>
      </div>

      <div className='buttons__array__container'>
        {arrayFromTotalPages.map((_, index) => (
          <button
            key={index}
            onClick={() => handleSetCurrentPage(index)}
            className={`${currentPage === index && 'current__button'}`}
          >
            {index}
          </button>
        ))}
      </div>
    </>
  );
};

export default PageButtons;
