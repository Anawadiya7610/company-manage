import { React, useState } from "react";
import { Button, Paper, Box } from "@material-ui/core";
import "../../index.css";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import { makeStyles, OutlinedInput } from "@material-ui/core";
import EmailIcon from "@mui/icons-material/Email";
import LockIcon from "@mui/icons-material/Lock";
import InputAdornment from "@mui/material/InputAdornment";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";


const useStyle = makeStyles((theme) => ({
  paper: {
    width: "70%",
    height: "90vh",
    display: "flex",
    justifyContent: "space-evenly",
    alignItems: "center",
    borderRadius: "14px",
    position: "relative",
  },
  input: {
    width: "100%",
    borderRadius: "34px",
    marginBottom: "14px",
    background: "#E6E6E6",
  },
  paragraphFont: {
    width: "100%",
    display: "flex",
    fontSize: "14px",
    textAlign: "center",
    justifyContent: "center",
    color: "gray",
    marginTop: "14px",
    cursor: "pointer",
  },

  button: {
    background: "#57B846",
    width: "100%",
    borderRadius: "34px",
    color: "#fff",
    boxShadow: "none",
    height: "3rem",
    "&:hover": {
      backgroundColor: "#333",
    },
  },
}));

function Login(props) {
  const { userList } = props;
  console.log(userList);
  const classes = useStyle();

  const handleSubmit = (e) => {
    e.preventDefault();

    userList(values);
  };

  const [values, setValues] = useState({ email: "", password: "" });

  const handleChange = (e) => {
    setValues({
      ...values,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <Grid
      container
      alignItems="center"
      justifyContent="center"
      className="login"
    >
      <Paper className={classes.paper}>
        <Box
          sx={{ width: 50, display: "flex", alignItems: "center", height: 90 }}
          className="boxImg"
        >
          <div className="img">
            <img
              src="https://colorlib.com/etc/lf/Login_v1/images/img-01.png"
              alt="Login Image"
            />
          </div>
        </Box>
        <Box
          sx={{
            display: "flex",
            width: 80,
            height: 100,
          }}
          className="formBox"
        >
          <form className="form">
            <div className="loginDiv">
              <Typography variant="h5">
                <span className="adminSpan">Member Login</span>
              </Typography>
            </div>
            <div className="formContent">
              <OutlinedInput
                id="outlined-adornment-weight"
                className={classes.input}
                fullWidth
                size="small"
                margin="normal"
                required
                placeholder="Email"
                onChange={handleChange}
                startAdornment={
                  <InputAdornment classname="iconInput" position="start">
                    {<EmailIcon />}
                  </InputAdornment>
                }
              />

              <OutlinedInput
                id="outlined-adornment-weight"
                className={classes.input}
                fullWidth
                size="small"
                margin="normal"
                required
                onChange={handleChange}
                startAdornment={
                  <InputAdornment classname="iconInput" position="start">
                    {<LockIcon />}
                  </InputAdornment>
                }
                placeholder=" Password"
                // aria-describedby="outlined-weight-helper-text"
              />

              <Button
                variant="contained"
                className={classes.button}
                type="submit"
              >
                LOGIN
              </Button>

              <Typography variant="p" className={classes.paragraphFont}>
                Forgot <span className="username"> Username / Password?</span>
              </Typography>
            </div>
          </form>
          <div className="create">
            <Typography variant="p">
              <span className="createAccount"> Create your Account </span>
            </Typography>
            <ArrowForwardIcon style={{ cursor: "pointer" }} />
          </div>
        </Box>
      </Paper>
    </Grid>
  );
}

export default Login;
