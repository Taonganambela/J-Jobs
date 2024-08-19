import {
  Box,
  Button,
  List,
  ListItem,
  ListItemText,
  Typography,
} from "@mui/material";
import { NavLink as RouterLink } from "react-router-dom";
import { styled } from "@mui/material/styles";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import CheckCircleIcon from "@mui/icons-material/CheckCircle";
// import { useAppSelector } from "../../../../store/hooks";
// import { selectAccount } from "../../../../store/slices/AccountSlice";

const ListWrapper = styled(Box)(
  ({ theme }) => `
        .MuiTouchRipple-root {
            display: none;
        }
        
        .MuiListItem-root {
            transition: ${theme.transitions.create(["color", "fill"])};
            
            &.MuiListItem-indicators {
                padding: ${theme.spacing(1, 2)};
            
                .MuiListItemText-root {
                    .MuiTypography-root {
                        &:before {
                            height: 4px;
                            width: 22px;
                            opacity: 0;
                            visibility: hidden;
                            display: block;
                            position: absolute;
                            bottom: -10px;
                            transition: all .2s;
                            border-radius: ${theme.general.borderRadiusLg};
                            content: "";
                            background: ${theme.colors.success.main};
                        }
                    }
                }

                &.active,
                &:active,
                &:hover {
                
                    background: transparent;
                
                    .MuiListItemText-root {
                        .MuiTypography-root {
                            &:before {
                                opacity: 1;
                                visibility: visible;
                                bottom: 0px;
                            }
                        }
                    }
                }
            }
        }
`
);

function HeaderMenu() {
  // const { account } = useAppSelector(selectAccount);
  return (
    <>
      <ListWrapper
        sx={{
          display: {
            xs: "none",
            md: "block",
          },
        }}
      >
        <List disablePadding component={Box} display="flex">
          <ListItem classes={{ root: "MuiListItem-indicators" }}>
            <ListItemText
              primaryTypographyProps={{ noWrap: true }}
              primary={
                <Button
                  rel="noopener noreferrer"
                  variant="contained"
                  color="success"
                  size="small"
                  fullWidth
                  component={RouterLink}
                  to="self-service"
                  startIcon={<ShoppingCartIcon />}
                >
                 Profile 8%
                </Button>
              }
            />
          </ListItem>

       

        </List>
      </ListWrapper>
    </>
  );
}

export default HeaderMenu;
