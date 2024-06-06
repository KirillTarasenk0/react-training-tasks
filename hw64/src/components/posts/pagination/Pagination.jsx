import './Pagination.css';
import {useState, useEffect} from "react";

export default function Pagination({postsCount, clickPaginationButton}) {
    const [pagesCount, setPagesCount] = useState(0);
    useEffect(() => {
        setPagesCount(Math.ceil(postsCount / 10));
    }, [postsCount]);
    return (
      <>
        <div className="pagination__container">
            {Array.from({length: pagesCount}, (_, i) => i + 1).map(pageNumber => {
              return (
                  <div className="pagination__button-container" key={pageNumber}>
                      <button className="pagination__button" onClick={() => clickPaginationButton(pageNumber)}>
                          {pageNumber}
                      </button>
                  </div>
              );
            })}
        </div>
      </>
    );
}