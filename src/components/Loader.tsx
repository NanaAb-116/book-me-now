import CircularProgress from "@mui/material/CircularProgress";
import Box from "@mui/material/Box";
import { Backdrop } from "@mui/material";

const Loader = () => {
  return (
    <Backdrop open={true}>
      <Box sx={{ display: "flex" }}>
        <CircularProgress />
      </Box>
    </Backdrop>
  );
};

export default Loader;
