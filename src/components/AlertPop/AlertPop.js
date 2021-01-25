import React from "react";
import { Snackbar } from "@material-ui/core";
import { Alert } from "@material-ui/lab";

const AlertPop = props => {

  return (
    <Snackbar 
      open={props.alert.open}
      autoHideDuration={6000}
      onClose={props.close}
    >
      <Alert onClose={props.close} severity={props.alert.severity}>
        {props.alert.message}
      </Alert>
    </Snackbar>
  );
};

export default AlertPop;