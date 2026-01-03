import { Box, Button, Typography } from "@mui/material";
import { DataGrid } from "@mui/x-data-grid";
import axios from "axios";
import React, { useEffect, useState } from "react";

export const MuiDataGridDemo2 = () => {
  const [users, setusers] = useState([]);
  const columns = [
    {
      field: "_id",
      headerName: "id",
      width: 160,
    },
    {
      field: "name",
      headerName: "Name",
    },
    {
      field: "email",
      headerName: "Email",
    },
    {
      field: "password",
      headerName: "Password",
    },
    {
      field: "age",
      headerName: "Age",
    },
    {
      field: "ACTION",
      headerName: "ACTION",
      width: 250,
      renderCell: (params) => {
        return (
          <>
            <Button
              onClick={() => {
                alert(params.row._id);
              }}
              color="error"
            >
              DELETE
            </Button>
            <Button
              onClick={() => {
                alert(params.row._id);
              }}
              color="error"
            >
              UPDATE
            </Button>
          </>
        );
      },
    },
  ];
  const getUserData = async () => {
    const res = await axios.get("https://node5.onrender.com/user/user");
    setusers(res.data.data);
  };
  useEffect(() => {
    getUserData();
  }, []);

  return (
    <Box>
      <Typography variant="h3" sx={{ textAlign: "center" }}>
        user data
      </Typography>
      <DataGrid
        columns={columns}
        rows={users}
        getRowId={(row) => row._id}
      ></DataGrid>
    </Box>
  );
};
