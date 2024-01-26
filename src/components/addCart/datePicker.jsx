import * as React from "react";
import { DemoItem } from "@mui/x-date-pickers/internals/demo";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { DatePicker } from "@mui/x-date-pickers/DatePicker";
import Box from "@mui/material/Box";
import Alert from "@mui/material/Alert";
import { makeStyles } from "@mui/styles";
const useStyles = makeStyles({
  customDatePicker: {
    "& .MuiCalendar-root": {
      maxHeight: "300px", // Adjust the height as needed
    },
  },
});
export default function ClearableProp() {
  const [cleared, setCleared] = React.useState(false);
  const classes = useStyles();
  React.useEffect(() => {
    if (cleared) {
      const timeout = setTimeout(() => {
        setCleared(false);
      }, 1500);

      return () => clearTimeout(timeout);
    }
    return () => {};
  }, [cleared]);

  return (
    <LocalizationProvider dateAdapter={AdapterDayjs}>
      <Box
        sx={{
          width: "100%",
          height: "100%",
          display: "flex",
          // justifyContent: "center",
          position: "relative",
        }}
      >
        <DatePicker
          sx={{ width: "100%" }}
          className={classes.customDatePicker}
          slotProps={{
            field: { clearable: true, onClear: () => setCleared(true) },
          }}
        />

        {cleared && (
          <Alert
            sx={{ position: "absolute", bottom: 0, right: 0 }}
            severity="success"
          >
            Field cleared!
          </Alert>
        )}
      </Box>
    </LocalizationProvider>
  );
}
