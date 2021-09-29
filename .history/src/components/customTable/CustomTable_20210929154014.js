import React from "react";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import Grid from "@mui/material/Grid";
import useStyles from "./styles";

const CustomTable = (props) => {
  let {
    className,
    TableOption,
    data,
    is_fetch,
    pageNumber,
    pageSize,
    handleClick,
    paper = true,
    stickyHeader = false,
  } = props;
  const classes = useStyles(props);

  const getCellContent = (row, col, index) => {
    if (col?.render) {
      return col?.render(row, col?.name, index);
    } else {
      return row[col?.name];
    }
  };
  const drawTable = () => {
    return (
      <Grid container spacing={0} direction="column">
        <Grid item className={classes.container}>
          {is_fetch ? (
            data?.length > 0 ? (
              <div className={className}>
                <TableContainer>
                  <Table stickyHeader={stickyHeader} className={classes.table}>
                    <colgroup>
                      {TableOption?.map((item) => (
                        <>
                          <col style={{ width: item?.width }} />
                        </>
                      ))}
                    </colgroup>
                    <TableHead className={classes.tableHead}>
                      <TableRow className={classes.tableRow}>
                        {TableOption?.map((item) => (
                          <TableCell
                            key={item.id}
                            className={classes.tableCell}
                            align={item.align ? item.align : "center"}
                          >
                            {item.title}
                          </TableCell>
                        ))}
                      </TableRow>
                    </TableHead>
                    <TableBody>
                      {pageSize > 0 &&
                        data.map((row, index) => {
                          return (
                            <TableRow
                              key={row?.id}
                              id={row?.currencyName && row?.currencyName}
                              className={classes.tableRow}
                              onClick={handleClick}
                            >
                              {TableOption?.map((item) => (
                                <TableCell
                                  className={classes.tableCell}
                                  align={item?.align ? item?.align : "center"}
                                >
                                  {getCellContent(row, item, index)}
                                </TableCell>
                              ))}
                            </TableRow>
                          );
                        })}
                    </TableBody>
                  </Table>
                </TableContainer>
              </div>
            ) : (
              <span>{"There is no data to display"}</span>
            )
          ) : (
            <span>Loading ...</span>
          )}
        </Grid>
      </Grid>
    );
  };

  return paper ? (
    <Paper className={classes.paper}>{drawTable()}</Paper>
  ) : (
    drawTable()
  );
};

export default CustomTable;
