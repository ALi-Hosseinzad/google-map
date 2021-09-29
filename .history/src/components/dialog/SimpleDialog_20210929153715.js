import React, { useEffect, useState } from "react";
import { blue } from "@mui/material/colors";
import {
  Button,
  DialogActions,
  DialogContent,
  MenuItem,
  DialogTitle,
  Dialog,
  Typography,
  FormControl,
  TextField,
  Grid,
  Slide,
} from "@mui/material";
import { useTheme } from "@mui/material/styles";
import useMediaQuery from "@mui/material/useMediaQuery";
import { useLocDispatch } from "../../context/dispatch/Dispatch";
import { LOC_FETCH } from "../../context/action/Action";
import Map from "../map/Map";
import useStyles from "./Styles";

const Transition = React.forwardRef(function Transition(props, ref) {
  return <Slide direction="up" ref={ref} {...props} />;
});
const SimpleDialog = (props) => {
  var update = require("immutability-helper");
  const { setData, open, setOpen, setUpdate, add, edit, record, data } = props;
  const classes = useStyles();
  const locDispatch = useLocDispatch();
  const theme = useTheme();
  const matches = useMediaQuery(theme.breakpoints.down("sm"));
  const [input, setInput] = useState({
    title: "",
    type: "",
    description: "",
    map: "",
  });
  const [openMap, setOpenMap] = useState(false);

  useEffect(() => {
    if (!!edit) {
      setInput(record);
    }
  }, [edit]);
  const handleClose = () => {
    setUpdate(true);
    setOpen(false);
  };
  const handleChange = (e) => {
    const { name, value } = e.target;
    setInput({
      ...input,
      [name]: value,
    });
  };
  const handleOpen = () => {
    setOpenMap(true);
  };
  const handleCloseModal = () => {
    setOpenModal(false);
  };
  const handleClick = (e) => {
    e.preventDefault();
    if (!!edit) {
      var array = data;
      console.log(array);
      var commentIndex = array.findIndex(function (c) {
        return c.title === record.title;
      });
      // console.log(array[commentIndex]);
      var updatedComment = update(array[commentIndex], {
        title: { $set: input.title },
        type: { $set: input.type },
        description: { $set: input.description },
        map: { $set: input.map },
      });

      var newData = update(array, {
        $splice: [[commentIndex, 1, updatedComment]],
      });
      setData(newData);
      console.log(data);
      locDispatch({
        type: LOC_FETCH.SUCCESS,
        payload: {
          location: data,
        },
      });
    } else {
      setData((prevData) => [...prevData, input]);
      console.log(data);
      locDispatch({
        type: LOC_FETCH.SUCCESS,
        payload: {
          location: data,
        },
      });
    }
    // console.log(input);
    setUpdate(true);
    setOpen(false);
    setInput({
      title: "",
      type: "",
      description: "",
      map: "",
    });
  };
  const Items = [
    {
      value: "hospital",
      label: "hospital",
    },
    {
      value: "library",
      label: "library",
    },
    {
      value: "shop",
      label: "shop center",
    },
    {
      value: "company",
      label: "company",
    },
    {
      value: "restaurant",
      label: "restaurant",
    },
  ];
  // console.log(input);
  return (
    <Dialog
      open={open}
      fullWidth={true}
      maxWidth={"lg"}
      keepMounted
      fullScreen={matches ? true : false}
      onClose={handleClose}
      TransitionComponent={Transition}
    >
      {openMap ? (
        <div>
          <Map
            setInput={setInput}
            setOpenMap={setOpenMap}
            map={input.map}
            record={record}
            edit={edit}
          />
        </div>
      ) : (
        <>
          <DialogTitle id="alert-dialog-title">
            {!!edit ? "Edit The Location" : "Add New Location"}
          </DialogTitle>
          <DialogContent>
            <form>
              <Grid container spacing={2}>
                <Grid
                  item
                  className={classes.grid}
                  xs={12}
                  sm={12}
                  md={10}
                  lg={6}
                  xl={6}
                >
                  <FormControl sx={{ m: 1, width: 300, mt: 3 }}>
                    <Typography variant="body1">Location title:</Typography>
                    <TextField
                      id="outlined-basic"
                      variant="outlined"
                      onChange={handleChange}
                      autoFocus
                      placeholder={!edit && "Location title"}
                      value={input.title}
                      name="title"
                    />
                    <Typography variant="body1">Location type:</Typography>
                    <TextField
                      id="outlined-select-currency"
                      select
                      value={input.type}
                      name="type"
                      onChange={handleChange}
                    >
                      {Items.map((option, index) => (
                        <MenuItem key={index} value={option.value}>
                          {option.label}
                        </MenuItem>
                      ))}
                    </TextField>
                  </FormControl>
                </Grid>
                <Grid item xs={12} sm={12} md={10} lg={6} xl={6}>
                  <Typography variant="body1">
                    Please select your Location in the map :
                  </Typography>
                  <div className={classes.map} onClick={handleOpen}>
                    <img src={"/map.jpg"} alt="map" />
                  </div>
                </Grid>
                <Grid itemxs={12} sm={12} md={10} lg={6} xl={6}>
                  <Typography variant="body1">Location description:</Typography>
                  <FormControl sx={{ m: 1, width: matches ? 300 : 400, mt: 3 }}>
                    <TextField
                      id="outlined-multiline-static"
                      multiline
                      rows={4}
                      onChange={handleChange}
                      value={input.description}
                      name="description"
                    />
                  </FormControl>
                </Grid>
              </Grid>
            </form>
          </DialogContent>
          <DialogActions>
            <Button onClick={handleClose} variant="outlined">
              Cancel
            </Button>
            <Button
              type="submit"
              onClick={handleClick}
              autoFocus
              variant="outlined"
            >
              {add ? "Add" : "edit"}
            </Button>
          </DialogActions>
        </>
      )}
    </Dialog>
  );
};
export default SimpleDialog;
