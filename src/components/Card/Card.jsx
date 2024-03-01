import React, { useEffect, useState } from "react";
import InputEmoji from "react-input-emoji";
import "./Card.css";
import {
  Avatar,
  Box,
  Button,
  Card,
  CardActions,
  CardContent,
  CardHeader,
  Collapse,
  Divider,
  IconButton,
  Stack,
  Typography,
  styled,
} from "@mui/material";
import MoreHorizIcon from "@mui/icons-material/MoreHoriz";
import CommentIcon from "@mui/icons-material/Comment";
import RepeatIcon from "@mui/icons-material/Repeat";
import SendIcon from "@mui/icons-material/Send";
import ThumbUpOutlinedIcon from "@mui/icons-material/ThumbUpOutlined";
import { useDispatch, useSelector } from "react-redux";
import { fetchComments } from "../../redux/slice/comment/commentAction";
import { createComment } from "./../../redux/slice/comment/commentAction";
import { Reactions } from "../Reactions/Reactions";
import { deleteReaction, fetchPostReactions } from "../../redux/slice/reactions/reactionAction";

const ExpandMore = styled((props) => {
  const { expand, ...other } = props;
  return <IconButton {...other} />;
})(({ theme, expand }) => ({
  marginLeft: "auto",
  transition: theme.transitions.create("transform", {
    duration: theme.transitions.duration.shortest,
  }),
}));

