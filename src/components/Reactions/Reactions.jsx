import { Button, Stack } from '@mui/material'
import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import { createReaction } from '../../redux/slice/reactions/reactionAction'
import { ReactionCounter } from '@charkour/react-reactions';

const Reactions = ({handleMouseOver, handleMouseOut, postId }) => {
    console.log(postId)
    const dispatch = useDispatch()
    const [reactions, setReactions] = useState('Like')

    const handleReactions = (emoji) => {
        console.log(emoji)
        console.log(postId)
        setReactions(emoji)
        const reaction = { reactions: reactions, postId: postId }
        console.log(reaction)
        dispatch(createReaction(reaction))
    }


  return (


    <Stack
        flexDirection={'row'}
        onMouseOver={handleMouseOver} 
        onMouseOut={handleMouseOut}
        sx={{
            backgroundColor: '#fff',
            zIndex: '1',
            position: 'absolute',
            top: '-35px',
            left: '-10px',
            display: 'flex',
            width: '300px',
            transition: 'ease-in-out',
            justifyContent: 'center',
            alignItems: 'center',
            '&:hover': {
                cursor: 'pointer'

            }
        }
        }
    >
    <Button onClick={() => handleReactions('Like')} sx={{padding: '0', width: '60px', minWidth: '0', fontSize: "20px", }}>👍</Button>
    <Button  onClick={() => handleReactions('Celebrate' )} sx={{padding: '0',width: '60px', minWidth: '0', fontSize: "20px"}}>👏</Button>
    <Button  onClick={() => handleReactions('Support')} sx={{padding: '0', width: '60px', minWidth: '0', fontSize: "20px"}}>🤝</Button>
    <Button  onClick={() => handleReactions('Love')} sx={{padding: '0', width: '60px', minWidth: '0', fontSize: "20px"}}>❤️</Button>
    <Button onClick={() => handleReactions('Insightful')} sx={{padding: '0', width: '60px', minWidth: '0', fontSize: "20px"}}>💡</Button>
    <Button onClick={() => handleReactions('Funny')} sx={{padding: '0', width: '60px', minWidth: '0', fontSize: "20px"}}>😂</Button>       
    </Stack>
  )
}

export default Reactions
