import React from 'react'
import {
  List,
  ListItem,
  ListItemButton,
  ListItemIcon,
  ListItemText,
} from '@mui/material'
import { ReactComponent as NetworkIcon } from '../../assets/network-icons.svg'

const NetworkPageList = () => {
  return (
    <List sx={{ display: 'flex', flexDirection: 'column' }}>
      <ListItem sx={{ display: 'flex', flexDirection: 'column', alignItems: 'flex-start' }}>
        <ListItemButton>
          <ListItemIcon>
            <NetworkIcon />
          </ListItemIcon>
          <ListItemText primary="Connections" />
        </ListItemButton>
        <ListItemButton>
          <ListItemIcon>
            <NetworkIcon />
          </ListItemIcon>
          <ListItemText primary="Following & Followers" />
        </ListItemButton>
        <ListItemButton>
          <ListItemIcon>
            <NetworkIcon />
          </ListItemIcon>
          <ListItemText primary="Groups" />
        </ListItemButton>
        <ListItemButton>
          <ListItemIcon>
            <NetworkIcon />
          </ListItemIcon>
          <ListItemText primary="Events" />
        </ListItemButton>
        <ListItemButton>
          <ListItemIcon>
            <NetworkIcon />
          </ListItemIcon>
          <ListItemText primary="Pages" />
        </ListItemButton>
        <ListItemButton>
          <ListItemIcon>
            <NetworkIcon />
          </ListItemIcon>
          <ListItemText primary="Newsletter" />
        </ListItemButton>
        <ListItemButton>
          <ListItemIcon>
            <NetworkIcon />
          </ListItemIcon>
          <ListItemText primary="HashTag" />
        </ListItemButton>
      </ListItem>
    </List>
  )
}

export default NetworkPageList