const PostCard = ({ title, body, images, user, postId }) => {
  const dispatch = useDispatch();
  const [expanded, setExpanded] = React.useState(false);
  const [inputs, setInputs] = useState({ body: "", postId: postId });


  const [isHovering, setIsHovering] = useState(false);

  useEffect(() => {
    dispatch(fetchPostReactions(postId));
  }, [dispatch, postId]);

  const reactions = useSelector((state) => state?.reactions?.content[postId]);
  console.log(reactions);
  const currentReactionLength = reactions?.currReaction.length
  const currentReaction = reactions?.currReaction;
  console.log("asas",currentReaction)

  const [currentEmoji, setCurrentEmoji] = useState('')

  const handleMouseOver = () => {
    setIsHovering(true);
  };

  const handleMouseOut = () => {
    setIsHovering(false);
  };

  const handleExpandClick = () => {
    setExpanded(!expanded);
    console.log(postId);
    dispatch(fetchComments(postId));
  };
  const handleComment = async (e) => {
    // e.preventDault()
    await dispatch(createComment(inputs));
    setInputs(inputs => inputs.body = '');
  };

  const handleReaction = () => {
    dispatch(deleteReaction(postId))
  }

  const comments = useSelector((state) => state.comment.content[postId]);
  const loading = useSelector((state) => state.comment.isLoading);
  const error = useSelector((state) => state.comment.error);
  // console.log(comments)

  
  if (error) {
    return error;
  }

  return (
    <Box>
      <Card sx={{ width: "540px", padding: "10px" }}>
        <CardHeader
          avatar={<Avatar sx={{}} aria-label="recipe"></Avatar>}
          action={
            <IconButton aria-label="settings">
              <MoreHorizIcon />
            </IconButton>
          }
          title={user?.name ? user?.name : "LinkedIn User"}
          subheader={user?.headline}
        />
        <Divider />
        <CardContent>
          <Stack>
            <Typography>
              <b>Title</b>: {title} <br />
              <b>Body</b>: {body}
            </Typography>
            {images?.map((i) => (
              <img src={`${process.env.REACT_APP_SERVER}/${i}`} alt="" />
            ))}
            <Typography>{reactions?.totalReactions}</Typography>
          </Stack>
        </CardContent>
        <Divider sx={{ marginBottom: "5px" }} />
        <CardActions
          className="post-action"
          sx={{ display: "flex", justifyContent: "space-around" }}
        >
          <IconButton
            aria-label="add to favorites"
            sx={{
              borderRadius: "0",
              width: "100px",
            }}
            onMouseOver={handleMouseOver}
            onMouseOut={handleMouseOut}
          >
            {
              currentReaction && currentReactionLength !==0 ? (
              currentReaction?.map((i) => {
                return (
                  <Button 
                  key={i._id} 
                  sx={{  fontWeight: "500", textTransform: 'none', width: '100%' }}
                  onClick={handleReaction}
                  >
                    {console.log(i)}
                    {i?.emoji}
                  </Button>
                );
              })
            ) : (
              <>
              <ThumbUpOutlinedIcon />
              <Typography sx={{ marginLeft: "5px", fontWeight: "500" }}>
               Like
              </Typography>
              </>
              
            )}

            <Box sx={{ display: isHovering ? "block" : "none" }}>
              <Reactions
                handleMouseOver={handleMouseOver}
                handleMouseOut={handleMouseOut}
                postId={postId}
              />
            </Box>
          </IconButton>
          <IconButton aria-label="add to favorites">
            <ExpandMore
              expand={expanded}
              onClick={handleExpandClick}
              aria-expanded={expanded}
              aria-label="show more"
            >
              <CommentIcon />
              <Typography sx={{ marginLeft: "5px", fontWeight: "500" }}>
                Comment
              </Typography>
            </ExpandMore>
          </IconButton>
          <IconButton aria-label="add to favorites">
            <RepeatIcon />
            <Typography sx={{ marginLeft: "5px", fontWeight: "500" }}>
              Repost
            </Typography>
          </IconButton>
          <IconButton aria-label="add to favorites">
            <SendIcon />
            <Typography sx={{ marginLeft: "5px", fontWeight: "500" }}>
              Send
            </Typography>
          </IconButton>
        </CardActions>
        <Collapse in={expanded} timeout="auto" unmountOnExit>
          <CardContent
            sx={{
              display: "flex",
              alignItems: "flex-start",
              justifyContent: "space-around",
            }}
          >
            <Avatar aria-label="recipe"></Avatar>

            <Stack sx={{ width: "100%" }}>
              <Box
                sx={{
                  border: "1px solid #d7d8d6",
                  borderRadius: "50px",
                  marginLeft: "3px",
                  width: "94%",
                  height: "45px",
                  display: "flex",
                  alignItems: "center",
                  "&:placeholder": {
                    fontFamily:
                      '-apple-system, system-ui, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", "Fira Sans", Ubuntu, Oxygen, "Oxygen Sans", Cantarell, "Droid Sans", "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Lucida Grande", Helvetica, Arial, sans-serif',
                    fontWeight: "500",
                    color: "rgb(0,0,0,0.6)",
                  },
                }}
              >
                <InputEmoji
                  sx={{
                    border: "none",
                    width: "100%",
                    height: "100%",
                    display: "flex",
                    alignItems: "center",
                    "&:placeholder": {
                      fontFamily:
                        '-apple-system, system-ui, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", "Fira Sans", Ubuntu, Oxygen, "Oxygen Sans", Cantarell, "Droid Sans", "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Lucida Grande", Helvetica, Arial, sans-serif',
                      fontWeight: "500",
                      color: "rgb(0,0,0,0.6)",
                    },
                  }}
                  theme="light"
                  placeholder="Add a comment..."
                  
                  value={inputs.body}
                  onChange={(e) => {
                    setInputs({ ...inputs, body: e });
                  }}
                />
              </Box>


                  {
                    inputs.body !== "" ? 
                <Button
                variant="contained"
                onClick={(e) => {
                  handleComment(e);
                }}
                sx={{
                  width: "30px",
                  boxShadow: "none",
                  marginTop: "5px",
                  marginLeft: "20px",
                  display:"block"
                }}
              >
                Post
              </Button>
                
              : <>
                </>
                
                }
              
            </Stack>
          </CardContent>

          <CardContent>
            <Stack flexDirection={"row"} sx={{ width: "100%" }}>
              <Box>
                {comments?.map((items) => (
                  <Box
                    sx={{
                      display: "flex",
                      width: "500px",
                    }}
                  >
                    <Avatar aria-label="recipe"></Avatar>
                    <Box
                      sx={{
                        width: "100%",
                        backgroundColor: "#f3f2f3",
                        padding: "8px",
                        marginLeft: "10px",
                        marginBottom: "15px",
                        borderRadius: "0px 10px 10px 10px",
                      }}
                    >
                      <Typography
                        sx={{
                          fontWeight: "500",
                          fontSize: "18px",
                        }}
                      >
                        {items?.userId?.name
                          ? items?.userId?.name
                          : "LinkedIn User"}
                      </Typography>
                      <Typography
                        sx={{
                          fontWeight: "300",
                          fontSize: "14px",
                        }}
                      >
                        {items?.userId?.headline
                          ? items?.userId?.headline
                          : "nothing much"}
                      </Typography>
                      <Typography
                        sx={{
                          marginTop: "10px",
                        }}
                      >
                        {items?.body}
                      </Typography>
                    </Box>
                  </Box>
                ))}
              </Box>
            </Stack>
          </CardContent>
        </Collapse>
      </Card>
    </Box>
  );
};

export default PostCard;
