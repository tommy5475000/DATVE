import React, { useState } from "react";
import { Button, Grid } from "@mui/material";
import { useSelector } from "react-redux";
import style from "./styleTicketInfo.module.scss";
import Swal from "sweetalert2";
import { useMutation} from "@tanstack/react-query";
import { addTicket } from "../../../../../apis/tickets";

export default function TicketInfo({ info, data }) {
  const [dataTicket, setDataTicket] = useState({});


  const { selectedSeats, totalPrice } = useSelector((state) => {
    return state.ticket;
  });

  const { mutate: handleBuyTicket } = useMutation({
    mutationFn: () => addTicket(dataTicket),

    onSuccess: () => {
      Swal.fire(
        "Đặt vé thành công!",
        "Kiểm tra trong lịch sử đặt vé",
        "success"
      ).then(function () {
        window.location.reload();
      });
    },
  });

  const handleBook = () => {
    if (selectedSeats.length <= 0) {
      Swal.fire({
        icon: "error",
        title: "Bạn chưa chọn ghế",
        text: "Vui lòng chọn ghế!",
      });
      return;
    }
    setDataTicket({
      maLichChieu: data?.thongTinPhim.maLichChieu,
      danhSachVe: selectedSeats.map((seat) => {
        return {
          maGhe: seat.maGhe,
          giaVe: seat.giaVe,
        };
      }),
    });
    handleBuyTicket();
  };

  return (
    <div>
      <Grid className={style.info_item}>
        <h1>{totalPrice.toLocaleString()} VND </h1>
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
        <Button
          sx={{ width: "100%" }}
          className={style.button}
          onClick={handleBook}
        >
          ĐẶT VÉ
        </Button>
      </Grid>
    </div>
  );
}
