import * as React from "react";
import Drawer from "@mui/material/Drawer";
import List from "@mui/material/List";
import Box from "@mui/material/Box";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import HomeIcon from "@mui/icons-material/Home";
import Collapse from "@mui/material/Collapse";
import InboxIcon from "@mui/icons-material/MoveToInbox";
import ExpandLess from "@mui/icons-material/ExpandLess";
import ExpandMore from "@mui/icons-material/ExpandMore";
import DashboardIcon from "@mui/icons-material/Dashboard";
import PeopleOutlineIcon from "@mui/icons-material/PeopleOutline";
import PublicIcon from "@mui/icons-material/Public";
import SettingsEthernetIcon from "@mui/icons-material/SettingsEthernet";
import SettingsInputComponentIcon from "@mui/icons-material/SettingsInputComponent";
import {
  Accordion,
  AccordionDetails,
  AccordionSummary,
  Divider,
  Typography,
} from "@mui/material";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";

const categories = [
  {
    children: [
      {
        id: "Dashboard",
        icon: <DashboardIcon />,
        active: true,
      },

      {
        id: "Quản Lý Người Dùng",
        icon: <PeopleOutlineIcon />,
        child: [
          {
            id: "Danh Sách Người Dùng",
            icon: "",
          },
        ],
      },
      { id: "Quản Lý Phim", icon: <PublicIcon /> },
      { id: "Quản Lý Phòng Vé", icon: <SettingsEthernetIcon /> },
      {
        id: "Quản Lý Rạp",
        icon: <SettingsInputComponentIcon />,
      },
    ],
  },
];

const item = {
  py: "2px",
  px: 3,
  color: "rgba(255, 255, 255, 0.7)",
  "&:hover, &:focus": {
    bgcolor: "rgba(255, 255, 255, 0.08)",
  },
};

const itemCategory = {
  boxShadow: "0 -1px 0 rgb(255,255,255,0.1) inset",
  py: 1.5,
  px: 3,
};

export default function Navigator(props) {
  const { ...other } = props;

  const [isMenuOpen, setIsMenuOpen] = React.useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <Drawer variant="permanent" {...other}>
      <List disablePadding>
        <ListItem
          sx={{ ...item, ...itemCategory, fontSize: 22, color: "#fff" }}
        >
          <ListItemIcon>
            <HomeIcon />
          </ListItemIcon>
          <ListItemText>ADMIN MANAGER</ListItemText>
        </ListItem>

        {categories.map(({ id, children }) => (
          <Box key={id} sx={{ bgcolor: "#101F33" }}>
            <ListItem sx={{ py: 2, px: 3 }}>
              <ListItemText sx={{ color: "#fff" }}>{id}</ListItemText>
            </ListItem>

            {children.map(({ child, id: childId, icon }) => (
              <>
                <Accordion>
                  <AccordionSummary
                    expandIcon={<ExpandMoreIcon />}
                                id="panel1a-header"
                  >
                    <Typography>
                      <ListItemIcon>{icon}</ListItemIcon>
                      <ListItemText>{childId}</ListItemText>
                    </Typography>
                  </AccordionSummary>
                  <AccordionDetails>
                    <Typography>
                 
                    </Typography>
                  </AccordionDetails>
                </Accordion>

                {/* <ListItem disablePadding >
                  <ListItemButton
                    selected={active}
                    onClick={toggleMenu}
                    sx={item}
                  >
                    <ListItemIcon>{icon}</ListItemIcon>
                    <ListItemText>{childId}</ListItemText>
                    {isMenuOpen ? <ExpandLess /> : <ExpandMore />}
                  </ListItemButton>
                </ListItem> */}

                {/* {child?.map(({ id }) => (
                      <Collapse
                        in={isMenuOpen}
                        timeout="auto"
                        unmountOnExit
                        key={id}
                      >
                        <List component="div" disablePadding>
                          <ListItemButton sx={item}>
                            <ListItemText>{id}</ListItemText>
                          </ListItemButton>
                        </List>
                      </Collapse>
                    ))} */}
              </>
            ))}

            <Divider sx={{ mt: 2 }} />
          </Box>
        ))}
      </List>
    </Drawer>
  );
}
