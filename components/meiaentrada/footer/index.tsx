import { Box, Grid, Typography } from "@mui/material";

const Footer = () => {
  return (
    <Box
      style={{
        borderTop: "4px solid #f2b035",
        background: "#222f40",
        padding: 15,
      }}
    >
      <Typography
        style={{
          fontFamily: "Rubik sans-serif",
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
      >
        <Grid item xs={12} sm={4} md={3}>
          <Box marginTop={2}>
            <a href="https://www.meiaentrada.org.br">Home</a>
          </Box>
          <Box marginTop={2}>
            <a href="https://meiaentrada.org.br/lei">Lei da Meia-entrada</a>
          </Box>
          <Box marginTop={2}>
            <a href="https://meiaentrada.org.br/chaves-publicas">Chaves públicas</a>
          </Box>
          <Box marginTop={2}>
            <a href="https://meiaentrada.org.br/perguntas-e-respostas">FAQ</a>
          </Box>
        </Grid>
        <Grid item xs={12} sm={3} md={3}>
          <Box marginTop={2}>
            <a href="https://meiaentrada.org.br/noticias">Notícias</a>
          </Box>
          <Box marginTop={2}>
            <a href="https://meiaentrada.org.br/termos">Termos de Uso e Política de Privacidade</a>
          </Box>
        </Grid>
      </Grid>
      <Typography
        style={{
          fontFamily: "Rubik sans-serif",
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
