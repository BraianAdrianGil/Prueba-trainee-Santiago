import { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';

const usePagination = () => {
  const countriesData = useSelector((store) => store.country);

  const [elementsPerPage, setElementsPerPage] = useState(5);
  const [currentPage, setCurrentPage] = useState(0);

  const startIndex = currentPage * elementsPerPage;
  const endIndex = startIndex + elementsPerPage;
  const totalPages = Math.round(countriesData.length / elementsPerPage);

  const handleChangePage = (page) => {
    if (currentPage === 0 && page === -1) return setCurrentPage(totalPages - 1);
    if (currentPage === totalPages - 1 && page === totalPages)
      return setCurrentPage(0);
    setCurrentPage(page);
  };

  const handleSetCurrentPage = (buttonPage) => {
    setCurrentPage(buttonPage);
  };

  const paginatedData = countriesData.slice(startIndex, endIndex);
  return {
    paginatedData,
    totalPages,
    currentPage,
    handleChangePage,
    handleSetCurrentPage,
  };
};

export default usePagination;
