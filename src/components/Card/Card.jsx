import React, { useEffect, useState } from "react";
import InputEmoji from "react-input-emoji";
import "./Card.css";
import styles from './Card.module.css'
import { ReactionBarSelector } from '@charkour/react-reactions';
import {
  Avatar,
  Box,
  Button,
  ButtonGroup,
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
import { Unstable_Popup as BasePopup } from '@mui/base/Unstable_Popup';
import {ReactComponent as Like} from '../../assets/Like.svg'
import {ReactComponent as Comment} from '../../assets/Comment.svg'
import {ReactComponent as Repost} from '../../assets/Repost.svg'
import {ReactComponent as Share} from '../../assets/Share.svg'
import {ReactComponent as Globe} from '../../assets/globe.svg' 
import {ReactComponent as Plus} from '../../assets/Plus.svg' 
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

const cal_days = (date) => {
  const date1 = new Date(date);
  const date2 =  Date.now();
  const diffTime = Math.abs(date2 - date1);
  const days = Math.ceil(diffTime / (1000 * 60 * 60 * 24)); 
  if(diffTime<(1000 * 60 * 60 * 24)) return "Today";
  else if(days<2) return "Yesterday";
  else if(days<7) return `${days}d`;
  else if(days<30) return `${Math.floor(days/7)}w`;
  else if(days<365) return `${Math.floor(days/30)}m`;
  else return `${Math.floor(days/365)}y`;
}


const PostCard = ({post}) => {
  console.log(post)
  const dispatch = useDispatch();
  const [expanded, setExpanded] = React.useState(false);
  const [inputs, setInputs] = useState({ body: "", postId: post._id });
  const [reactionBar, setReactionBar] = useState(false);
  const [anchor, setAnchor] = useState(null);
  const [isHovering, setIsHovering] = useState(false);
  const [showComments, setShowComments] = useState(false);
  const reactionLogo = {
    Like: "👍",
    Celebrate: "👏",
    Support: "🫰",
    Love: "❤️",
    Insightful: "💡",
    Funny: "😄",
  }
  useEffect(() => {
    dispatch(fetchPostReactions(post._id));
  }, [dispatch, post._id]);


  const handlereaction = (newReaction) => {
    if (newReaction !== reaction[user._id]?.reaction || reaction[user._id] === undefined) {
      dispatch(addPostReaction({ postId: post._id, newReaction }));
    }
    else dispatch(addPostReaction({ postId: post._id, newReaction: '' }));
  };
  
  const reactions = useSelector((state) => state?.reactions?.content[post._id]);
  
  const currentReactionLength = reactions?.currReaction.length
  const currentReaction = reactions?.currReaction;
  

  const [currentEmoji, setCurrentEmoji] = useState('')

  const handleMouseOver = () => {
    setIsHovering(true);
  };

  const handleMouseOut = () => {
    setIsHovering(false);
  };

  const handleExpandClick = () => {
    setExpanded(!expanded);
    dispatch(fetchComments(post._id));
  };
  const handleComment = async (e) => {
    // e.preventDault()
    await dispatch(createComment(inputs));
    setInputs(inputs => inputs.body = '');
  };

  const handleReaction = () => {
    dispatch(deleteReaction(post._id))
  }
  const id = Boolean(anchor) ? 'simple-popper' : undefined;
  const comments = useSelector((state) => state.comment.content[post._id]);
  const loading = useSelector((state) => state.comment.isLoading);
  const error = useSelector((state) => state.comment.error);


  
  if (error) {
    return error;
  }

  return (
    // <Box>
    //   <Card sx={{ width: "540px", padding: "10px" }}>
    //     <CardHeader
    //       avatar={<Avatar sx={{}} aria-label="recipe"></Avatar>}
    //       action={
    //         <IconButton aria-label="settings">
    //           <MoreHorizIcon />
    //         </IconButton>
    //       }
    //       title={user?.name ? user?.name : "LinkedIn User"}
    //       subheader={user?.headline}
    //     />
    //     <Divider />
    //     <CardContent>
    //       <Stack>
    //         <Typography>
    //           <b>Title</b>: {title} <br />
    //           <b>Body</b>: {body}
    //         </Typography>
    //         {images?.map((i) => (
    //           <img src={`${process.env.REACT_APP_SERVER}/${i}`} alt="" />
    //         ))}
    //         <Typography>{reactions?.totalReactions}</Typography>
    //       </Stack>
    //     </CardContent>
    //     <Divider sx={{ marginBottom: "5px" }} />
    //     <CardActions
    //       className="post-action"
    //       sx={{ display: "flex", justifyContent: "space-around" }}
    //     >
    //       <IconButton
    //         aria-label="add to favorites"
    //         sx={{
    //           borderRadius: "0",
    //           width: "100px",
    //         }}
    //         onMouseOver={handleMouseOver}
    //         onMouseOut={handleMouseOut}
    //       >
    //         {
    //           currentReaction && currentReactionLength !==0 ? (
    //           currentReaction?.map((i) => {
    //             return (
    //               <Button 
    //               key={i._id} 
    //               sx={{  fontWeight: "500", textTransform: 'none', width: '100%' }}
    //               onClick={handleReaction}
    //               >
    //                 {console.log(i)}
    //                 {i?.emoji}
    //               </Button>
    //             );
    //           })
    //         ) : (
    //           <>
    //           <Like />
    //           <Typography sx={{ marginLeft: "5px", fontWeight: "500" }}>
    //            Like
    //           </Typography>
    //           </>
              
    //         )}

    //         <Box sx={{ display: isHovering ? "block" : "none" }}>
    //           <Reactions
    //             handleMouseOver={handleMouseOver}
    //             handleMouseOut={handleMouseOut}
    //             postId={postId}
    //           />
    //         </Box>
    //       </IconButton>
    //       <IconButton aria-label="add to favorites">
    //         <ExpandMore
    //           expand={expanded}
    //           onClick={handleExpandClick}
    //           aria-expanded={expanded}
    //           aria-label="show more"
    //         >
    //           <Comment />
    //           <Typography sx={{ marginLeft: "5px", fontWeight: "500" }}>
    //             Comment
    //           </Typography>
    //         </ExpandMore>
    //       </IconButton>
    //       <IconButton aria-label="add to favorites">
    //         <Repost />
    //         <Typography sx={{ marginLeft: "5px", fontWeight: "500" }}>
    //           Repost
    //         </Typography>
    //       </IconButton>
    //       <IconButton aria-label="add to favorites">
    //         <Share />
    //         <Typography sx={{ marginLeft: "5px", fontWeight: "500" }}>
    //           Send
    //         </Typography>
    //       </IconButton>
    //     </CardActions>
    //     <Collapse in={expanded} timeout="auto" unmountOnExit>
    //       <CardContent
    //         sx={{
    //           display: "flex",
    //           alignItems: "flex-start",
    //           justifyContent: "space-around",
    //         }}
    //       >
    //         <Avatar aria-label="recipe"></Avatar>

    //         <Stack sx={{ width: "100%" }}>
    //           <Box
    //             sx={{
    //               border: "1px solid #d7d8d6",
    //               borderRadius: "50px",
    //               marginLeft: "3px",
    //               width: "94%",
    //               height: "45px",
    //               display: "flex",
    //               alignItems: "center",
    //               "&:placeholder": {
    //                 fontFamily:
    //                   '-apple-system, system-ui, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", "Fira Sans", Ubuntu, Oxygen, "Oxygen Sans", Cantarell, "Droid Sans", "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Lucida Grande", Helvetica, Arial, sans-serif',
    //                 fontWeight: "500",
    //                 color: "rgb(0,0,0,0.6)",
    //               },
    //             }}
    //           >
    //             <InputEmoji
    //               sx={{
    //                 border: "none",
    //                 width: "100%",
    //                 height: "100%",
    //                 display: "flex",
    //                 alignItems: "center",
    //                 "&:placeholder": {
    //                   fontFamily:
    //                     '-apple-system, system-ui, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", "Fira Sans", Ubuntu, Oxygen, "Oxygen Sans", Cantarell, "Droid Sans", "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Lucida Grande", Helvetica, Arial, sans-serif',
    //                   fontWeight: "500",
    //                   color: "rgb(0,0,0,0.6)",
    //                 },
    //               }}
    //               theme="light"
    //               placeholder="Add a comment..."
                  
    //               value={inputs.body}
    //               onChange={(e) => {
    //                 setInputs({ ...inputs, body: e });
    //               }}
    //             />
    //           </Box>


    //               {
    //                 inputs.body !== "" ? 
    //             <Button
    //             variant="contained"
    //             onClick={(e) => {
    //               handleComment(e);
    //             }}
    //             sx={{
    //               width: "30px",
    //               boxShadow: "none",
    //               marginTop: "5px",
    //               marginLeft: "20px",
    //               display:"block"
    //             }}
    //           >
    //             Post
    //           </Button>
                
    //           : <>
    //             </>
                
    //             }
              
    //         </Stack>
    //       </CardContent>

    //       <CardContent>
    //         <Stack flexDirection={"row"} sx={{ width: "100%" }}>
    //           <Box>
    //           {loading && <>Loading...</>}
    //             {comments?.map((items) => (
    //               <Box
    //                 sx={{
    //                   display: "flex",
    //                   width: "500px",
    //                 }}
    //               >
    //                 <Avatar aria-label="recipe"></Avatar>
    //                 <Box
    //                   sx={{
    //                     width: "100%",
    //                     backgroundColor: "#f3f2f3",
    //                     padding: "8px",
    //                     marginLeft: "10px",
    //                     marginBottom: "15px",
    //                     borderRadius: "0px 10px 10px 10px",
    //                   }}
    //                 >
    //                   <Typography
    //                     sx={{
    //                       fontWeight: "500",
    //                       fontSize: "18px",
    //                     }}
    //                   >
    //                     {items?.userId?.name
    //                       ? items?.userId?.name
    //                       : "LinkedIn User"}
    //                   </Typography>
    //                   <Typography
    //                     sx={{
    //                       fontWeight: "300",
    //                       fontSize: "14px",
    //                     }}
    //                   >
    //                     {items?.userId?.headline
    //                       ? items?.userId?.headline
    //                       : "nothing much"}
    //                   </Typography>
    //                   <Typography
    //                     sx={{
    //                       marginTop: "10px",
    //                     }}
    //                   >
    //                     {items?.body}
    //                   </Typography>
    //                 </Box>
    //               </Box>
    //             ))}
    //           </Box>
    //         </Stack>
    //       </CardContent>
    //     </Collapse>
    //   </Card>
    // </Box>
    <Card className={styles.main}>
      <CardHeader
        className={styles.cardHeader}
        action={
          <Box className={styles.postHeaderWrap}>
            <Box className={styles.subpostHeader}>
              <Avatar
                className={styles.postHeaderAvatar}
                // onClick={navigateToProfile}
                // src={post?.user_id?.image ?
                //   `${process.env.REACT_APP_IMG_BASE_URL}/${post?.user_id?.image}` :
                //   "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRQbi0Cq6ANBTGJwu8uGYunx3XKWJJW38NECclo4Iidgg&s"
                // }
                // alt={post?.user_id?.first_name ||"avatar"}
              />
              <Box className={styles.postHeaderUser}>
                <Typography 
                // onClick={navigateToProfile}
                >
                  {post?.user?.name ? `${post?.user?.name}` : "LinkedIn User"}
                </Typography>
                <Typography>{post?.user?.headline}</Typography>
                <Typography className={styles.timeText}>
                  {cal_days(post.createdAt)} •&nbsp;<Globe />
                </Typography>
              </Box>
              <Button className={styles.followBtn}>
                <Plus color="#0a66c2"/> Follow
              </Button>
            </Box>
          </Box>
        }
      />
      <CardContent className={styles.cardContent}>
        <Box className={styles.postBody}>
          <Typography className={styles.postTitle}>{post?.title}</Typography>
          <pre>{post?.body}</pre>
          {post?.images?.length && (
            <img
              src={`${process.env.REACT_APP_SERVER_URL}/${post.images[0]}`}
              alt="postImg"
              className={styles.postImage}
            />
          )}
        </Box>
        <Box className={styles.postLikeCount}>
          <Typography className={styles.likeCount}>
            <span className={styles.emojis}>👍</span>
            <span className={styles.emojis}>😂</span>
            <span className={styles.emojis}>❤️</span>
            <span className={styles.count}>
              {reactions ? Object.keys(reactions).length : 0}
            </span>
          </Typography>
        </Box>
        <Divider />
      </CardContent>

      <BasePopup
        className={styles.reactionSelector}
        open={reactionBar}
        anchor={anchor}
        placement={"top"}
        offset={-6}
        id={id}
        onMouseOver={() => setReactionBar(true)}
        onMouseOut={() => { setReactionBar(false) }}
      >
        <ReactionBarSelector
          className={styles.reactionSelector}
          onSelect={(reaction) => handlereaction(reaction)}
          reactions={[{ label: "Like", node: <div>👍</div>, key: "Like" }, { label: "Celebrate", node: <div>👏</div>, key: "Celebrate" }, { label: "Support", node: <div>🫰</div>, key: "Support" }, { label: "Love", node: <div>❤️</div>, key: "Love" }, { label: "Insightful", node: <div>💡</div>, key: "Insightful" }, { label: "Funny", node: <div>😄</div>, key: "Funny" }]}
        />
      </BasePopup>

      <CardActions className={styles.cardActions}>
        <ButtonGroup
          variant="text"
          className={styles.postButtonGroup}
          sx={{ "--ButtonGroup-separatorColor": `none !important` }}
        >
          <Button
            className={styles.postButton}
            onClick={() => handlereaction(reaction[user._id]?.reaction||"Like")}
            onMouseOver={() => setReactionBar(true)}
            onMouseOut={() => setReactionBar(false)}
            ref={setAnchor}
            style={{ color: reactions[user._id]?.reaction === "Like" ? "blue !important" : "black" }}
          >
            {reactionLogo[reactions[user._id]?.reaction] ||<ThumbUpOutlinedIcon />}&nbsp; {reaction[user._id]?.reaction || "Like"}
          </Button>
          <Button
            className={styles.postButton}
            onClick={() => setShowComments(!showComments)}
          >
            <Comment />&nbsp;Comment
          </Button>
          <Button
            className={styles.postButton}
          >
            <Repost />&nbsp;Repost
          </Button>
          <Button
            className={styles.postButton}
          >
            <Share />&nbsp;Share
          </Button>
        </ButtonGroup>
      </CardActions>
      <Collapse in={showComments} timeout="auto" unmountOnExit>
        <Comments postId={post._id} image={user.image}/>
      </Collapse>
    </Card>
  );
};

export default PostCard;
