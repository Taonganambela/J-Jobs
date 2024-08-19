import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import MoreIcon from "@mui/icons-material/MoreVert";
import { Avatar, Button, Menu, MenuItem } from "@mui/material";
import React from "react";
import { NavLink } from "react-router-dom";

//"View Vacancies", "Login", "Register"

const navItems = [
  {
    name: "View Vacancies",
    destination: "/",
  },
  {
    name: "Login",
    destination: "/login",
  },
  {
    name: "Register",
    destination: "/register",
  },
];

export default function PrimarySearchAppBar() {
  const [mobileMoreAnchorEl, setMobileMoreAnchorEl] =
    React.useState<null | HTMLElement>(null);
  const handleMobileMenuClose = () => {
    setMobileMoreAnchorEl(null);
  };

  const handleMobileMenuOpen = (event: React.MouseEvent<HTMLElement>) => {
    setMobileMoreAnchorEl(event.currentTarget);
  };

  const isMobileMenuOpen = Boolean(mobileMoreAnchorEl);
  const mobileMenuId = "primary-search-account-menu-mobile";
  const renderMobileMenu = (
    <Menu
      anchorEl={mobileMoreAnchorEl}
      anchorOrigin={{
        vertical: "top",
        horizontal: "right",
      }}
      id={mobileMenuId}
      keepMounted
      transformOrigin={{
        vertical: "top",
        horizontal: "right",
      }}
      open={isMobileMenuOpen}
      onClose={handleMobileMenuClose}
    >
      {navItems.map((item, i) => (
        <MenuItem>
          <Button
            component={NavLink}
            to={item.destination}
            key={i}
            sx={{ mx: 2, color: "green", display: "block" }}
          >
            {item.name}
          </Button>
        </MenuItem>
      ))}
    </Menu>
  );

  return (
    <Box>
      <AppBar
        position="static"
        color="default"
        elevation={1}
        sx={{
          borderRadius: 1,
          p: 1,
          borderBottom: (theme) => `1px solid ${theme.palette.divider}`,
        }}
      >
        <Toolbar sx={{ flexWrap: "wrap" }}>
          <IconButton
            size="large"
            color="inherit"
            aria-label="open drawer"
            sx={{ mr: 2 }}
          >
            <Avatar alt="Zamtel Logo" src="/static/images/logo.png" />
          </IconButton>
          <Typography
            variant="h4"
            noWrap
            component="div"
            sx={{ display: { xs: "none", sm: "block" } }}
          >
            Zamtel HR
          </Typography>
          <Box sx={{ flexGrow: 1 }} />

          <Box sx={{ display: { xs: "none", md: "flex" } }}>
            {navItems.map((item, i) => (
              <Button
                component={NavLink}
                to={item.destination}
                key={i}
                sx={{ mx: 2, color: "green", display: "block" }}
              >
                {item.name}
              </Button>
            ))}
          </Box>
          <Box sx={{ display: { xs: "flex", md: "none" } }}>
            <IconButton
              size="large"
              aria-label="show more"
              aria-controls={mobileMenuId}
              aria-haspopup="true"
              onClick={handleMobileMenuOpen}
              color="inherit"
            >
              <MoreIcon />
            </IconButton>
          </Box>
        </Toolbar>
      </AppBar>
      {renderMobileMenu}
    </Box>
  );
}
