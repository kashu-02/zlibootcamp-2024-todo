import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import ChecklistIcon from '@mui/icons-material/Checklist';
import SettingsIcon from '@mui/icons-material/Settings';
import IconButton from '@mui/material/IconButton';
import * as React from "react";
import Settings from "./Settings.tsx";

export default function ButtonAppBar() {
  const [open, setOpen] = React.useState(false);
  const dialogOpenClick = () =>{
    setOpen(true)
  }
  const dialogClose = () => {setOpen(false)}

  return (
      <>
      <Box sx={{ flexGrow: 1 }}>
        <AppBar position="static">
          <Toolbar>
            <ChecklistIcon sx={{ mr: 2 }}/>
            <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
              Todo List
            </Typography>
            <IconButton
                size="large"
                // edge="start"
                color="inherit"
                aria-label="menu"
                sx={{ mr: 2 }}
                onClick={dialogOpenClick}
            >
              <SettingsIcon />
            </IconButton>
            <Button color="inherit">ログイン</Button>
          </Toolbar>
        </AppBar>
      </Box>
        <Settings open={open} onClose={dialogClose}/>
      </>
  );
}