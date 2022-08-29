import {
  Box,
  Grid,
  Divider,
  List,
  ListItem,
  TableContainer,
  Table,
  TableHead,
  TableCell,
  TableRow,
  TableBody,
  Typography,
} from "@mui/material";

const Footer = () => {
  return (
    <Box
      style={{
        borderTop: "4px solid #f2b035",
        background: "#222f40",
        // height: "350px",
        padding: 15,
      }}
    >
      <Typography
        style={{
          fontFamily: "Rubik,sans-serif",
          fontWeight: 500,
          fontSize: "1.9em",
          color: "white",
          textAlign: "center",
          margin: "1rem 0",
        }}
      >
        meiaentrada.org.br
      </Typography>
      <Grid
        container
        alignContent="center"
        maxWidth="1140px"
        margin="auto"
        color="#f2b035"
        padding="0 20px"
        spacing={2}
      >
        <Grid item xs={12} sm={4} md={3}>
          <Box marginTop={2}>
            <Typography>Home</Typography>
          </Box>
          <Box marginTop={2}>
            <Typography>Lei da Meia-entrada</Typography>
          </Box>
          <Box marginTop={2}>
            <Typography>Chaves públicas</Typography>
          </Box>
          <Box marginTop={2}>
            <Typography>FAQ</Typography>
          </Box>
        </Grid>
        <Grid item xs={12} sm={3} md={3}>
          <Box marginTop={2}>
            <Typography>Notícias</Typography>
          </Box>
          <Box marginTop={2}>
            <Typography>Termos de Uso e Política de Privacidade</Typography>
          </Box>
        </Grid>
      </Grid>
      <Typography
        style={{
          fontFamily: "Rubik,sans-serif",
          fontWeight: 500,
          fontSize: "18px",
          color: "#f2b035",
          textAlign: "center",
          margin: "1rem 0",
        }}
      >
        @Meiaentrada.org.br - Todos os Direitos Reservados 2022
      </Typography>
    </Box>
  );
};

export default Footer;