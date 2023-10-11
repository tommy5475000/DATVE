import React from "react";
import { useParams } from "react-router-dom";
import { Container } from "@mui/material";
import MovieProfile from "./MovieProfile/MovieProfile";
import ShowTimes from "./ShowTimes/ShowTimes";
import style from "./styleDetail.module.scss"
import Tickets from "./Tickets";

export default function Details() {
  const { cinemaId } = useParams();
  return (
    <div className={style.bg_details}>
      <Container>
        <MovieProfile movieId={cinemaId} />
        <ShowTimes movieId={cinemaId} />
      </Container>
    </div>
  );
}
