import React from "react";
import { Link, useNavigate } from "react-router-dom";
import style from "./card.module.scss";
import BookOnlineRoundedIcon from '@mui/icons-material/BookOnlineRounded';
export default function Carditem({ item }) {

 const navigate= useNavigate()

  return (
    <div className={style.card_movie}>
      <Link className={style.card_item}>
        <img src={item.hinhAnh} alt="" />
      </Link>
      <Link className={style.card_item}>
        <span className={style.card_name}>{item.tenPhim}</span>
      </Link>
      <div className={style.card_ticket}>
        <button className={style.btn_card} onClick={()=> navigate(`/movies/${item.maPhim}`)} >
          {/* <BookOnlineRoundedIcon style={{ transform: 'rotateZ(45deg)',fontSize:"16px" }} /> */}
          <span>
            MUA VÉ
          </span>
          </button>
      </div>
    </div>
  );
}
