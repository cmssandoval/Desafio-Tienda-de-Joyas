import useJoyasContext from "../context/JoyasContext/useJoyasContext";

const CustomFooter = () => {

  const {
    previous,
    next,
    totalPages,
    apiPagination,
    setApiPagination
  } = useJoyasContext();

  return (
    <div className="ms-2 mt-2 d-flex">
      <nav className="me-auto">
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
                className="page-link"
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
                  className="page-link"
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
                className="page-link"
                href="#"> Next </a>
            </li>
          </>
        </ul>
      </nav>
      <div className="me-2">
        <span className="me-2">Orden:</span>
        <button
          className={
            `btn btn-outline-primary me-2 ${apiPagination.order === "id_asc"
              ? "active"
              : ""
            }`
          }
          onClick={() => setApiPagination({...apiPagination, order: 'id_asc'})}
        > ASC </button>

        <button
          className={
            `btn btn-outline-primary ${apiPagination.order === "id_desc"
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