import * as React from 'react';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import { useNavigate } from 'react-router-dom';
import { Link, Typography } from '@mui/material';
import AdminPanelSettingsIcon from '@mui/icons-material/AdminPanelSettings';
import PersonOutlineIcon from '@mui/icons-material/PersonOutline';
import LiveTvIcon from '@mui/icons-material/LiveTv';
import MovieIcon from '@mui/icons-material/Movie';
import DomainIcon from '@mui/icons-material/Domain';
import style from "./styleNav.module.scss"


export default function NavBar() {
  const [mobileOpen, setMobileOpen] = React.useState(false);


  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

  const navigate = useNavigate()
  return (
    <div className={style.jss1}>
    <div >
        <div className={style.jss2} style={{ opacity: "0.7", marginBottom: '10px' }}>
            <AdminPanelSettingsIcon fontSize='large' />
            <h4>ADMIN MANAGER</h4>
        </div>
        <div className={style.jss2}>
            <LiveTvIcon />
            <a onClick={handleDrawerToggle}>Quản lý phim</a>
            <KeyboardArrowDownIcon />
        </div>
        <div className={style.jss4} hidden={!mobileOpen} id='movie'>
            <a onClick={() => navigate("/admin/movies")}>Danh sách phim</a>
        </div>

        <div className={style.jss2}>
            <PersonOutlineIcon />
            <a>Quản lý người dùng</a>
            <KeyboardArrowDownIcon />
        </div>
        <div className={style.jss2}>
            <MovieIcon />
            <a>Quản lý phòng vé</a>
            <KeyboardArrowDownIcon />
        </div>
        <div className={style.jss2}>
            <DomainIcon />
            <a>Quản lý Rạp</a>
            <KeyboardArrowDownIcon />
        </div>
    </div >
</div>
)
}
