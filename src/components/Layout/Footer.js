import React from "react";
import { Box, Typography, Link } from "@mui/material";

const Footer = () => {
  return (
    <Box
      sx={{
        textAlign: "center",
        bgcolor: "#1A1A19",
        color: "white",
        p: 3,
        mt: 10,
      }}
    >
      <Box
        sx={{
          my: 3,
        }}
      >
        <Typography variant="h6" sx={{ mb: 2 }}>
          Contact Us
        </Typography>
        <Typography variant="body1">
          "Indulge in the Flavorful Moments – See You at My Restaurant!"
          {/* It’s
          inviting and reflects the welcoming atmosphere of a restaurant. */}
        </Typography>
        <Typography variant="body1">Phone: 9416686488</Typography>
        <Typography variant="body1">
          <Link href="/contact" color="inherit">
            Contact Page
          </Link>
        </Typography>
      </Box>
      <Typography
        variant="h5"
        sx={{
          "@media (max-width:600px)": {
            fontSize: "1rem",
          },
        }}
      >
        All Rights Reserved &copy; My Restaurant
      </Typography>
    </Box>
  );
};

export default Footer;
