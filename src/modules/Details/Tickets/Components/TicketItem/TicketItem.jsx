import React from "react";
import style from "./styleTicketItem.module.scss";
import Stack from "@mui/material/Stack";
import Button from "@mui/material/Button";
import { useDispatch } from "react-redux";

export default function TicketItem({ seat, isSelected }) {
  const dispatch = useDispatch();

  let classes = { style };
  if (seat.taiKhoanNguoiDat) {
    classes = style.itemcolorisbook;
  } else if (isSelected) {
    classes = style.itemcolorbooking;
  } else if (seat.loaiGhe === "Vip") {
    classes = style.itemcolorvip;
  }

  const handleSelect = () => {
    dispatch({
      type: "selectSeat",
      payload: { ...seat, isSelected: !isSelected },
    });
  };

  return (
    <Stack className={style.itemlist} display="inline-block">
      <Button
        className={classes}
        variant="outlined"
        size="small"
        disabled={seat.daDat}
        onClick={handleSelect}
      >
        {seat.tenGhe}
      </Button>
    </Stack>
  );
}
