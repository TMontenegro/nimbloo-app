import React from "react";
import Button from "@material-ui/core/Button";
import AddIcon from "@material-ui/icons/Add";
import TextField from "@material-ui/core/TextField";
import Dialog from "@material-ui/core/Dialog";
import DialogActions from "@material-ui/core/DialogActions";
import DialogContent from "@material-ui/core/DialogContent";
import DialogContentText from "@material-ui/core/DialogContentText";
import DialogTitle from "@material-ui/core/DialogTitle";
import useMediaQuery from "@material-ui/core/useMediaQuery";
import { useTheme, makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles(() => ({
  button: {
    margin: "30px 0",
  },
  rightInput: {
    width: "45%",
  },
  leftInput: {
    width: "45%",
    marginRight: "5%",
  },
  btnSeparator: {
    margin: "20px 0",
  },
}));

export default () => {
  const classes = useStyles();
  const [open, setOpen] = React.useState(false);
  const theme = useTheme();
  const fullScreen = useMediaQuery(theme.breakpoints.down("sm"));

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <div>
      <Button
        variant="contained"
        color="primary"
        size="large"
        className={classes.button}
        startIcon={<AddIcon />}
        onClick={handleClickOpen}
      >
        Nova vistoria
      </Button>

      <Dialog
        fullScreen={fullScreen}
        open={open}
        onClose={handleClose}
        aria-labelledby="responsive-dialog-title"
      >
        <DialogTitle id="responsive-dialog-title">
          {"Nova vistoria"}
        </DialogTitle>
        <DialogContent>
          <div>
            <div>
              <Button
                variant="contained"
                component="label"
                className={classes.leftInput}
              >
                Frontal esquerda
                <input
                  accept="image/*"
                  type="file"
                  style={{ display: "none" }}
                />
              </Button>

              <Button
                variant="contained"
                component="label"
                className={classes.rightInput}
              >
                Frontal direita
                <input
                  accept="image/*"
                  type="file"
                  style={{ display: "none" }}
                />
              </Button>
            </div>
            <div className={classes.btnSeparator}>
              <Button
                variant="contained"
                component="label"
                className={classes.leftInput}
              >
                Traseira esquerda
                <input
                  accept="image/*"
                  type="file"
                  style={{ display: "none" }}
                />
              </Button>

              <Button
                variant="contained"
                component="label"
                className={classes.rightInput}
              >
                Traseira direita
                <input
                  accept="image/*"
                  type="file"
                  style={{ display: "none" }}
                />
              </Button>
            </div>
          </div>
          <div>
            <TextField
              className={classes.leftInput}
              autoFocus
              margin="dense"
              id="model"
              label="Modelo"
              type="text"
            />
            <TextField
              className={classes.rightInput}
              autoFocus
              margin="dense"
              id="year"
              label="Ano"
              type="text"
            />
            <TextField
              className={classes.leftInput}
              autoFocus
              margin="dense"
              id="plaque"
              label="Placa"
              type="text"
            />
            <TextField
              className={classes.rightInput}
              autoFocus
              margin="dense"
              id="chassi"
              label="Chassi"
              type="text"
            />
          </div>
        </DialogContent>
        <DialogActions>
          <Button autoFocus onClick={handleClose} color="primary">
            Cancelar
          </Button>
          <Button onClick={handleClose} color="primary" autoFocus>
            Adicionar
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  );
};
