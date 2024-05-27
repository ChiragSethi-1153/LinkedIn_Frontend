import React from 'react'
import {
  List,
  ListItem,
  ListItemButton,
  ListItemIcon,
  ListItemText,
} from '@mui/material'
import { ReactComponent as Connections } from '../../assets/connections.svg'
import { ReactComponent as Hashtag } from '../../assets/hashtag.svg'
import { ReactComponent as Newsletter } from '../../assets/newsletter.svg'
import { ReactComponent as Pages } from '../../assets/pages.svg'
import { ReactComponent as Events } from '../../assets/events.svg'
import { ReactComponent as Groups } from '../../assets/groups.svg'
import { ReactComponent as Following } from '../../assets/following.svg'
import { ReactComponent as Contacts } from '../../assets/contact.svg'

const NetworkPageList = () => {
  return (
    <List sx={{ 
      display: 'flex', 
      flexDirection: 'column',
      padding: '0' 
      
      }}>
      <ListItem 
      sx={{ 
        display: 'flex', 
        flexDirection: 'column', 
        alignItems: 'flex-start', 
        padding: '0 !important',
        }}>
        <ListItemButton sx={{width: '100%'}}>
          <ListItemIcon>
            <Connections />
          </ListItemIcon>
          <ListItemText primary="Connections" />
        </ListItemButton>
        <ListItemButton sx={{width: '100%'}}>
          <ListItemIcon>
            <Contacts />
          </ListItemIcon>
          <ListItemText primary="Contacts" />
        </ListItemButton>
        <ListItemButton sx={{width: '100%'}}>
          <ListItemIcon>
            <Following />
          </ListItemIcon>
          <ListItemText primary="Following & Followers" />
        </ListItemButton>
        <ListItemButton sx={{width: '100%'}}>
          <ListItemIcon>
            <Groups />
          </ListItemIcon>
          <ListItemText primary="Groups" />
        </ListItemButton>
        <ListItemButton sx={{width: '100%'}}>
          <ListItemIcon>
            <Events />
          </ListItemIcon>
          <ListItemText primary="Events" />
        </ListItemButton>
        <ListItemButton sx={{width: '100%'}}>
          <ListItemIcon>
            <Pages />
          </ListItemIcon>
          <ListItemText primary="Pages" />
        </ListItemButton>
        <ListItemButton sx={{width: '100%'}}>
          <ListItemIcon>
            <Newsletter />
          </ListItemIcon>
          <ListItemText primary="Newsletter" />
        </ListItemButton>
        <ListItemButton sx={{width: '100%'}}>
          <ListItemIcon>
            <Hashtag />
          </ListItemIcon>
          <ListItemText primary="HashTag" />
        </ListItemButton>
      </ListItem>
    </List>
  )
}

export default NetworkPageList
