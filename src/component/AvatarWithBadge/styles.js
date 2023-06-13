import { styled } from "@mui/material/styles";
import Avatar from "@mui/material/Avatar";
import { Badge, Grid, IconButton, ToggleButton } from "@mui/material";

export const SmallAvatar = styled(Avatar)(({ theme }) => ({
  width: 22,
  height: 22,
  border: `2px solid ${theme.palette.background.paper}`,
}));



export const StyleIconButton = styled(IconButton)(({ theme }) => ({
 "@media (min-width: 1024px)": {
    display: "none",
  },
}));

export const StyleGrid= styled(Grid)(({ theme }) => ({
 
  "@media (min-width: 1024px)": {
    width: '40rem',
  },
}));


export const StyleToggleButton = styled(ToggleButton)(({ theme }) => ({
  padding: '0.2rem',
  "@media (min-width: 1024px)": {
    padding: '1.5rem',
  },
}));

export const StyledBadge = styled(Badge)(({ theme }) => ({
  "& .MuiBadge-badge": {
    backgroundColor: "#44b700",
    color: "#44b700",
    boxShadow: `0 0 0 2px ${theme.palette.background.paper}`,
    "&::after": {
      position: "absolute",
      top: 0,
      left: 0,
      width: "100%",
      height: "100%",
      borderRadius: "50%",
      animation: "ripple 1.2s infinite ease-in-out",
      border: "1px solid currentColor",
      content: '""',
    },
  },
  "@keyframes ripple": {
    "0%": {
      transform: "scale(.8)",
      opacity: 1,
    },
    "100%": {
      transform: "scale(2.4)",
      opacity: 0,
    },
  },
}));
