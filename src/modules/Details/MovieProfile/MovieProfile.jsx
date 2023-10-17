import { useQuery } from "@tanstack/react-query";
import React from "react";
import { getMovieShowtimes } from "../../../apis/cinema";
import style from "./styleProfile.module.scss";
import { Box, Button, CircularProgress, Container, Grid } from "@mui/material";
import Rating from "@mui/material/Rating";
import Typography from "@mui/material/Typography";
import dayjs from "dayjs";

export default function MovieProfile({ movieId }) {

  const { data, isLoading } = useQuery({
    queryKey: ["movieInfo", movieId],
    queryFn: () => getMovieShowtimes(movieId),
    enabled: !!movieId,
  });

  return (
    <Container maxWidth="lg">
      <Grid container spacing={{ xs: 4 }}>
        <Grid item md={3}>
          <Grid className={style.js1}>
            <img
            className={style.js11}
              src={data?.hinhAnh}
              alt="Hình ảnh"
            />

          </Grid>
    
        </Grid>

        <Grid item xs={6} style={{ position: 'relative' }}>
          <Grid container spacing={{xs:1}} className={style.js3}>
            <Grid item xs={12}>
              <h3>{data?.tenPhim}</h3>
            </Grid>

            <Grid item xs={12}>
              <h4>{dayjs(data?.ngayKhoiChieu).format("DD.MM.YYYY")}</h4>
            </Grid>

            <Grid item xs={12}>
              <h5>
                {
                  data?.heThongRapChieu[0]?.cumRapChieu[0]?.lichChieuPhim[0]
                    ?.thoiLuong
                }
                phút
              </h5>
            </Grid>

            <Grid item xs={12} >
              <Button className={style.js4}>Mua vé</Button>
            </Grid>
          </Grid>
        </Grid>

        <Grid item xs={3} style={{ position: 'relative' }}>
          <Grid container className={style.js5} >
            <Grid item >
              <CircularProgress variant='determinate' value={100} className={style.js6} />
              <Box>
                <Typography className={style.js7}>
                  <h1>{data?.danhGia}</h1>
                </Typography>
              </Box>

            </Grid>
            <Grid item className={style.js8}>
              <Rating name="read-only" value={5} readOnly
                style={{ color: 'rgb(251, 66, 38)', marginTop: '15px' }} />
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    </Container>
  );
}
