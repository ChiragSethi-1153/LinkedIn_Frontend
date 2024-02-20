import {
  Avatar,
  Box,
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle,
  Divider,
  FormControl,
  IconButton,
  Input,
  Stack,
  Typography,
  styled,
} from "@mui/material";
import React, { useState } from "react";
import CloseIcon from "@mui/icons-material/Close";
import "./CreatePost.css";
import { useDispatch } from "react-redux";
import { createPost } from "../../redux/slice/createPost/createPostAction";
import { ReactComponent as MediaIcon } from "../../assets/media-icon.svg";

const CreatePost = ({ hide }, open) => {
  const [inputs, setInputs] = useState({ title: "", body: "" });
  const [images, setImages] = useState(null);
  const dispatch = useDispatch();

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
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <Box>
      <Box
        className="modal-wrapper"
        onClick={() => hide()}
        style={{
          position: " fixed",
          left: "0",
          right: "0",
          bottom: "0",
          top: "0",
          backgroundColor: "rgba(230, 226, 226, 0.804)",
        }}
      ></Box>
      <Box className="create-post-box">
        <DialogTitle sx={{ m: 0, p: 2, display: "flex" }}>
          <Avatar></Avatar>
          <Stack>
            <Typography>Name</Typography>
            <Typography>Condition</Typography>
          </Stack>
        </DialogTitle>
        <IconButton
          aria-label="close"
          onClick={hide}
          sx={{
            position: "absolute",
            right: 8,
            top: 8,
            "&:hover": {},
          }}
        >
          <CloseIcon />
        </IconButton>

        <DialogContent sx={{ width: "80%" }}>
          <FormControl sx={{ width: "100%" }} enctype="multipart/form-data">
            <Input
              placeholder="Title of Your Post"
              value={inputs.title}
              onChange={(e) => setInputs({ ...inputs, title: e.target.value })}
              sx={{ width: "100%" }}
            />
            <Input
              placeholder="What do you want to talk about?"
              value={inputs.body}
              onChange={(e) => setInputs({ ...inputs, body: e.target.value })}
            />
            <Button
              component="label"
              role={undefined}
              variant="standard"
              tabIndex={-1}
              sx={{ width: "10px" }}
              startIcon={<MediaIcon />}
            >
              <VisuallyHiddenInput
                type="file"
                name="images"
                multiple
                onChange={(e) => {
                  handleImage(e);
                }}
              />
            </Button>
          </FormControl>
        </DialogContent>
        <Divider />
        <DialogActions>
          <Button autoFocus type="submit" onClick={(e) => handleSubmit(e)}>
            Post
          </Button>
        </DialogActions>
      </Box>
    </Box>
  );
};

export default CreatePost;
