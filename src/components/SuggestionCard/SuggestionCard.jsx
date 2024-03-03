import {
  Avatar,
  Box,
  Button,
  Card,
  CardContent,
  Typography,
} from "@mui/material";
import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { sendRequest } from "../../redux/slice/connections/connectionAction";
import './SuggestionCard.css'
import AccessTimeRoundedIcon from '@mui/icons-material/AccessTimeRounded';

const SuggestionCard = ({ item }) => {
  const [toggle, setToggle] = useState(true);
  // const [status]
  const dispatch = useDispatch();

  const handleConnect = () => {
    dispatch(sendRequest(item._id));
    setToggle(false);
  };

  console.log(toggle);
  return (
    <Card className="suggestion-card">
      <CardContent className="suggestion-card-content">
        <Box className="suggestion-card-box">
          <Avatar className="card-profile-pic" 
          // sx={{ width: "80px", height: "80px" }}
          ></Avatar>
          <Typography className="card-name"
            sx={{ 
              fontSize: "18px",
              fontWeight: "500", 
              marginTop: "10px",
              "&:hover": {
                cursor: 'pointer',
                textDecoration: 'underline'
              }
              }}
          >
            {item.name ? item.name : "LinkedIn user"}
          </Typography>
          <Typography
          sx={{
            color: '#8c8d8c',
            fontSize: '16px'
          }}

          >{item.headline}</Typography>
        </Box>

        {toggle ? (
          <Button
            variant="outlined"
            className="connect-btn"
            sx={{
              textTransform: "none",
              borderRadius: "50px",
              width: "90%",
              boxSizing: 'border-box',
              color: '#176ec5',
              fontWeight: '600'

            }}
            onClick={() => handleConnect()}
          >
            Connect
          </Button>
        ) : (
          <Button
            variant="outlined"
            className="pending-btn"
            sx={{
              textTransform: "none",
              border: '1px solid #414140',
              borderRadius: "50px",
              width: "90%",
              color: "#414140",
              display: 'flex',
              alignItems: 'center',
              boxSizing: 'border-box'
            }}
          >
          <AccessTimeRoundedIcon sx={{color: 'black', width: '17px', marginRight: '3px'}} />
            Pending
          </Button>
        )}
      </CardContent>
    </Card>
  );
};

export default SuggestionCard;
