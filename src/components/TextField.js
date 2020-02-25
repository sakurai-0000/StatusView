import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import TextField from "@material-ui/core/TextField";

const useStyles = makeStyles(theme => ({
  root: {
    "& > *": {
      margin: theme.spacing(2),
      width: 100
    }
  }
}));

export default function MultilineTextFields(props) {
  const classes = useStyles();

  const onChange = (label, event) =>{
    props["textField"][label] = event.target.value;
    console.log(props);
    props.setTextField(props["textField"]);
  }

  const labels = ['Management', 'Communication', 'Technique', 'Intelligence', 'Development', 'Humor'];

  return (
    <form className={classes.root} noValidate autoComplete="off">

      {labels.map( (label) =>
        <TextField
          id="standard-basic"
          label={label}
          multiline
          rowsMax="4"
          onChange={(event) => onChange(label,event)}
        />
      )}
    </form>
  );
}
