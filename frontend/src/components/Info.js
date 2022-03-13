import React, { useState, useEffect } from "react";
import { Grid, Button, Typography, Icon, IconButton } from "@material-ui/core";
import { NavigateBefore, NavigateNext } from "@material-ui/icons";
import { Link } from "react-router-dom";

const pages = {
  JOIN: "pages.join",
  CREATE: "pages.create",
};

function joinInfo() {
  return "join page";
}
function createInfo() {
  return "create page";
}

export default function Info(props) {
  const [page, setPage] = useState(pages.JOIN);

  useEffect(() => {console.log('ran')
    return () => console.log("cleanup")    
})
  return (
    <Grid container spacing={1}>
      <Grid item xs={12} align="center">
        <Typography variant="h3" compact="h3">
          What is Curatify 2?
        </Typography>
      </Grid>
      <Grid item xs={12} align="center">
        <Typography variant="body1">
          {page === pages.JOIN ? joinInfo() : createInfo()}
        </Typography>
      </Grid>
      <Grid item xs={12} align="center">
        <IconButton
          onClick={() => {
            page === pages.CREATE ? setPage(pages.JOIN) : setPage(pages.CREATE);
          }}
        >
          {page === pages.CREATE ? <NavigateBefore /> : <NavigateNext />}
        </IconButton>
      </Grid>
      <Grid item xs={12} align="center">
        <Button color="secondary" variant="contained" to="/" component={Link}>
          Back
        </Button>
      </Grid>
    </Grid>
  );
}
