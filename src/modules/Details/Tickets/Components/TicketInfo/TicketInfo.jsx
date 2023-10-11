import { Button, Grid } from "@mui/material";
import React from "react";
import { useSelector } from "react-redux";

import style from "./styleTicketInfo.module.scss";

export default function TicketInfo({ info }) {
  const { selectedSeats, totalPrice } = useSelector((state) => {
    return state.ticket;
  });

  const handleBook = () => {};

  return (
    <div>
      <Grid className={style.info_item}>
        <h1>{totalPrice} VND</h1>
      </Grid>

      <Grid className={style.info_item}>
        <Grid item md={4}>
          <h4>Cụm rạp :</h4>
        </Grid>
        <Grid item md={8}>
          <h4>{info.tenCumRap}</h4>
        </Grid>
      </Grid>

      <Grid className={style.info_item}>
        <Grid item md={4}>
          <h4>Địa chỉ :</h4>
        </Grid>
        <Grid item md={8}>
          <h4>{info.diaChi}</h4>
        </Grid>
      </Grid>

      <Grid className={style.info_item}>
        <Grid item md={4}>
          <h4>Rạp :</h4>
        </Grid>
        <Grid item md={8}>
          <h4>{info.tenRap}</h4>
        </Grid>
      </Grid>

      <Grid className={style.info_item}>
        <Grid item md={4}>
          <h4>Ngày giờ chiếu :</h4>
        </Grid>
        <Grid item md={8}>
          <h4>{`${info.ngayChieu} - ${info.gioChieu}`}</h4>
        </Grid>
      </Grid>

      <Grid className={style.info_item}>
        <Grid item md={4}>
          <h4>Tên phim :</h4>
        </Grid>
        <Grid item md={8}>
          <h4>{info.tenPhim}</h4>
        </Grid>
      </Grid>

      <Grid className={style.info_item}>
        <Grid item md={4}>
          <h4>Chọn :</h4>
        </Grid>
        <Grid item md={8}>
          {selectedSeats.map((item, index) => (
            <div style={{ display: "inline-block" }}>
              <span>
                <h4>{(index ? ", " : "") + "Ghế:" + item.tenGhe}</h4>{" "}
              </span>
            </div>
          ))}
        </Grid>
      </Grid>

      <Grid className={style.infoButton}>
        <Button className={style.button} onClick={handleBook}>
          ĐẶT VÉ
        </Button>
      </Grid>
    </div>
  );
}
