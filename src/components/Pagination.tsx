import { useEffect, useState } from "react";
import ReactPaginate from "react-paginate";

import { PaginationPropsType } from "../types";

function Pagination({ exercises, setDisplyedExercises, setChangePage }: PaginationPropsType) {
   const [itemOffset, setItemOffset] = useState(0);
   const itemsPerPage = 15;
   const endOffset = itemOffset + itemsPerPage;
   const exercisesInPage = exercises.slice(itemOffset, endOffset);

   const pageCount = Math.ceil(exercises.length / itemsPerPage);

   const handlePageClick = (event: { selected: number }) => {
      const newOffset = (event.selected * itemsPerPage) % exercises.length;
      setItemOffset(newOffset);
      setChangePage(true);
   };

   useEffect(() => {
      setDisplyedExercises(exercisesInPage);
   }, [endOffset, pageCount]);

   return (
      <section>
         <ReactPaginate
            breakLabel="..."
            nextLabel="next >"
            onPageChange={handlePageClick}
            pageRangeDisplayed={1}
            marginPagesDisplayed={1}
            pageCount={pageCount}
            previousLabel="< previous"
            renderOnZeroPageCount={null}
            containerClassName="pagination"
            pageLinkClassName="page-num"
            previousLinkClassName="page-num"
            nextLinkClassName="page-num"
            activeLinkClassName="active"
            disabledLinkClassName="disable-btn"
         />
      </section>
   );
}

export default Pagination;
