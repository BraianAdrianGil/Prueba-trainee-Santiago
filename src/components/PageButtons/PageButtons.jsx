import './PageButtons.css';

const PageButtons = ({ buttonsProps }) => {
  const { totalPages, handleChangePage, handleSetCurrentPage, currentPage } =
    buttonsProps;
  const arrayFromTotalPages = Array(totalPages).fill('undefined');

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
        <button className='cat__button'>Agregar un gatito 🐈</button>

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
