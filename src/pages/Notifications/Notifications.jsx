import { Avatar, Box, Button, Stack, Typography } from "@mui/material";
import React, { useEffect } from "react";
import Navbar from "../../components/Navbar/Navbar";
import { ReactComponent as OptionIcon } from "../../assets/optionIcon.svg";
import { useDispatch, useSelector } from "react-redux";
import { fetchNotifications } from "./../../redux/slice/notifications/notificationAction";
import { addNotifications } from "../../redux/slice/notifications/notificationSlice";




const Notifications = ({socket}) => {
  const dispatch = useDispatch();
  const user = useSelector((state) => state?.user?.content);
  console.log(user);

  useEffect(() => {
    dispatch(fetchNotifications(user._id));
  }, [dispatch]);

  useEffect(() => {
    socket.on(user._id, (content) => {
      console.log(content)
      dispatch(addNotifications(content))
    })
    return () => {
      socket.off(user._id)
    }
  })

  const notificationData = useSelector(
    (state) => state?.notifications?.content
  );
  const loading = useSelector((state) => state?.notifications?.isLoading);
  console.log(notificationData);
  return (
    <Box>
      

      <Stack
        flexDirection={"row"}
        justifyContent={"center"}
        gap={3}
        sx={{ marginTop: "20px" }}
      >
        <Box
          sx={{
            backgroundColor: "#fff",
            width: "227px",
            height: "110px",
            boxSizing: "border-box",
            border: "1px solid #d7d8d6",
            borderRadius: "10px",
            padding: "16px 16px",
          }}
        >
          <Typography sx={{ fontWeight: "600" }}>
            Manage your Notifications
          </Typography>
          <Typography
            sx={{
              fontWeight: "600",
              fontSize: "14px",
              color: "#3b7bcb",
              marginTop: "8px",
              "&:hover": {
                cursor: "pointer",
                textDecoration: "underline",
              },
            }}
          >
            View Settings
          </Typography>
        </Box>

        <Stack gap={1}>
          <Box
            sx={{
              backgroundColor: "#fff",
              width: "557px",
              height: "66px",
              boxSizing: "border-box",
              border: "1px solid #d7d8d6",
              borderRadius: "10px",
              padding: "16px 16px",
            }}
          >
            <Stack flexDirection={"row"} gap={1} sx={{ width: "100%" }}>
              <Button
                variant="contained"
                sx={{
                  boxShadow: "none",
                  padding: "0",
                  borderRadius: "50px",
                  width: "43px",
                  minWidth: "0",
                  backgroundColor: "#02744e",
                }}
              >
                All
              </Button>
              <Button
                variant="contained"
                sx={{
                  boxShadow: "none",
                  padding: "0",
                  borderRadius: "50px",
                  width: "90px",
                  minWidth: "0",
                  boxSizing: "border-box",
                  backgroundColor: "#02744e",
                }}
              >
                My Posts
              </Button>
              <Button
                variant="contained"
                sx={{
                  boxShadow: "none",
                  padding: "0",
                  borderRadius: "50px",
                  width: "90px",
                  minWidth: "0",
                  boxSizing: "border-box",
                  backgroundColor: "#02744e",
                }}
              >
                Mentions
              </Button>
            </Stack>
          </Box>
          <Stack
            sx={{
              backgroundColor: "#fff",
              width: "557px",
              height: "fit-content",
              boxSizing: "border-box",
              border: "1px solid #d7d8d6",
              borderRadius: "10px",
              padding: "16px 16px",
            }}
          >
            {loading && <>Loading...</>}
            {notificationData &&
              notificationData.length > 0 &&
              notificationData.map ?
              notificationData.map((item) => {
                return (
                  <Stack
                    flexDirection={"row"}
                    alignItems={"center"}
                    justifyContent={"space-between"}
                    sx={{marginBottom: '10px'}}
                    key={item._id}
                  >
                    <Stack flexDirection={"row"}>
                      <Avatar></Avatar>
                      <Typography sx={{ marginLeft: "10px" }}>
                        {item.content}
                      </Typography>
                    </Stack>
                    <OptionIcon />
                  </Stack>
                );
              })
              :
              (<>No New Notifications</>)
              
              }
          </Stack>
        </Stack>
      </Stack>
    </Box>
  );
};

export default Notifications;
