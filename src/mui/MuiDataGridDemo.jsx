import { Box, Typography } from "@mui/material";
import React from "react";
import { DataGrid } from "@mui/x-data-grid";

export const MuiDataGridDemo = () => {
  const columns = [
    {
      field: "id",
      headerName: "ID",
    },
    {
      field: "firstName",
      headerName: "FIRST NAME",
    },
    {
      field: "lastName",
      headerName: "LAST NAME",
    },
    {
      field: "age",
      headerName: "AGE",
    },
  ];
  const rows = [
    {
      id: 1,
      firstName: "raj",
      lastName: "patel",
      age: 23,
    },
    {
      id: 2,
      firstName: "sarjan",
      lastName: "shah",
      age: 25,
    },
    {
      id: 3,
      firstName: "ajay",
      lastName: "patidar",
      age: 27,
    },
  ];
  return (
    <Box>
      <Typography variant="h3" sx={{ textAlign: "center" }}>
        MUI TABLE
      </Typography>
      <DataGrid rows={rows} columns={columns} />
    </Box>
  );
};
