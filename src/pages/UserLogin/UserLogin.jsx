import {
  Box,
  Button,
  FormControl,
  IconButton,
  InputAdornment,
  InputBase,
  InputLabel,
  OutlinedInput,
  Snackbar,
  Stack,
  TextField,
  Typography,
} from "@mui/material";
import React, { useState } from "react";
import styles from "./UserLogin.module.css";
import AppleIcon from "@mui/icons-material/Apple";
import Logo from "../../assets/Linkedin-logo2.png";
import {ReactComponent as GoogleIcon} from "../../assets/icons-google.svg";
import {ReactComponent as LinkIcon} from "../../assets/link-icon.svg";
import CloseIcon from '@mui/icons-material/Close';
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import validator from "validator";
import Footer from "../../components/Footer/Footer";
import { loginUsers } from "../../redux/slice/login/loginAction";



const UserLogin = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  

  const [showPassword, setShowPassword] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");
  const [emailErrorMsg, setEmailErrorMsg] = useState("");
  const [navigation, setNavigation] = useState(true)

  const [open, setOpen] = React.useState(false);
  const [conflict, setConflict] = React.useState(false)
  const [invalid, setInvalid] = React.useState(false)
  const [err, setErr] = React.useState(false)
  const [inputs, setInputs] = useState({ email: "", password: "" });
  

  const validate = (value) => {
    if (
      validator.isStrongPassword(value, {
        minLength: 6,
        minLowercase: 1,
        minUppercase: 1,
        minNumbers: 1,
        minSymbols: 1,
      })
    ) {
      setErrorMessage("");
      setNavigation(true)
    } else {
      setErrorMessage("Is Not a valid Password");
      setNavigation(false)
    }
  };

  const handleClickShowPassword = () => setShowPassword((show) => !show);

  const handleMouseDownPassword = (event) => {
    event.preventDefault();
  };
  const handleClose = (reason) => {
    if (reason === 'clickaway') {
      return;
    }
    setOpen(false);
    setConflict(false)
    setInvalid(false)
    setErr(false)
  };
  const action = (
    <React.Fragment>
      
      <IconButton
        size="small"
        aria-label="close"
        color="inherit"
        onClick={handleClose}
      >
        <CloseIcon fontSize="small" />
      </IconButton>
    </React.Fragment>
  );

  const handleEmail = (e) => {
    setInputs({ ...inputs, email: e.target.value })
    let emailRegex = /[a-z0-9]+@[a-z]+\.[a-z]{2,3}/;
    if (!emailRegex.test(e.target.value)) {
      setEmailErrorMsg("Please enter a valid email address.");
      setNavigation(false)
    } else {
      setEmailErrorMsg("");
      setNavigation(true)
    };
  };
  const handlePassword = (e) => {
    setInputs({ ...inputs, password: e.target.value });
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    if(navigation === false){
      alert('Enter Valid Credentials')
    }
    else{
      console.log(inputs);
      dispatch(loginUsers(inputs));
      navigate("/");
    }
  };

  return (
    <Stack
      direction="column"
      justifyContent="space-between"
      alignItems="center"
      className={styles.loginPage}
      sx={{ backgroundColor: "#fff", width: '100%', height: '100%' }}
    >
      <Stack
        direction="row"
        justifyContent="flex-start"
        alignItems="flex-start"
        sx={{
          width: "60%",
          marginLeft: "-114px",
          marginTop: "32px",
        }}
      >
        <img src={Logo} alt="Logo" className={styles.loginLogo} />
      </Stack>

      <Box className={styles.loginFormBox}>
        <Stack
          direction="column"
          justifyContent="space-between"
          alignItems="center"
          className={styles.loginForm}
        >
          <Typography
            align="left"
            sx={{
              width: "100%",
              fontFamily:
                "system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif ",
              fontWeight: "600",
              fontSize: "32px",
            }}
          >
            Sign in
          </Typography>
          <Typography
            paragraph="true"
            align="left"
            sx={{
              width: "100%",
              fontFamily: "system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif ",
              fontSize: "14px",

            }}
          >
            Stay updated on your professional world
          </Typography>

          <form onSubmit={(e) => {handleSubmit(e)}}>
          <TextField
            label="Email"
            // variant="filled"
            sx={{
              width: "100%",
              fontFamily:
                "system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif ",
              fontWeight: "400",
              fontSize: "32px",
              position: "relative",
              zIndex: "1",
              borderRadius: "4px !important",
              background: "none",
            }}
            value={inputs.email}
            onChange={(e) => {handleEmail(e)}}
          />
          <Typography style={{ color: "red" }}>{emailErrorMsg}</Typography>
          <FormControl sx={{ width: "100%", display: 'flex', alignItems: 'center' }} variant="standard">
            
          <InputLabel sx={{padding: '7px 15px'}} htmlFor="standard-adornment-password">
              Password
            </InputLabel>
            <InputBase
              inputProps={{
                style: {
                  
                  height: "3px",
                  borderWidth: "1px",
                  
                  padding: "14px 16px 14px 16px",
                },
              }}
              sx={{
                marginTop: '10px',
                paddingRight: "0",
                border: '1px solid #dadada',
                borderRadius: '4px',
                height: '58px'
              }}
            value={inputs.password}
            disableUnderline={true}
            onChange={(e) => {
              handlePassword(e)
              validate(e.target.value)
            }}
              type={showPassword ? "text" : "password"}
              endAdornment={
                
                <InputAdornment position="end">
                  <Button
                    aria-label="toggle password visibility"
                    onClick={handleClickShowPassword}
                    onMouseDown={handleMouseDownPassword}
                    sx={{
                      textTransform: "none",
                      fontSize: "16px",
                      fontWeight: 500,
                      fontFamily:
                        '-apple-system, system-ui, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", "Fira Sans", Ubuntu, Oxygen, "Oxygen Sans", Cantarell, "Droid Sans", "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Lucida Grande", Helvetica, Arial, sans-serif',

                      "&:hover": { background: "none", border: "none" },
                    }}
                  >
                    {showPassword ? "Hide" : "Show"}
                  </Button>
                </InputAdornment>
              }
            />
            <Typography paragraph='true'>
              {errorMessage === "" ? null : (
                <span
                  style={{
                    fontWeight: "normal",
                    color: "red",
                  }}
                >
                  {errorMessage}
                </span>
              )}
            </Typography>
          </FormControl>

          <Typography
            align="left"
            sx={{
              color: "#0b66c2",
              fontWeight: "500",
              width: "100%",
              marginTop: "10px",
              cursor: "pointer",
              fontFamily:
                '-apple-system, system-ui, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", "Fira Sans", Ubuntu, Oxygen, "Oxygen Sans", Cantarell, "Droid Sans", "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Lucida Grande", Helvetica, Arial, sans-serif',
            }}
          >
            Forgot password?
          </Typography>

          <Button
            variant="contained"
            style={{
              textTransform: "capitalize",
              width: "100%",
              boxShadow: "none",
              height: "min-content",
              minHeight: "48px",
              borderRadius: "28px",
              padding: "10px 24px 10px 24px",
              textAlign: "center",
              fontSize: "16px",
              fontWeight: 500,
              marginTop: "20px",
              fontFamily:
                '-apple-system, system-ui, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", "Fira Sans", Ubuntu, Oxygen, "Oxygen Sans", Cantarell, "Droid Sans", "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Lucida Grande", Helvetica, Arial, sans-serif',
              backgroundColor: "#0a66c2",
            }}
            type="submit"
          >
            Sign in
          </Button>
          

          <Box className={styles.formDivider}>
            <span>
              <span className={styles.dividerLine}></span>
            </span>
            <span className={styles.dividerTextContent}>
              <span className={styles.dividerText}>or</span>
            </span>
          </Box>
          <Box>
              <p className={styles.loginText}>
                By clicking to Continue, you agree to the LinkedIn's
                <span className={styles.loginTextSpan}> User Agreement</span>,
                <span className={styles.loginTextSpan}> Privacy Policy</span>,
                and <span className={styles.loginTextSpan}>Cookie Policy</span>.
              </p>
            </Box>
          
            <Box className={styles.thirdPartyContainerLogin}>
              <Button
                variant="outlined"
                startIcon={<GoogleIcon style={{width: '20px', height: '20px'}} />}
                className={styles.thirdPartyBtns}
              >
                Continue with Google
              </Button>
            </Box>
            <Box className={styles.thirdPartyContainerLogin}>
              <Button
                variant="outlined"
                startIcon={
                  <AppleIcon
                    style={{ width: "21px", height: "21px", minWidth: "18px" }}
                  />
                }
                className={styles.thirdPartyBtns}
              >
                Sign in with Apple
              </Button>
            </Box>

            <Box className={styles.thirdPartyContainerLogin}>
              <Button
                variant="outlined"
                startIcon={
                  <LinkIcon
                    style={{ width: "21px", height: "21px", minWidth: "18px" }}
                  />
                }
                className={styles.thirdPartyBtns}
              >
                Sign in with a one-time link
              </Button>
            </Box>
            <Box className={styles.thirdPartyContainerLogin}>
              <Button variant="outlined" className={styles.thirdPartyBtns}>
                Sign in with a passkey
              </Button>
            </Box>
            </form>
        </Stack>
      </Box>
      
      <Box>
        <Typography className={styles.loginFooterText}>
          New to LinkedIn?{" "}
          <span
            className={styles.loginFooterTextBtn}
            onClick={() => navigate("/register")}
          >
            Join Now
          </span>{" "}
        </Typography>
      </Box>

        <Footer />
      <Snackbar
        open={open}
        autoHideDuration={1000}
        onClose={handleClose}
        message="Logged in Successfully"
        action={action} 
      />
        <Snackbar
        open={invalid}
        autoHideDuration={3000}
        onClose={handleClose}
        message="Invalid Credentials"
        action={action} 
      />
      <Snackbar
        open={conflict}
        autoHideDuration={3000}
        onClose={handleClose}
        message={"User does not exists! Kindly signup"}
        action={action}
      />
      <Snackbar
        open={err}
        autoHideDuration={4000}
        onClose={handleClose}
        message={"Error Occured! Try Again"}
        action={action}
      />
    </Stack>
  );
};

export default UserLogin;
