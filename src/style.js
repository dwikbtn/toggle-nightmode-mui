import { makeStyles } from "@material-ui/core/styles";

const useStyle = makeStyles((theme) => ({
  container: {
    marginTop: "20px",
    backgroundColor: theme.palette.background.paper,
  },
  toggleBtn: {
    marginBottom: "20px",
  },
  cardItem: {
    padding: "5px",
  },
}));

export default useStyle;
