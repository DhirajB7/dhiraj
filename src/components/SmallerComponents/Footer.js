import React from "react";
import Typography from "@material-ui/core/Typography";
import { makeStyles } from "@material-ui/core/styles";
import LinkedInIcon from "@material-ui/icons/LinkedIn";
import MailIcon from "@material-ui/icons/Mail";
import PhoneIcon from "@material-ui/icons/Phone";
import WhatsAppIcon from "@material-ui/icons/WhatsApp";
import { linkedInUrl, mailUrl, watsappUrl, phoneUrl } from "../Constant";
import Tooltip from "@material-ui/core/Tooltip";
import Zoom from "@material-ui/core/Zoom";
import Popover from "@material-ui/core/Popover";

const useStyles = makeStyles((theme) => ({
  footer: {
    backgroundColor: theme.palette.background.paper,
    padding: theme.spacing(6),
  },
  popover: {
    pointerEvents: "none",
  },
  paper: {
    padding: theme.spacing(1),
  },
}));

function Footer() {
  const classes = useStyles();
  const toolTipLinkedin = "Check My Linkedin - " + linkedInUrl;
  const toolTipWhatsapp = "Contact Me Via Watsapp - " + phoneUrl;
  const toolTipMail = "Send Me Mail - " + mailUrl.substr(7);
  const toolTipPhone = "Call Me - " + phoneUrl;
  const [anchorEl, setAnchorEl] = React.useState(null);

  const handlePopoverOpen = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handlePopoverClose = () => {
    setAnchorEl(null);
  };

  const open = Boolean(anchorEl);

  return (
    <footer className={classes.footer}>
      <Typography variant="h4" align="center" gutterBottom>
        <u>CONTACT DETAILS</u>
      </Typography>

      <Typography variant="subtitle1" align="center" component="p">
        <Tooltip TransitionComponent={Zoom} title={toolTipLinkedin}>
          <LinkedInIcon
            id="linkedin"
            onClick={() => window.open(linkedInUrl, "_blank")}
          />
        </Tooltip>
        <Tooltip TransitionComponent={Zoom} title={toolTipWhatsapp}>
          <WhatsAppIcon
            id="whatsapp"
            onClick={() => window.open(watsappUrl, "_blank")}
          />
        </Tooltip>
        <Tooltip TransitionComponent={Zoom} title={toolTipMail}>
          <MailIcon id="mail" onClick={() => window.open(mailUrl, "_blank")} />
        </Tooltip>
        <React.Fragment>
          <PhoneIcon
            id="phone"
            aria-owns={open ? "mouse-over-popover" : undefined}
            aria-haspopup="true"
            onMouseEnter={handlePopoverOpen}
            onMouseLeave={handlePopoverClose}
          />
          <Popover
            id="mouse-over-popover"
            className={classes.popover}
            classes={{
              paper: classes.paper,
            }}
            open={open}
            anchorEl={anchorEl}
            anchorOrigin={{
              vertical: "bottom",
              horizontal: "left",
            }}
            transformOrigin={{
              vertical: "top",
              horizontal: "left",
            }}
            onClose={handlePopoverClose}
            disableRestoreFocus
          >
            <Typography>Contact Number {phoneUrl}</Typography>
          </Popover>
        </React.Fragment>
      </Typography>
    </footer>
  );
}

export default Footer;
