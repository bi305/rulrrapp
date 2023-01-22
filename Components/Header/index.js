import * as React from "react";
import PropTypes from "prop-types";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import CssBaseline from "@mui/material/CssBaseline";
import Divider from "@mui/material/Divider";
import Drawer from "@mui/material/Drawer";
import IconButton from "@mui/material/IconButton";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemText from "@mui/material/ListItemText";
import MenuIcon from "@mui/icons-material/Menu";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";

const drawerWidth = 240;
const navItems = ["Who We Are", "What We Build", "Our Community", "Resources"];
const topBar = ["Sign In", "Contact Sales", "Contact Sales"];

const Header = (props) => {
	const { window } = props;
	const [mobileOpen, setMobileOpen] = React.useState(false);

	const handleDrawerToggle = () => {
		setMobileOpen((prevState) => !prevState);
	};

	const drawer = (
		<Box onClick={handleDrawerToggle} sx={{ textAlign: "center" }}>
			<Typography variant="h6" sx={{ my: 2 }}>
				MUI
			</Typography>
			<Divider />
			<List>
				{navItems.map((item) => (
					<ListItem key={item} disablePadding>
						<ListItemButton sx={{ textAlign: "center" }}>
							<ListItemText primary={item} />
						</ListItemButton>
					</ListItem>
				))}
			</List>
		</Box>
	);

	const container =
		window !== undefined ? () => window().document.body : undefined;

	return (
		<Box sx={{ display: "flex" }}>
			<CssBaseline />

			{/* <Box sx={{ flexGrow: 50, display: { xs: "none", sm: "block" } }} />
			<Box sx={{ display: { xs: "none", sm: "block" } }}>
				{topBar.map((item) => (
					<Typography
						component="span"
						key={item}
						sx={{ color: "Black", px: 2 }}
					>
						{item}
					</Typography>
				))}
			</Box> */}

			<AppBar component="nav" sx={{ bgcolor: "transparent", color: "black" }}>
				<Toolbar>
					<IconButton
						color="inherit"
						aria-label="open drawer"
						edge="start"
						onClick={handleDrawerToggle}
						sx={{ mr: 2, display: { sm: "none" } }}
					>
						<MenuIcon />
					</IconButton>
					<Typography
						variant="h6"
						component="div"
						sx={{ display: { xs: "none", sm: "block" }, mr: 3 }}
					>
						<Box component="img" src="/logo.png" />
					</Typography>
					<Box sx={{ flexGrow: 1, display: { xs: "none", sm: "block" } }}>
						{navItems.map((item) => (
							<Button key={item} sx={{ color: "Black" }}>
								{item}
							</Button>
						))}
					</Box>
					<Box sx={{ display: {xs:'none',   sm: "none",md:'block' } }}>
						onboard your store
					</Box>
				</Toolbar>
			</AppBar>
			<Box component="nav" sx={{ mb: 12 }}>
				<Drawer
					container={container}
					variant="temporary"
					open={mobileOpen}
					onClose={handleDrawerToggle}
					ModalProps={{
						keepMounted: true, // Better open performance on mobile.
					}}
					sx={{
						display: { xs: "block", sm: "none" },
						"& .MuiDrawer-paper": {
							boxSizing: "border-box",
							width: drawerWidth,
						},
					}}
				>
					{drawer}
				</Drawer>
			</Box>
		 
		</Box>
	);
};

export default Header;
