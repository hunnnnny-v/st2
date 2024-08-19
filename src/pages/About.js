import React from "react";
import Layout from "./../components/Layout/Layout";
import { Box, Typography } from "@mui/material";

const About = () => {
  return (
    <Layout>
      <Box
        sx={{
          my: 15,
          textAlign: "center",
          p: 3,
          backgroundColor: "#f4f4f4", // Light gray background
          borderRadius: "12px",
          boxShadow: "0px 8px 20px rgba(0, 0, 0, 0.1)",
          maxWidth: "800px",
          margin: "auto",
          fontFamily: "'Roboto', sans-serif",
          transition: "transform 0.3s ease, background-color 0.3s ease",
          "&:hover": {
            transform: "scale(1.05)",
            backgroundColor: "#e0e0e0", // Slightly darker on hover
          },
          "& h4": {
            fontWeight: "bold",
            my: 3,
            fontSize: "2.5rem",
            color: "#1d3557", // Deep blue color for header
            letterSpacing: "1px",
            textTransform: "uppercase",
          },
          "& p": {
            textAlign: "justify",
            fontSize: "1.1rem",
            lineHeight: "1.8",
            color: "#2a9d8f", // Teal color for text
            marginBottom: "1.5rem",
          },
          "& p:last-of-type": {
            marginBottom: 0,
          },
          "@media (max-width:600px)": {
            mt: 10,
            p: 2,
            "& h4": {
              fontSize: "2rem",
            },
            "& p": {
              fontSize: "1rem",
            },
          },
        }}
      >
        <Typography variant="h4">Welcome To Our Restaurant</Typography>
        <p>
          At our restaurant, we pride ourselves on offering an unforgettable
          dining experience that combines the rich flavors of traditional Indian
          cuisine with a modern twist. Whether you're joining us for a casual
          lunch or a special dinner, our menu is crafted to satisfy all your
          culinary cravings.
        </p>
        <p>
          Our chefs use only the freshest ingredients, sourced locally and
          internationally, to prepare each dish with care and precision. From
          the sizzling tandoor to the aromatic spices in our curries, every bite
          is a journey through the diverse culinary landscape of India. We
          invite you to relax in our warm and inviting atmosphere, where the
          decor reflects the vibrant culture and heritage of India.
        </p>
        <p>
          Thank you for choosing us to be a part of your dining experience.
          Whether you're here to celebrate a special occasion or simply to enjoy
          a good meal, we are committed to making your visit memorable. Welcome
          to a world of flavors, and we hope to see you again soon!
        </p>
      </Box>
    </Layout>
  );
};

export default About;
