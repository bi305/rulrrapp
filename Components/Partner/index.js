import React from "react";
import { Box, Grid, Typography } from "@mui/material";
import Marquee from "react-fast-marquee";

const Partner = ({ direction }) => {
	const partner = [
		"/partnerImages/Group 3186.png",
		"/partnerImages/Group 3187.png",
		"/partnerImages/Group 3188.png",
		"/partnerImages/Group 3186.png",
		"/partnerImages/Group 3186.png",
		"/partnerImages/Group 3186.png",
		"/partnerImages/Group 3186.png",
		"/partnerImages/Group 3186.png",
		"/partnerImages/Group 3186.png",
		"/partnerImages/Group 3186.png",
		"/partnerImages/Group 3186.png",
		"/partnerImages/Group 3186.png",
		"/partnerImages/Group 3186.png",
		"/partnerImages/Group 3186.png",
		"/partnerImages/Group 3186.png",
		"/partnerImages/Group 3186.png",
		"/partnerImages/Group 3186.png",
		"/partnerImages/Group 3186.png",
	];
	return (
		<Box>
			<Grid container>
				<Grid item md={12} textAlign={"center"} my={3}>
					<Typography component={"h4"} variant="h4">
						Partnership with top point of sale companies & top social platforms:
					</Typography>
				</Grid>
			</Grid>

			<Marquee pauseOnHover speed={40}>
				<Grid container>
					{partner.map((item) => {
						return (
							<Box
								sx={{ bgcolor: "#fff", px: 15, py: 5, m: 5, borderRadius: 4 }}
							>
								<Box component="img" src={item} />
							</Box>
						);
					})}
				</Grid>
			</Marquee>

			<Marquee direction={'right'} pauseOnHover speed={40}>
				<Grid container>
					{partner.map((item) => {
						return (
							<Box
								sx={{ bgcolor: "#fff", px: 15, py: 5, m: 5, borderRadius: 4 }}
							>
								<Box component="img" src={item} />
							</Box>
						);
					})}
				</Grid>
			</Marquee>
		</Box>
	);
};

export default Partner;
