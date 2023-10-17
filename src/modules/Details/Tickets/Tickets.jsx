import { Grid } from "@mui/material";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableRow from "@mui/material/TableRow";
import { useQuery } from "@tanstack/react-query";
import React from "react";
import { useParams } from "react-router-dom";
import { getTicket } from "../../../apis/tickets";
import style from "./styleTicket.module.scss";
import TicketList from "./Components/TicketList/TicketList";
import TicketInfo from "./Components/TicketInfo/TicketInfo";

export default function Tickets() {
  const { ticketId } = useParams();

  const { data, isLoading } = useQuery({
    queryKey: ["getTicket", ticketId],
    queryFn: () => getTicket(ticketId),
    enabled: !!ticketId,
  });

  const seats = data?.danhSachGhe || [];
  const info = data?.thongTinPhim || [];
  console.log(seats);
  return (
    <div className={style.seatTicket}>
      <Grid container>
        <Grid item md={8}>
          <Table sx={{ minWidth: 700 }} aria-label="simple table">
            <TableBody>
              <TableRow>
                <TicketList seats={seats} />
              </TableRow>
            </TableBody>
          </Table>

          <Grid className={style.info}>
            <Grid item md={4}>
              <div className={style.infoSeatDaDat}></div>
              <p>Đã đặt</p>
            </Grid>
            <Grid item md={4}>
              <div className={style.infoSeatThuong}></div>
              <p>Thường</p>
            </Grid>
            <Grid item md={4}>
              <div className={style.infoSeatVip}></div>
              <p>Vip</p>
            </Grid>
          </Grid>
        </Grid>

        <Grid item md={4}>
          <TicketInfo info={info} data={data}/>
        </Grid>
      </Grid>
    </div>
  );
}
