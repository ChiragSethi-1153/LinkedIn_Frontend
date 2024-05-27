import * as React from "react";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import {
  Avatar,
  Box,
  Button,
  Divider,
  InputBase,
  Menu,
  MenuItem,
  Stack,
  Typography,
} from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";
import styles from "./Navbar.module.css";
import ArrowDropDownOutlinedIcon from "@mui/icons-material/ArrowDropDownOutlined";
import { ReactComponent as Icon } from "../../assets/icons-linkedin.svg";
import { ReactComponent as HomeIcon } from "../../assets/home-icon.svg";
import { ReactComponent as HomeIcon2 } from "../../assets/home-icon2.svg";
import { ReactComponent as NetworkIcon } from "../../assets/network-icons.svg";
import { ReactComponent as NetworkIcon2 } from "../../assets/network-icon2.svg";
import { ReactComponent as JobsIcon } from "../../assets/jobs-icon.svg";
import { ReactComponent as JobsIcon2 } from "../../assets/jobs-icon2.svg";
import { ReactComponent as MessagingIcon } from "../../assets/message-icon.svg";
import { ReactComponent as MessagingIcon2 } from "../../assets/messaging-icon2.svg";
import { ReactComponent as NotificationIcon } from "../../assets/notification-icon.svg";
import { ReactComponent as NotificationIcon2 } from "../../assets/notification-icon2.svg";
import { ReactComponent as BusinessIcon } from "../../assets/business-icon.svg";
import { useLocation, useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";

export default function Navbar() {



  // const links = ["/", "/mynetwork", "/jobs", "/messages", "/notifications"];
  const navigate = useNavigate();
  const user = useSelector((state) => state?.auth?.user)
  const [profileBtn, setProfileBtn] = React.useState(null);
  const open = Boolean(profileBtn);
  const handleClick = (event) => {
    setProfileBtn(event.currentTarget);
  };
  const handleClose = () => {
    setProfileBtn(null);
  };
  const handleLogout = async () => {
    await localStorage.removeItem('token')
    navigate('/login')
  }

  const handleChange = async (event, newValue) => {
    setValue(newValue);
    console.log(newValue)
    // navigate(links[newValue]);
  };
  const location = useLocation()
  var v;
  if (location.pathname === '/home') {
    v = 0
  }
  else if (location.pathname === '/mynetwork') {
    v = 1
  }
  else if (location.pathname === '/jobs') {
    v = 2
  }
  else if (location.pathname === '/messages') {
    v = 3
  }
  else if (location.pathname === '/notifications') {
    v = 4
  }

  const [value, setValue] = React.useState(v);

  if (location.pathname === "/register" || location.pathname === "/login") {
    return null
  }


  return (
    <Box className='home-nav' >
      <Stack className={styles.Navbar} direction={"row"} gap={8}>
        <Stack direction={"row"} alignItems={"center"}>
          <span onClick={() => { navigate('/'); setValue(0) }} style={{ cursor: 'pointer' }}>
            <Icon />
          </span>
          <InputBase
            placeholder="Search"
            className={styles.searchField}
            startAdornment={<SearchIcon sx={{ width: 19.5, p: 1 }} />}
            sx={{ width: { lg: "280px" } }}
          />
        </Stack>
        <Box display={"flex"} alignItems={"center"} gap={2}>

          <Tabs
            value={value}
            onChange={handleChange}
            TabIndicatorProps={{ sx: { backgroundColor: "black" } }}
            textColor={"secondary"}
          >
            <Tab
              icon={value === 0 ? <HomeIcon /> : <HomeIcon2 />}
              onClick={() => navigate('/home')}
              label="Home"
              className={styles.tabs}
              iconPosition={"top"}
              sx={{ ".MuiTab-iconWrapper": { mb: "1px" } }}
            />
            <Tab
              icon={value === 1 ? <NetworkIcon2 /> : <NetworkIcon />}
              label="My Network"
              onClick={() => navigate('/mynetwork')}
              className={styles.tabs}
              sx={{ ".MuiTab-iconWrapper": { mb: "1px" } }}
            />

            <Tab
              icon={value === 2 ? <JobsIcon2 /> : <JobsIcon />}
              label="Jobs"
              onClick={() => navigate('/jobs')}
              className={styles.tabs}
              sx={{ ".MuiTab-iconWrapper": { mb: "1px" } }}
            />
            <Tab
              icon={value === 3 ? <MessagingIcon2 /> : <MessagingIcon />}
              label="Messaging"

              onClick={() => navigate('/messages')}
              className={styles.tabs}
              sx={{ ".MuiTab-iconWrapper": { mb: "1px" } }}
            />
            <Tab
              icon={value === 4 ? <NotificationIcon2 /> : <NotificationIcon />}
              label="Notifications"
              onClick={() => navigate('/notifications')}
              className={styles.tabs}
              sx={{ ".MuiTab-iconWrapper": { mb: "1px" } }}
            />
          </Tabs>

          <Stack height={'100%'} justifyContent={'flex-end'} onClick={(e) => { handleClick(e); setValue(null) }} >
            <Avatar sx={{ width: "23px", height: "23px" }} />
            <Box display={"flex"} alignItems={'flex-end'} justifyContent={'center'} sx={{ cursor: 'pointer' }}  >
              <span className={styles.profileText}>Me
              </span>
              <ArrowDropDownOutlinedIcon sx={{ width: "20px", height: "15px" }} />
            </Box>
          </Stack>
          <Menu
          id="basic-menu"
          anchorEl={profileBtn}
          open={open}
          onClose={handleClose}
          MenuListProps={{
            'aria-labelledby': 'basic-button',
          }}
          className={styles.profileMenu}

        >
          <MenuItem onClick={handleClose} className={styles.menuProfile}>
            <Box className={styles.profileWrap}>
              <Avatar className={styles.menuAvatar}
                src={
                  user?.image
                    ? `${process.env.REACT_APP_IMG_BASE_URL}/${user.image}`
                    : "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRQbi0Cq6ANBTGJwu8uGYunx3XKWJJW38NECclo4Iidgg&s"
                }                ></Avatar>
              <Box className={styles.profileTextWrap}>
                <Typography className={styles.ProfileName}>{user?.name ? `${user?.first_name || ""} ${user.name || ""}` : "Linkedin User"}</Typography>
                <Typography className={styles.ProfileHead}>{user?.headline || ""}</Typography>
              </Box>
            </Box>
            <Box className={styles.profileMenuBtnWrap}>
              <Button className={styles.profileMenuBtn} onClick={() => { navigate('/profile') }} >View Profile</Button>
            </Box>
          </MenuItem>
          <MenuItem onClick={handleLogout} sx={{ margin: "4px 0px", padding: "4px 12px", color: "#00000099", fontSize: "14px" }}>Logout</MenuItem>
        </Menu>

          <Divider orientation="vertical" sx={{ height: '52px' }} />

          <Stack alignItems={'center'} >
            <BusinessIcon fill={onmouseover ? "#000" : '#676667'} style={{ cursor: 'pointer' }} />
            <Box display={"flex"} alignItems={'flex-end'} justifyContent={'center'}  >
              <span className={styles.profileText}>
                For Business
              </span>
              <ArrowDropDownOutlinedIcon sx={{ width: "20px", height: "15px" }} />
            </Box>
          </Stack>
        </Box>
      </Stack>
    </Box>
  );
}

