import React, { useEffect, useState } from "react";
import style from "./styleAdminMovies.module.scss";
import { Button, Container, Grid, Modal, TextField } from "@mui/material";
import AddMovie from "./AddMovie";
import { list } from "./List";
import Swal from "sweetalert2";
import { useNavigate, useSearchParams } from "react-router-dom";
import { QueryClient, useMutation, useQuery } from "@tanstack/react-query";
import { deleteMovie, getMovieList } from "../../../apis/movies";

export default function AdminMovie() {
  const [searchTerm, setSearchTerm] = useState("");
  const [openModalMovie, setOpenModalMovie] = useState(false);
  const [openModalUpdateMovie, setopenModalUpdateMovie] = useState(false);
  const [searchParams, setSearchParams] = useSearchParams();

  const handleOpenAddMovie = () => {
    setOpenModalMovie(true);
  };
  const handleCloseAddMovie = () => {
    setOpenModalMovie(false);
  };


  const { data, isLoading } = useQuery({
    queryKey: ["movieList"],
    queryFn: () => getMovieList(),
  });


  let movies = data?.items;

   const totalPages = data?.totalPages;
  const pages = Array.from({ length: totalPages }, (_, index) => index + 1);

  //search
  const handleChangeSearchTerm = (evt) => {
    return setSearchTerm(evt.target.value);
  };
  const movieSearch = movies?.filter((movie) => {
    if (movie.tenPhim.toLowerCase().indexOf(searchTerm)) {
      return movie;
    }
  });
  useEffect(() => {
    movies = movieSearch;
  }, [searchTerm]);

  //   useEffect(() => {
  //   getMovieList();
  //   const page = searchParams.get("soTrang");
  //   getMovieList({ page });
  // }, [searchParams]);

  const handleChangePage = (page) => {
    useSearchParams.set("soTrang", page);
    setSearchParams(searchParams);
  };

  const handleOpenModalUpdateMovie = () => {
    setopenModalUpdateMovie(true);
  };
  const handleCloseModalUpdateMovie = () => {
    setopenModalUpdateMovie(false);
  };

  // nút xóa
  const handleDeleteMovieInfor = (movieId) => {
    Swal.fire({
      title: "Bạn muốn xóa phim?",
      icon: "question",
      showCancelButton: true,
      confirmButtonText: "Đồng ý",
      cancelButtonText: `Hủy`,
    }).then((result) => {
      if (result.isConfirmed) {
        handleDeleteMovie(movieId);
      } else if (result.isDenied) {
        return;
      }
    });
  };

  const { mutate: handleDeleteMovie } = useMutation({
    mutationFn: (movieId) => deleteMovie(movieId),
    onSuccess: () => {
      Swal.fire("Thành Công!", "Đã xóa phim", "success").then(function () {
        window.location.reload();
      });
    }
  });

  const button = document.getElementById("button");
  let prevButton = null;
  button?.addEventListener("click", (e) => {
    const isButton = e.target.nodeName === "BUTTON";
    if (!isButton) {
      return;
    }

    if (prevButton !== null) {
      prevButton.style.background = "rgba(250, 71, 6, 0.813)";
    }
    e.target.style.background = "red";
    prevButton = e.target;
  });

  const navigate = useNavigate();
  const handleShowShowtimes = (movieId) => {
    navigate(`/admin/showtimes/${movieId}`);
  };


  return (
    <div className={style.js1}>
      <Container>
        <Grid>
          <TextField
            onChange={handleChangeSearchTerm}
            label="Tìm kiếm phim ..."
            type="search"
            sx={{ width: "35ch" }}
          />
        </Grid>
        <Grid>
          <Button onClick={handleOpenAddMovie}>Thêm Phim</Button>
        </Grid>
        <Modal open={openModalMovie} onClose={handleCloseAddMovie}>
          <AddMovie handleCloseAddMovie={handleCloseAddMovie} />
        </Modal>
        <div>
          <table className={style.js3}>
            <thead>
              {list.map((item) => {
                return (
                  <th
                    className={style.js2}
                    style={{ maxWidth: `${item.width}` }}
                  >
                    {item.text}
                  </th>
                );
              })}
            </thead>
            {movies?.map((movie) => {
              return (
                <tbody>
                  <td>{movie.maPhim}</td>
                  <td>{movie.tenPhim}</td>
                  <td style={{ overflowWrap: "anywhere" }}>{movie.trailer}</td>
                  <td>{movie.biDanh}</td>
                  <td>
                    <img
                      src={movie.hinhAnh}
                      style={{ width: "100px", height: "100px" }}
                      alt=""
                    />
                  </td>
                  <td style={{ overflowWrap: "inherit" }}>{movie.moTa}</td>
                  <td>
                    <button
                      className={style.js5}
                      onClick={handleOpenModalUpdateMovie}
                    >
                      Sửa
                    </button>
                    <button
                      onClick={() => handleDeleteMovieInfor(movie.maPhim)}
                      className={style.js6}
                    >
                      Xóa
                    </button>
                    <button
                      onClick={() => handleShowShowtimes(movie.maPhim)}
                      className={style.js7}
                    >
                      Lịch Chiếu
                    </button>
                  </td>
                </tbody>
              );
            })}
          </table>
          <div id="button" className={style.js8}>
            {pages.map((page, index) => {
              return (
                <Button
                  id={index}
                  className={style.js9}
                  onClick={() => handleChangePage(page)}
                >
                  {page}
                </Button>
              );
            })}
          </div>
        </div>
      </Container>
    </div>
  );
}
