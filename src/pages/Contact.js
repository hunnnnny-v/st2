import React from "react";
import Layout from "./../components/Layout/Layout";
// import SupportAgentIcon from "@mui/icons-material/SupportAgent";
import MailIcon from "@mui/icons-material/Mail";
import CallIcon from "@mui/icons-material/Call";
import {
  Box,
  Paper,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Typography,
} from "@mui/material";

const Contact = () => {
  return (
    <Layout>
      <Box
        sx={{
          my: 5,
          ml: 10,
          "& h4": { fontWeight: "bold", mb: 2, color: "#1d3557" },
        }}
      >
        <Typography variant="h4">Contact Us</Typography>
        <p>
          We’d love to hear from you! Whether you have questions, feedback, or
          just want to say hello, feel free to reach out to us through any of
          the following contact details. Our team is here to assist you with
          anything you need.
        </p>
      </Box>
      <Box
        sx={{
          m: 3,
          width: "600px",
          ml: 10,
          "@media (max-width:600px)": {
            width: "90%",
            ml: 2,
          },
        }}
      >
        <TableContainer component={Paper} elevation={3}>
          <Table aria-label="contact table">
            <TableHead>
              <TableRow>
                <TableCell
                  sx={{
                    bgcolor: "#2a9d8f",
                    color: "white",
                    fontWeight: "bold",
                  }}
                  align="center"
                >
                  Contact Details
                </TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              <TableRow>
                <TableCell>
                  <CallIcon sx={{ color: "#4caf50", pt: 1 }} />
                  6239699302 (Reservations)
                </TableCell>
              </TableRow>
              <TableRow>
                <TableCell>
                  <MailIcon sx={{ color: "#1e90ff", pt: 1 }} />{" "}
                  hunnyv2003@gmail.com
                </TableCell>
              </TableRow>
              <TableRow>
                <TableCell>
                  <CallIcon sx={{ color: "#32cd32", pt: 1 }} />
                  7814955918
                </TableCell>
              </TableRow>
            </TableBody>
          </Table>
        </TableContainer>
      </Box>
    </Layout>
  );
};

export default Contact;
