import React from "react";
import { MenuList } from "../data/data";
import Layout from "./../components/Layout/Layout";
import {
  Box,
  CardActionArea,
  CardContent,
  CardMedia,
  Typography,
  Paper,
} from "@mui/material";
import { styled } from "@mui/system";

const FlipCard = styled(Paper)(({ theme }) => ({
  position: "relative",
  width: "300px",
  height: "400px",
  perspective: "1000px",
}));

const FlipCardInner = styled(Box)(({ theme }) => ({
  position: "relative",
  width: "100%",
  height: "100%",
  transition: "transform 0.6s",
  transformStyle: "preserve-3d",
  "&:hover": {
    transform: "rotateY(180deg)",
  },
}));

const FlipCardFront = styled(CardActionArea)(({ theme }) => ({
  position: "absolute",
  width: "100%",
  height: "100%",
  backfaceVisibility: "hidden",
}));

const FlipCardBack = styled(Box)(({ theme }) => ({
  position: "absolute",
  width: "100%",
  height: "100%",
  backfaceVisibility: "hidden",
  transform: "rotateY(180deg)",
  backgroundColor: "#fff",
  padding: theme.spacing(2),
  boxSizing: "border-box",
  display: "flex",
  flexDirection: "column",
  justifyContent: "center",
  alignItems: "center",
  textAlign: "center",
}));

const Menu = () => {
  return (
    <Layout>
      <Box sx={{ display: "flex", flexWrap: "wrap", justifyContent: "center" }}>
        {MenuList.map((menu) => (
          <FlipCard key={menu.name} sx={{ m: 2 }}>
            <FlipCardInner>
              <FlipCardFront>
                <CardMedia
                  sx={{ height: "70%", objectFit: "cover" }}
                  component={"img"}
                  src={menu.image}
                  alt={menu.name}
                />
                <CardContent
                  sx={{
                    height: "30%",
                    display: "flex",
                    flexDirection: "column",
                    justifyContent: "center",
                  }}
                >
                  <Typography variant="h6" gutterBottom component={"div"}>
                    {menu.name}
                  </Typography>
                  <Typography variant="body2" noWrap>
                    {menu.description}
                  </Typography>
                </CardContent>
              </FlipCardFront>
              <FlipCardBack>
                <Typography variant="h6" gutterBottom>
                  {menu.name}
                </Typography>
                <Typography variant="body2" paragraph>
                  {menu.additionalInfo}
                </Typography>
                <Typography variant="body2" color="textSecondary">
                  Price: {menu.price}
                </Typography>
                <Typography variant="body2" color="textSecondary">
                  Nutritional Info: {menu.nutritionalInfo}
                </Typography>
                <Typography variant="body2" color="textSecondary">
                  Prep Time: {menu.preparationTime}
                </Typography>
              </FlipCardBack>
            </FlipCardInner>
          </FlipCard>
        ))}
      </Box>
    </Layout>
  );
};

export default Menu;
