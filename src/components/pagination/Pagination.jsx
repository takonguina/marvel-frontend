const Pagination = ({ page, setPage, maxPage }) => {
  return (
    <div className="pagination">
      {page > 1 ? (
        <p
          onClick={() => {
            setPage(page - 1);
          }}
          className="next-page-text"
        >
          {"<< Page précédente"}
        </p>
      ) : (
        <p> </p>
      )}

      <p className="current-page">{page}</p>
      {page <= maxPage - 1 ? (
        <p
          className="next-page-text"
          onClick={() => {
            setPage(page + 1);
          }}
        >
          {"Page suivante >>"}
        </p>
      ) : (
        <p></p>
      )}
    </div>
  );
};

export default Pagination;
