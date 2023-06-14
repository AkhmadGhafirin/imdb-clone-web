import Table from "react-bootstrap/Table";

const MovieTable = ({ movies }) => {
  return (
    <Table responsive bordered>
      <thead>
        <tr>
          <th>Id</th>
          <th>Title</th>
          <th>Synopsis</th>
          <th>Genre</th>
          <th>Author</th>
          <th>Image</th>
          <th style={{ width: 50 }}>Actions</th>
        </tr>
      </thead>
      <tbody>
        {movies?.map((movie) => (
          <tr key={movie.id}>
            <td>{movie.id}</td>
            <td>{movie.title}</td>
            <td>{movie.synopsis}</td>
            <td>{movie.genreId}</td>
            <td>{movie.authorId}</td>
            <td>
              <img
                className="img-fluid"
                style={{ height: "200px", width: "500px" }}
                src={movie.imgUrl}
              />
            </td>
            <td>
              <div className="d-flex justify-content-center">
                <p className="flex-fill me-2 text-warning fw-semibold align-items-center">
                  Edit
                </p>
                <p className="flex-fill ms-2 text-danger fw-semibold">Delete</p>
              </div>
            </td>
          </tr>
        ))}
      </tbody>
    </Table>
  );
};

export default MovieTable;
