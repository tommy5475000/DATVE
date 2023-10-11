import { useQuery } from "@tanstack/react-query";
import React from "react";
import { getMoivesInfo } from "../../../apis/movies";
import style from "./styleProfile.module.scss";
import { Grid } from "@mui/material";
import Box from "@mui/material/Box";
import Rating from "@mui/material/Rating";
import Typography from "@mui/material/Typography";

export default function MovieProfile({ movieId }) {
  const [value, setValue] = React.useState(0);

  const { data = {}, isLoading } = useQuery({
    queryKey: ["movieInfo", movieId],
    queryFn: () => getMoivesInfo(movieId),
    enabled: !!movieId,
  });

  return (
    <div>
      <Grid container>
        <Grid item md={4}>
          <div>
            <div>
              <img
                className={style.imgProfile}
                src={data.hinhAnh}
                alt="Hình ảnh"
              />
            </div>
          </div>
        </Grid>

        <Grid item md={4}>
          <div className={style.textProfile}>
            <p>{data.ngayKhoiChieu}</p>
            <h3>{data.tenPhim}</h3>
            <p>{data.moTa}</p>
          </div>
        </Grid>

        <Grid item md={4}>
          <Typography component="legend">{data.danhGia}</Typography>
          <Rating
            name="half-rating"
            precision={0.5}
            value={value}
            onChange={(event, newValue) => {
              setValue(newValue);
            }}
          />
        </Grid>
      </Grid>
    </div>
  );
}
