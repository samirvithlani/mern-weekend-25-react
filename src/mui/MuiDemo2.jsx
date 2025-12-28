import { Box, Card, Grid, IconButton, Tooltip } from "@mui/material";
import React from "react";
import DeleteIcon from '@mui/icons-material/Delete';

export const MuiDemo2 = () => {
  return (
    <Box sx={{ mt: 2 }}>
      {/* <Grid container spacing={2}>
        <Grid
          size={8}
          sx={{ height: "100px", backgroundColor: "palegoldenrod" }}
        ></Grid>
        <Grid
          size={4}
          sx={{ height: "100px", backgroundColor: "Highlight" }}
        ></Grid>

        <Grid
          size={4}
          sx={{ height: "100px", backgroundColor: "palegoldenrod" }}
        ></Grid>
        <Grid
          size={4}
          sx={{ height: "100px", backgroundColor: "Highlight" }}
        ></Grid>
        <Grid
          size={4}
          sx={{ height: "100px", backgroundColor: "palegoldenrod" }}
        ></Grid>
      </Grid> */}

      <Grid container spacing={2}>
        <Grid
          size={{ xs: 12, sm: 12, md: 8, lg: 8, xl: 8 }}
          sx={{ height: "100px", backgroundColor: "palegoldenrod" }}
        >
            <Card>
                <Tooltip title="delete user">
                <IconButton>
                    <DeleteIcon/>
                </IconButton>
                </Tooltip>
            </Card>

        </Grid>
        <Grid
          size={{ xs: 12, sm: 12, md: 4, lg: 4, xl: 4 }}
          sx={{ height: "100px", backgroundColor: "Highlight" }}
        ></Grid>

        <Grid
          size={{ xs: 12, sm: 12, md: 4, lg: 4, xl: 4 }}
          sx={{ height: "100px", backgroundColor: "palegoldenrod" }}
        ></Grid>
        <Grid
          size={{ xs: 12, sm: 12, md: 4, lg: 4, xl: 4 }}
          sx={{ height: "100px", backgroundColor: "Highlight" }}
        ></Grid>
        <Grid
          size={{ xs: 12, sm: 12, md: 4, lg: 4, xl: 4 }}
          sx={{ height: "100px", backgroundColor: "palegoldenrod" }}
        ></Grid>
      </Grid>
    </Box>
  );
};
