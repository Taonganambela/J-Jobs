import { useContext } from "react";
import { NavLink as RouterLink } from "react-router-dom";
import { SidebarContext } from "../../../contexts/SidebarContext";

import {
  Box,
  Drawer,
  styled,
  Divider,
  useTheme,
  Button,
  darken,
} from "@mui/material";
import LogoutIcon from '@mui/icons-material/Logout';
import SidebarMenu from "./SidebarMenu";
import Scrollbar from "../../../components/Scrollbar";

const SidebarWrapper = styled(Box)(
  ({ theme }) => `
        width: ${theme.sidebar.width};
        min-width: ${theme.sidebar.width};
        color: ${theme.colors.alpha.trueWhite[70]};
        position: relative;
        z-index: 7;
        height: 100%;
        padding-bottom: 68px;
`
);

function Sidebar() {
  const { sidebarToggle, toggleSidebar } = useContext(SidebarContext);
  const closeSidebar = () => toggleSidebar();
  const theme = useTheme();

  return (
    <>
      <SidebarWrapper
        sx={{
          display: {
            xs: "none",
            lg: "inline-block",
          },
          position: "fixed",
          left: 0,
          top: 0,
          background: "#20B24A",
          boxShadow:
            theme.palette.mode === "dark" ? theme.sidebar.boxShadow : "none",
        }}
      >
        <Scrollbar>
          <Box mt={1}>
            <Box
              justifyContent={"center"}
              alignContent={"center"}
              display={"flex"}
            >
              <img alt="Come Home" height={50} src="/static/images/logo.png" />
            </Box>
          </Box>
          <Divider
            sx={{
              mt: theme.spacing(3),
              mx: theme.spacing(2),
              background: theme.colors.alpha.trueWhite[10],
            }}
          />
          <SidebarMenu />
        </Scrollbar>
        <Divider
          sx={{
            background: theme.colors.alpha.trueWhite[10],
          }}
        />
        <Box p={2}>
          <Button
            rel="noopener noreferrer"
            variant="contained"
            color="error"
            size="small"
            fullWidth
            component={RouterLink}
            to="self-service"
            startIcon={<LogoutIcon />}
          >
           Logout
          </Button>
        </Box>
      </SidebarWrapper>
      <Drawer
        sx={{
          boxShadow: `${theme.sidebar.boxShadow}`,
        }}
        anchor={theme.direction === "rtl" ? "right" : "left"}
        open={sidebarToggle}
        onClose={closeSidebar}
        variant="temporary"
        elevation={9}
      >
        <SidebarWrapper
          sx={{
            background:
              theme.palette.mode === "dark"
                ? theme.colors.alpha.white[100]
                : darken(theme.colors.alpha.black[100], 0.5),
          }}
        >
          <Scrollbar>
            <Box mt={1}>
              <Box
                sx={{
                  width: 52,
                }}
              >
                <img
                  alt="Come Home"
                  height={60}
                  src="/static/images/logo.png"
                />
              </Box>
            </Box>
            <Divider
              sx={{
                mt: theme.spacing(3),
                mx: theme.spacing(2),
                background: theme.colors.alpha.trueWhite[10],
              }}
            />
            <SidebarMenu />
          </Scrollbar>
        </SidebarWrapper>
      </Drawer>
    </>
  );
}

export default Sidebar;
