import React, { useEffect, useState } from "react";
import EmojiPicker from 'emoji-picker-react';
import './Card.css'
import { Avatar, Box, Button, Card, CardActions, CardContent, CardHeader, Collapse, Divider, IconButton, InputBase, Stack, TextField, Typography, styled } from "@mui/material";
import MoreHorizIcon from '@mui/icons-material/MoreHoriz';
import CommentIcon from '@mui/icons-material/Comment';
import RepeatIcon from '@mui/icons-material/Repeat';
import SendIcon from '@mui/icons-material/Send';
import ThumbUpOutlinedIcon from '@mui/icons-material/ThumbUpOutlined';
import { useDispatch, useSelector } from "react-redux";
import { fetchComments } from "../../redux/slice/comment/commentAction";
import { createComment } from "./../../redux/slice/comment/commentAction";

const ExpandMore = styled((props) => {
  const { expand, ...other } = props;
  return <IconButton {...other} />;
})(({ theme, expand }) => ({

  marginLeft: 'auto',
  transition: theme.transitions.create('transform', {
    duration: theme.transitions.duration.shortest,
  }),
}));




const PostCard = ({ title, body, images, user, postId }) => {

  const dispatch = useDispatch()
  // console.log(postId)
  const [expanded, setExpanded] = React.useState(false);
  const [inputs, setInputs] = useState({body: '', postId: postId})
  
  const handleExpandClick = () => {
    setExpanded(!expanded);
    console.log(postId)
    dispatch(fetchComments(postId))
  };
const handleComment = (e) => {
    // e.preventDault()
    dispatch(createComment(inputs))
    setInputs({...inputs, body: ''})
}


  const comments = useSelector((state) => state.comment.content[postId])
  // const loading = useSelector((state) => state.getComment)
  // const error = useSelector((state) => state.getComment)
  console.log(comments)



  // if (loading) {
  //   return "Loading..."
  // }
  // if (error) {
  //   return error
  // }



  return (
    <Box>
      <Card sx={{ width: '540px', padding: '10px' }}>

        <CardHeader
          avatar={
            <Avatar sx={{}} aria-label="recipe">
              
            </Avatar>
          }
          action={
            <IconButton aria-label="settings">
              <MoreHorizIcon />
            </IconButton>
          }

          title={user?.name}
          subheader="createdAt"
        />
        <Divider />
        <CardContent>

          <Typography variant="body2" color="text.secondary">
            <b>Title</b>: {title} <br />
            <b>Body</b>: {body}
            {
              images?.map((i) =>
                <img src={`${process.env.REACT_APP_SERVER}/${i}`} alt=""/>
              )
            }
          </Typography>
        </CardContent>
        <Divider sx={{ marginBottom: "5px" }} />
        <CardActions className='post-action' disableSpacing>
          <IconButton aria-label="add to favorites">
            <ThumbUpOutlinedIcon />
            <Typography variant="h6">Like</Typography>
          </IconButton>
          <IconButton aria-label="add to favorites">
            <ExpandMore
              expand={expanded}
              onClick={handleExpandClick}
              aria-expanded={expanded}
              aria-label="show more"
            >
              <CommentIcon />
              <Typography variant="h6">Comment</Typography>
            </ExpandMore>

          </IconButton>
          <IconButton aria-label="add to favorites">
            <RepeatIcon />
            <Typography variant="h6">Repost</Typography>
          </IconButton>
          <IconButton aria-label="add to favorites">
            <SendIcon />
            <Typography variant="h6">Send</Typography>

          </IconButton>

        </CardActions>
        <Collapse in={expanded} timeout="auto" unmountOnExit>

          <CardContent sx={{display: 'flex', alignItems: 'center', justifyContent:'space-around'}}>
            <Avatar aria-label="recipe"></Avatar>
            {/* border: '1px solid #d7d8d6',
                  borderRadius: '50px',
                  width: '84%',
                  height: '45px',
                  display: 'flex',
                  textAlign: 'left',
                  alignItems:'center',
                  paddingLeft: "10px",
                  fontSize: '',
                  cursor: 'pointer',
                  fontFamily: '-apple-system, system-ui, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", "Fira Sans", Ubuntu, Oxygen, "Oxygen Sans", Cantarell, "Droid Sans", "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Lucida Grande", Helvetica, Arial, sans-serif',
                  fontWeight: "500",
                  background: 'none',
                  color: 'rgb(0,0,0,0.6)',
                  textTransform: 'none',
                  '&:hover': { background: 'rgb(0,0,0,0.1)' } */}
              <InputBase
                sx={{
                  border: '1px solid #d7d8d6',
                  width: '84%',
                  height: '45px',
                 
                }}
                multiline
                endAdornment={
                  <>
                  <EmojiPicker open={false} />
                  </>
                }
                value={inputs.body}
                placeholder="Add a comment..."
                onChange={(e) => setInputs({...inputs, body: e.target.value})}
               
              />
                

            
            <Button variant="contained" onClick={(e) => {handleComment(e)}}>Post</Button>
          </CardContent>

          <CardContent>
            <Stack flexDirection={'row'}>
              
              <Box>
                {
                  comments?.map((items) =>  (
                      <>
                      <Avatar aria-label="recipe"></Avatar>
                      <Typography paragraph color={"grey"}>{items?.userId?.name}</Typography>
                      <Typography paragraph color={"black"}>{items?.body}</Typography>
                      </>
                     
                    )
                  )
                }
              </Box>
            </Stack>
          </CardContent>
        </Collapse>
      </Card>
    </Box>
  )
}

