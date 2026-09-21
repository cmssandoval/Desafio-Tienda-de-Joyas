import useJoyasContext from '../context/JoyasContext/useJoyasContext.ts';

const CustomFooter = () => {

  const {
    previous,
    next,
    totalPages,
    apiPagination,
    setApiPagination
  } = useJoyasContext();

  return (
    <div className="bg-body-tertiary sticky-bottom px-3 pt-3 d-flex justify-content-between fw-bold"  data-bs-theme="dark">
      <nav className="ms-1">
        <ul className="pagination">
          <>
            <li
              className={`page-item ${!previous ? "disabled" : ""}`}
              onClick={() => {
                if (previous) {
                  setApiPagination({...apiPagination, page: (apiPagination.page - 1)});
                }
              }}
              style={
                (!previous)
                  ? { cursor: "not-allowed" }
                  : { cursor: "pointer" }
              }
            >
              <a
                className={`page-link ${!previous ? '' : 'border-warning text-warning'}`}
                href="#"
              > Previous </a>
            </li>

            {[...Array(totalPages)].map((_, index) => (
              <li
                key={index}
                className={
                  `page-item ${apiPagination.page === index + 1 ? "active" : ""}`
                }
                onClick={() => setApiPagination({...apiPagination, page: ( index + 1 )})}
              >
                <a
                  className={`page-link border-warning ${apiPagination.page === index + 1 ? "bg-warning text-black" : "text-warning"}`}
                  href="#"
                > {index + 1} </a>
              </li>
            ))}

            <li
              className={`page-item ${!next ? "disabled" : ""}`}
              onClick={() => {
                if (next) {
                  setApiPagination({...apiPagination, page: (apiPagination.page + 1)});
                }
              }}
              style={
                !next
                  ? { cursor: "not-allowed" }
                  : { cursor: "pointer" }
              }
            >
              <a
                className={`page-link ${!next ? '' : 'border-warning text-warning'}`}
                href="#"> Next </a>
            </li>
          </>
        </ul>
      </nav>
      <div className="me-1 text-white">
        <span className="me-2">Orden:</span>
        <button
          className={
            `btn btn-outline-warning fw-bold me-2 ${apiPagination.order === "id_asc"
              ? "active"
              : ""
            }`
          }
          onClick={() => setApiPagination({...apiPagination, order: 'id_asc'})}
        > ASC </button>

        <button
          className={
            `btn btn-outline-warning fw-bold ${apiPagination.order === "id_desc"
              ? "active"
              : ""
            }`
          }
          onClick={() => setApiPagination({...apiPagination, order: 'id_desc'})}
        > DESC </button>
      </div>
    </div >
  );
};

export default CustomFooter;