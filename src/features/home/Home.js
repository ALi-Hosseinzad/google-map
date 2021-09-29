import { Button, Grid, IconButton, Typography } from "@mui/material";
import React, { useEffect, useState } from "react";
import AddIcon from "@mui/icons-material/Add";
import CustomTable from "../../components/customTable/CustomTable";
import SimpleDialog from "../../components/dialog/SimpleDialog";
import EditIcon from "@mui/icons-material/Edit";
import DeleteIcon from "@mui/icons-material/Delete";
import { useLocState } from "../../context/dispatch/Dispatch";
import DeleteDialog from "../../components/dialog/DeleteDialog";
import useStyles from "./HomeStyles";

export default function Home() {
  const classes = useStyles();
  const [state, setState] = useState({
    pageSize: 10,
    pageNumber: 1,
    is_fetch: true,
    edit: false,
    add: false,
    delete: false,
    record: null,
  });
  const [data, setData] = useState([]);
  const [update, setUpdate] = useState(false);
  const [open, setOpen] = useState(false);
  const [openDelete, setOpenDelete] = useState(false);
  const location = useLocState().location;
  useEffect(() => {
    if (!!location) {
      const value =
        typeof location === "object" ? location : JSON.parse(location);
      setData(value);
    }
  }, [location]);
  // console.log(location);
  const handleEdit = (val) => {
    setState((prevState) => ({
      ...prevState,
      edit: true,
      add: false,
      record: val,
    }));
    setOpen(true);
  };
  const handleDelete = (val) => {
    setState((prevState) => ({
      ...prevState,
      delete: true,
      edit: false,
      add: false,
      record: val,
    }));
    setOpenDelete(true);
  };
  const TableOption = [
    {
      name: "number",
      render: (record, i, index) => <Typography>{index + 1}</Typography>,
    },
    {
      name: "title",
      title: "Title",

      render: (record, index) => <Typography>{record.title}</Typography>,
    },

    {
      name: "type",
      title: "Type",
      render: (record, index) => {
        return <Typography>{record.type}</Typography>;
      },
    },
    {
      name: "description",
      title: "Description",
      render: (record, index) => {
        return <Typography>{record.description}</Typography>;
      },
    },
    {
      name: "action",
      title: "action",
      render: (record, index) => {
        return (
          <div className={classes.action}>
            <IconButton onClick={() => handleEdit(record)}>
              <EditIcon />{" "}
            </IconButton>
            <IconButton onClick={() => handleDelete(record)}>
              <DeleteIcon />
            </IconButton>
          </div>
        );
      },
    },
  ];
  const handleClick = () => {
    setState((prevState) => ({
      ...prevState,
      add: true,
    }));
    setOpen(true);
  };
  return (
    <div className={classes.root}>
      <Grid container spacing={2}>
        <Grid item xs={12} sm={12} md={10} lg={6} xl={6}>
          <Typography variant="h6">Location List</Typography>
        </Grid>
        <Grid
          item
          xs={12}
          sm={12}
          md={10}
          lg={6}
          xl={6}
          className={classes.grid}
        >
          <Button size="small" onClick={handleClick} variant="contained">
            <AddIcon /> Add Location
          </Button>
          <SimpleDialog
            setData={setData}
            data={data}
            open={open}
            setOpen={setOpen}
            setUpdate={setUpdate}
            add={state.add}
            edit={state.edit}
            record={state.record}
          />
          <DeleteDialog
            data={data}
            setData={setData}
            open={openDelete}
            setOpenDelete={setOpenDelete}
            setUpdate={setUpdate}
            record={state.record}
          />
        </Grid>
        <Grid item xs={12} sm={12} md={10} lg={12} xl={12}>
          {data.length > 0 && (
            <CustomTable
              TableOption={TableOption}
              data={data}
              is_fetch={state?.is_fetch}
              pageNumber={state?.pageNumber}
              count={state?.count}
              pageSize={state?.pageSize}
              pagination={true}
              type="sticky"
            />
          )}
        </Grid>
      </Grid>
    </div>
  );
}
