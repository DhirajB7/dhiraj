import React from "react";
import Typography from "@material-ui/core/Typography";
import { makeStyles } from "@material-ui/core/styles";
import LinkedInIcon from "@material-ui/icons/LinkedIn";
import MailIcon from "@material-ui/icons/Mail";
import PhoneIcon from "@material-ui/icons/Phone";
import WhatsAppIcon from "@material-ui/icons/WhatsApp";
import {
	linkedInUrl,
	mailUrl,
	watsappUrl,
	phoneUrl,
	actualUrl,
} from "../Constant";
import Tooltip from "@material-ui/core/Tooltip";
import Zoom from "@material-ui/core/Zoom";
import { Link, Snackbar, Container } from "@material-ui/core";
import MuiAlert from "@material-ui/lab/Alert";

function Copyright() {
	return (
		<Typography variant="body2"  className = "info" align="center">
			{"Copyright © "}
			<Link color="inherit" href="https://dhirajb7.github.io/">
				{actualUrl}
			</Link>{" "}
			{new Date().getFullYear()}
			{"."}
		</Typography>
	);
}

function Alert(props) {
	return <MuiAlert elevation={6} variant="filled" {...props} />;
}

const useStyles = makeStyles((theme) => ({
	footer: {
		backgroundColor: theme.palette.background.paper,
		padding: theme.spacing(6),
	},
}));

function Footer() {
	const classes = useStyles();
	const toolTipLinkedin = "Check My Linkedin - " + linkedInUrl;
	const toolTipWhatsapp = "Contact Me Via Watsapp - " + phoneUrl;
	const toolTipMail = "Send Me Mail - " + mailUrl.substr(7);
	const toolTipPhone = "Call Me " + phoneUrl;
	const [open, setOpen] = React.useState(false);

	const handleClick = () => {
		setOpen(true);
	};

	const handleClose = (event, reason) => {
		if (reason === "clickaway") {
			return;
		}

		setOpen(false);
	};

	return (
			<footer id = "footer" className={classes.footer}>
				<Typography  className = "info" variant="h4" align="center" gutterBottom>
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
						<Tooltip TransitionComponent={Zoom} title={toolTipPhone}>
							<PhoneIcon id="phone" onClick={handleClick} />
						</Tooltip>
						<Snackbar open={open} autoHideDuration={6000} onClose={handleClose}>
							<Alert onClose={handleClose} severity="success">
								Reach Me at {phoneUrl} .
            </Alert>
						</Snackbar>
					</React.Fragment>
				</Typography>
				<Copyright />
			</footer>
	);
}

export default Footer;
