import * as React from "react";
import PropTypes from "prop-types";
import Button from "@mui/material/Button";
import Avatar from "@mui/material/Avatar";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemAvatar from "@mui/material/ListItemAvatar";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemText from "@mui/material/ListItemText";
import DialogTitle from "@mui/material/DialogTitle";
import Dialog from "@mui/material/Dialog";
import PersonIcon from "@mui/icons-material/Person";
import AddIcon from "@mui/icons-material/Add";
import Typography from "@mui/material/Typography";
import { blue } from "@mui/material/colors";
import { styled } from "@mui/material/styles";
import Badge from "@mui/material/Badge";
import { Stack } from "react-bootstrap";
import EditIcon from "@mui/icons-material/Edit";
import { Edit } from "@mui/icons-material";
import { Box } from "@mui/material";
import { useWindowSize } from "../../hooks/useWindowSize";
import { DeleteButton } from "./styles";
import ClearIcon from "@mui/icons-material/Clear";

const StyledBadge = styled(Badge)(({ theme }) => ({
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



const SmallAvatar = styled(Avatar)(({ theme }) => ({
  width: 22,
  height: 22,
  border: `2px solid ${theme.palette.background.paper}`,
}));

const avatar = [
  "https://www.pngmart.com/files/5/Poro-PNG-Image.png",
  "https://www.pngmart.com/files/22/Nier-PNG-Pic.png",
  "https://www.pngmart.com/files/5/Poro-PNG-Image.png",
  "https://www.pngmart.com/files/22/Nier-PNG-Pic.png",
  "https://www.pngmart.com/files/5/Poro-PNG-Image.png",
  "https://www.pngmart.com/files/22/Nier-PNG-Pic.png",
  "https://www.pngmart.com/files/5/Poro-PNG-Image.png",
  "https://www.pngmart.com/files/22/Nier-PNG-Pic.png",
  "https://www.pngmart.com/files/5/Poro-PNG-Image.png",
  "https://www.pngmart.com/files/22/Nier-PNG-Pic.png",
  "https://www.pngmart.com/files/5/Poro-PNG-Image.png",
  "https://www.pngmart.com/files/22/Nier-PNG-Pic.png",
];

function SimpleDialog(props) {
  const { onClose, selectedValue, open } = props;

  const handleClose = () => {
    onClose(selectedValue);
  };
  
  const handleListItemClick = (value) => {
    onClose(value);
  };

  const windowSize = useWindowSize();
  const DESKTOP_SMALL_SIZE = 1023;
  const isMobile = (windowSize) => windowSize.width <= DESKTOP_SMALL_SIZE;

  return (

    <Dialog onClose={handleClose} open={open}>
    <Box 
    width={isMobile(windowSize) ? "21rem" : "30rem"}
    sx={{ border:'5px solid black'}}>
      <Box 
      padding={isMobile(windowSize) ? "2rem 0rem 2rem 1rem" : "2rem 1rem 3rem 2rem"}
      >
        <DeleteButton aria-label="delete" onClick={handleClose}>
          <ClearIcon color="error" fontSize="large" />
        </DeleteButton>
        <Typography sx={{fontSize:'35px'}}>Seleccione su avatar</Typography>
        <Typography width={isMobile(windowSize) ? "80%" : "100%"}>
          Personalice su personaje para hacer un plan que se adapte a sus
          necesidades
        </Typography>
      </Box>
      <Box sx={{paddingLeft: '2rem', background: "#FAFAEF"}}>
        <List sx={{ pt: 0 }}>
          {avatar.map((icone) => (
            <Button onClick={() => handleListItemClick(icone)} key={icone}>
              <Avatar sx={{ width: 112, height: 112 }} src={icone}></Avatar>
            </Button>
          ))}
        </List>
      </Box>
    </Box> 
    </Dialog>
  );
}

SimpleDialog.propTypes = {
  onClose: PropTypes.func.isRequired,
  open: PropTypes.bool.isRequired,
  selectedValue: PropTypes.string.isRequired,
};

export default function SimpleDialogDemo() {
  const [open, setOpen] = React.useState(false);
  const [selectedValue, setSelectedValue] = React.useState(avatar[1]);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = (value) => {
    setOpen(false);
    setSelectedValue(value);
  };

  return (
    <Stack direction="row">
      <Badge
        overlap="circular"
        anchorOrigin={{ vertical: "bottom", horizontal: "right" }}
        badgeContent={
          <SmallAvatar
            alt="Remy Sharp"
            src="../../assents/edit.png"
            onClick={handleClickOpen}
          />
        }
      >
        <Avatar
          sx={{ width: 75, height: 75 }}
          alt="Travis Howard"
          src={selectedValue}
        />
      </Badge>
      <SimpleDialog
        selectedValue={selectedValue}
        open={open}
        onClose={handleClose}
      />
    </Stack>
  );
}
