import { useQuery } from "@tanstack/react-query";
import React, { useState, useEffect } from "react";
import dayjs from "dayjs";
import { getMovieShowtimes } from "../../../apis/cinema";
import { Grid } from "@mui/material";
import { useNavigate } from "react-router-dom";
import style from "./styleShowTime.module.scss";

export default function Showtimes({ movieId }) {
  const [cinemas, setCinemas] = useState([]);

  const navigate = useNavigate();

  const { data, isLoading } = useQuery({
    queryKey: ["movieShowtimes", movieId],
    queryFn: () => getMovieShowtimes(movieId),
    enabled: !!movieId,
  });

  const cinemaSystems = data?.heThongRapChieu || [];

  const handleGetCinemaSystem = (cinemaSystemId) => {
    const found = cinemaSystems.find(
      (item) => item.maHeThongRap === cinemaSystemId
    );

    setCinemas(found.cumRapChieu);
  };

  useEffect(() => {
    if (cinemaSystems.length > 0) {
      setCinemas(cinemaSystems[0].cumRapChieu);
    }
  }, [cinemaSystems]);

  return (
    <div className={style.spacing_showtime}>
      <Grid container>
        <Grid item md={1}>
          <div></div>
        </Grid>

        <Grid item md={1}>
          <div className={style.cinema}>
            {/* Render hệ thống rạp */}
            {cinemaSystems.map((cinemaSystem) => {
              return (
                <div
                  key={cinemaSystem.maHeThongRap}
                  className={style.cinema_showtime}
                >
                  <img
                    src={cinemaSystem.logo}
                    alt=""
                    width={50}
                    height={50}
                    onClick={() =>
                      handleGetCinemaSystem(cinemaSystem.maHeThongRap)
                    }
                  />
                </div>
              );
            })}
          </div>
        </Grid>

        <Grid item md={10}>
          <div className={style.movielist}>
            {/* Render danh sách rạp */}
            {cinemas.map((cinema) => {
              return (
                <div className={style.movielist_item}>
                  <h2>{cinema.tenCumRap} </h2>
                  <span className={style.movie_title}>{cinema.diaChi}</span>

                  {/* Render lịch chiếu */}
                  {cinema.lichChieuPhim.map((showtime) => {
                    const time = dayjs(showtime.ngayChieuGioChieu).format(
                      "DD-MM-YYYY ~ HH:mm"
                    );

                    return (
                      <div>
                        <button
                          className={style.button_ticket}
                          onClick={() =>
                            navigate(`/tickets/${showtime.maLichChieu}`)
                          }
                        >
                          {time}
                        </button>
                      </div>
                    );
                  })}
                </div>
              );
            })}
          </div>
        </Grid>
      </Grid>
    </div>
  );
}
