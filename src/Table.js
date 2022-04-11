import React from "react";
import { DataGrid } from "@mui/x-data-grid";
import { Container, Box, Paper } from "@mui/material";
import { useNavigate } from "react-router-dom";

const rows = [
  {
    id: 1,
    position: "Front end developer",
    company: "Photoshop",
    type: "full time",
    location: "NY",
    status: "active",
  },
  {
    id: 2,
    position: "Backend developer",
    company: "Lane office",
    type: "full time",
    location: "NC",
    status: "inactive",
  },
  {
    id: 3,
    position: "Data engineer",
    company: "Mind gym",
    type: "Contract",
    location: "GA",
    status: "inactive",
  },
  {
    id: 4,
    position: "React developer",
    company: "Meadow office",
    type: "full time",
    location: "MN",
    status: "inactive",
  },
  {
    id: 5,
    position: "Project manager",
    company: "Talent Burst",
    type: "part time",
    location: "OR",
    status: "active",
  },
  {
    id: 6,
    company: "Akorbi",
    position: "Business Analyst",
    type: "full time",
    location: "CT",
    status: "Inactive",
  },
  {
    id: 7,
    company: "F.H Alexander",
    position: "Product owner",
    type: "part time",
    location: "SC",
    status: "inactive",
  },
  {
    id: 8,
    company: "Sweet brook",
    position: "Agile project manager",
    type: "contract",
    location: "NJ",
    status: "active",
  },
];

const columns = [
  {
    field: "id",
    headerName: "ID",
    flex: 1,
  },
  {
    headerName: "Position",
    field: "position",
    flex: 1,
  },
  {
    field: "company",
    headerName: "Company",
    flex: 1,
  },

  {
    field: "type",
    headerName: "Type",
    flex: 1,
  },
  {
    field: "location",
    headerName: "Location",
    flex: 1,
  },
  {
    field: "status",
    headerName: "Status",
    flex: 1,
  },
];
const Table = () => {
  let navigate = useNavigate();
  // const _navigateToPage = (pageNumber) => {
  // const page = pageNumber;
  // const title = "Hello India";
  // navigate("/jd", {
  // state: {
  // page,
  // title,
  // },
  // });
  // };

  // const handleClick = (event, cellValues) => {
  //   console.log(cellValues.row);
  // };

  const handleCellClick = (param, event) => {
    event.stopPropagation();
    const jobid = param.row.id;
    //const jobposition = param.row.position;
    console.log("handleCellClick", param.row.id);
    navigate("/jobdes", {
      state: {
        jobid,
        //jobposition,
      },
    });
  };

  const handleRowClick = (param, event) => {
    event.stopPropagation();
    //console.log("handleRowClick", param);
  };

  return (
    <>
      <Container>
        <Paper component={Box} width={1} height={500}>
          <DataGrid
            // checkboxSelection={true}
            rows={rows}
            columns={columns}
            pageSize={5}
            onCellClick={handleCellClick}
            onRowClick={handleRowClick}
          />
        </Paper>
      </Container>
    </>
  );
};
export default Table;
