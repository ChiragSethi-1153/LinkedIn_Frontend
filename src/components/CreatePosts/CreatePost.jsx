import {
  Avatar,
  Box,
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle,
  Divider,
  Fab,
  FormControl,
  IconButton,
  Input,
  InputBase,
  Stack,
  Typography,
  styled,
} from "@mui/material";
import React, { useState } from "react";
import CloseIcon from "@mui/icons-material/Close";
import { ThreeCircles } from 'react-loader-spinner';
import "./CreatePost.css";
import styles from './CreatePost.module.css'
import { useDispatch, useSelector } from "react-redux";
import { createPost } from "../../redux/slice/createPost/createPostAction";
import PhotoSizeSelectActualRoundedIcon from '@mui/icons-material/PhotoSizeSelectActualRounded';
import AutoAwesomeIcon from '@mui/icons-material/AutoAwesome';
import CalendarMonthRoundedIcon from '@mui/icons-material/CalendarMonthRounded';

import { ReactComponent as MediaIcon } from "../../assets/media-icon.svg";

const CreatePost = ({ open, setOpen}) => {
  const [inputs, setInputs] = useState({ title: "", body: "" });
  const [images, setImages] = useState([]);
  const dispatch = useDispatch();
  const user = useSelector((state) => state.user.content)

  const VisuallyHiddenInput = styled("input")({
    clip: "rect(0 0 0 0)",
    clipPath: "inset(50%)",
    height: 1,
    overflow: "hidden",
    position: "absolute",
    bottom: 0,
    left: 0,
    whiteSpace: "nowrap",
    width: 1,
  });
  const [isLoading, setIsLoading] = useState(false)
  const handleImage = (e) => {
    setImages(e.target.files);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const formData = new FormData();
      formData.append("title", inputs.title);
      formData.append("body", inputs.body);
      formData.append("images", images);
      for (let i = 0; i < images.length; i++) {
        formData.append("images", images[i]);
      }
      dispatch(createPost(formData));
      setOpen(false)
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <React.Fragment>
      <Dialog
        onClose={() => setOpen(false)}
        aria-labelledby="customized-dialog-title"
        open={open}
        className={`dialogbox ${styles.dialog}`}
      >
        {isLoading &&
          <Box className={styles.loader}>
            <ThreeCircles
              visible={true}
              height="100"
              width="100"
              color="#4fa94d"
              ariaLabel="three-circles-loading"
              wrapperClass={styles.loaderWrapper}
            />
          </Box>}
        <DialogTitle className={styles.dialogTitle} >
          <Box className={styles.dialogHeader}>
            <Avatar className={styles.avatar} 
            // src={user?.image ?
            //   `${process.env.REACT_APP_IMG_BASE_URL}/${user.image}` :
            //   "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRQbi0Cq6ANBTGJwu8uGYunx3XKWJJW38NECclo4Iidgg&s"
            // } 
            />
            <Box className={styles.dialogHeaderText}>
              <Typography variant="h6">{user.name}</Typography>
              <Typography>Post to Anyone</Typography>
            </Box>
          </Box>
        </DialogTitle>
        <IconButton
          aria-label="close"
          onClick={() => setOpen(false)}
          sx={{
            position: 'absolute',
            right: 8,
            top: 8,
            color: (theme) => theme.palette.grey[500],
          }}
        >
          <CloseIcon />
        </IconButton>
        <DialogContent sx={{ padding: 2 }} className={styles.dialogContent}>
          <InputBase
            disabled={isLoading}
            className={styles.title}
            placeholder="Title of Your Post"
            value={inputs.title}
            onChange={(e) => setInputs({ ...inputs, title: e.target.value })}
          />
          <InputBase
            disabled={isLoading}
            className={styles.content}
            multiline
            placeholder="What do you want to talk about?"
            value={inputs.body}
            onChange={(e) => setInputs({ ...inputs, body: e.target.value })}
          />

          <Box className={styles.createPostBtns}>
            <Button className={`${styles.aibtn} ${styles.contentImgBtn}`} > <AutoAwesomeIcon sx={{ color: '#c37d16', height: "16px", paddingLeft: "12px" }} />Rewrite with AI </Button>
            <input type="file" id="file-picker" multiple onChange={(e) => {handleImage(e);}} hidden />
            <Button disabled={isLoading} onClick={(e) => { e.preventDefault(); document.getElementById("file-picker").click() }} className={styles.contentImgBtn}><PhotoSizeSelectActualRoundedIcon sx={{ color: '#00000099', height: "20px" }} />&nbsp; </Button>
            <Button className={styles.contentImgBtn}> <CalendarMonthRoundedIcon sx={{ color: '#00000099', height: "20px" }} />&nbsp; </Button>
          </Box>
        </DialogContent>
        <Divider style={{ margin: "0px !important" }} />
        <DialogActions sx={{ padding: "12px 24px 12px 16px" }}>
          <Fab
            className={styles.postBtn}
            variant='extended'
            // disabled={((data.content && file && data.title) ? false : true) || isLoading}
            onClick={handleSubmit}
          >
            Post
          </Fab>
        </DialogActions>
      </Dialog>
    </React.Fragment>
  );
};

export default CreatePost;
