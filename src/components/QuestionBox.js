import { Box } from "@mui/system";
import React from "react";

export default function QuestionBox(props) {
  return (
    
    <Box
      variant="outlined"
      display="flex"
      justifyContent="space-around"
      alignItems="center"
      minHeight="50vh"
      minWidth="30vw"
      sx={{
        textAlign: "center",
        border: "1px solid #ccc",
        flexDirection: "column",
        position:"absolute",
        top:"20%",
        left:"35%",
        margin:"auto",
        bgcolor:"#bbb"
      }}
    >
     {props.children}
    </Box>
    
  );
}
