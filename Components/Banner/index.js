import CustomButton from "@/ComponentsLibrary/Button";
import { Typography, Box, Grid, Button } from "@mui/material";
import Image from "next/image";
import React from "react";
import Partner from "../Partner";

const HeroSection = () => {
	return (
		<Box
			sx={{
				display: "flex",
				justifyContent: "center",
				bgcolor: "#F6FBFF",
				p: 10,
			}}
		>
			<Grid container maxWidth={"xl"}>
				<Grid item md={6}>
					<Box
						sx={{
							height: "600px",
							display: "flex",
							justifyContent: "center",
							alignItems: "center",
						}}
					>
						<Box>
							<Box sx={{ width: { md: "650px", sm: "400px", xs: "300px" } }}>
								<Typography
									component="h1"
									variant="h1"
									color="#404040"
									fontWeight={"bold"}
									fontSize="80px"
								>
									Designed For Local Store
								</Typography>
							</Box>

							<Box sx={{ width: { md: "600px", sm: "400px", xs: "300px" } }}>
								<Typography
									component="p"
									sx={{ lineHeight: "30px", wordSpacing: "9px" }}
								>
									Efficient Marketing platform that consistently increases
									business revenue. We brought back millions of customers to
									local stores around the world securing their business. Start
									earning today!
								</Typography>
							</Box>
							<Box mt={5}>
								<CustomButton
									text={"Claim 30 Day Free Trial"}
									sx={{
										bgcolor: "#52D1EC",
										borderRadius: "20px",
										color: "#fff",
										px: "20px",
										mr: 2,
									}}
								/>
								<CustomButton
									text={"How It Works"}
									variant="outlined"
									sx={{
										borderColor: "#52D1EC",
										borderRadius: "20px",
										color: "#52D1EC",
									}}
								/>
							</Box>
						</Box>
					</Box>
				</Grid>
				<Grid item md={6}>
					<Box
						component={"img"}
						src={"/banner_image.png"}
						sx={{ borderRadius: "10px", width: "100%" }}
					/>
				</Grid>

				<Partner />
			 
			</Grid>
		</Box>
	);
};

export default HeroSection;