export default PostCard


// import * as React from 'react';
// import { styled } from '@mui/material/styles';
// import Card from '@mui/material/Card';
// import CardHeader from '@mui/material/CardHeader';
// import CardMedia from '@mui/material/CardMedia';
// import CardContent from '@mui/material/CardContent';
// import CardActions from '@mui/material/CardActions';
// import Collapse from '@mui/material/Collapse';
// import Avatar from '@mui/material/Avatar';
// import IconButton from '@mui/material/IconButton';
// import Typography from '@mui/material/Typography';
// import { red } from '@mui/material/colors';
// import FavoriteIcon from '@mui/icons-material/Favorite';
// import ShareIcon from '@mui/icons-material/Share';
// import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
// import MoreVertIcon from '@mui/icons-material/MoreVert';
// import { createComment } from './../../redux/slice/createComment/createCommentAction';

// const ExpandMore = styled((props) => {
//   const { expand, ...other } = props;
//   return <IconButton {...other} />;
// })(({ theme, expand }) => ({
//   transform: !expand ? 'rotate(0deg)' : 'rotate(180deg)',
//   marginLeft: 'auto',
//   transition: theme.transitions.create('transform', {
//     duration: theme.transitions.duration.shortest,
//   }),
// }));

// export default function RecipeReviewCard() {
//   const [expanded, setExpanded] = React.useState(false);

//   const handleExpandClick = () => {
//     setExpanded(!expanded);
//   };

//   return (
//     <Card sx={{ maxWidth: 345 }}>
//       <CardHeader
//         avatar={
//           <Avatar sx={{ bgcolor: red[500] }} aria-label="recipe">
//             R
//           </Avatar>
//         }
//         action={
//           <IconButton aria-label="settings">
//             <MoreVertIcon />
//           </IconButton>
//         }
//         title="Shrimp and Chorizo Paella"
//         subheader="September 14, 2016"
//       />
//       <CardMedia
//         component="img"
//         height="194"
//         image="/static/images/cards/paella.jpg"
//         alt="Paella dish"
//       />
//       <CardContent>
//         <Typography variant="body2" color="text.secondary">
//           This impressive paella is a perfect party dish and a fun meal to cook
//           together with your guests. Add 1 cup of frozen peas along with the mussels,
//           if you like.
//         </Typography>
//       </CardContent>
//       <CardActions disableSpacing>
//         <IconButton aria-label="add to favorites">
//           <FavoriteIcon />
//         </IconButton>
//         <IconButton aria-label="share">
//           <ShareIcon />
//         </IconButton>
//         <ExpandMore
//           expand={expanded}
//           onClick={handleExpandClick}
//           aria-expanded={expanded}
//           aria-label="show more"
//         >
//           <ExpandMoreIcon />
//         </ExpandMore>
//       </CardActions>
//       <Collapse in={expanded} timeout="auto" unmountOnExit>
//         <CardContent>
//           <Typography paragraph>Method:</Typography>
//           <Typography paragraph>
//             Heat 1/2 cup of the broth in a pot until simmering, add saffron and set
//             aside for 10 minutes.
//           </Typography>
//           <Typography paragraph>
//             Heat oil in a (14- to 16-inch) paella pan or a large, deep skillet over
//             medium-high heat. Add chicken, shrimp and chorizo, and cook, stirring
//             occasionally until lightly browned, 6 to 8 minutes. Transfer shrimp to a
//             large plate and set aside, leaving chicken and chorizo in the pan. Add
//             pimentón, bay leaves, garlic, tomatoes, onion, salt and pepper, and cook,
//             stirring often until thickened and fragrant, about 10 minutes. Add
//             saffron broth and remaining 4 1/2 cups chicken broth; bring to a boil.
//           </Typography>
//           <Typography paragraph>
//             Add rice and stir very gently to distribute. Top with artichokes and
//             peppers, and cook without stirring, until most of the liquid is absorbed,
//             15 to 18 minutes. Reduce heat to medium-low, add reserved shrimp and
//             mussels, tucking them down into the rice, and cook again without
//             stirring, until mussels have opened and rice is just tender, 5 to 7
//             minutes more. (Discard any mussels that don&apos;t open.)
//           </Typography>
//           <Typography>
//             Set aside off of the heat to let rest for 10 minutes, and then serve.
//           </Typography>
//         </CardContent>
//       </Collapse>
//     </Card>
//   );
// }
