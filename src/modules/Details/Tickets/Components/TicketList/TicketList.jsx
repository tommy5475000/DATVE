import React from "react";
import { useSelector } from "react-redux";
import TicketItem from "../TicketItem";

export default function TicketList({ seats }) {
  const { selectedSeats } = useSelector((state) => {
    return state.ticket;
  });
  return seats.map((seat) => {
    const isSelected = selectedSeats.find((item) => item.tenGhe === seat.tenGhe);
    return <TicketItem seat={seat} isSelected={!!isSelected} />;
  });
}
