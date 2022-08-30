import { Box } from "@mui/material";
import Image from "next/image";
import Navbar from "../navbar";

const Header = () => {

  return (
    <Box style={{ backgroundColor: "#005e9e", borderTop: "5px solid #f2b035", position: 'fixed', width: '100%', zIndex: 2 }}>
      <Box maxWidth={1140} margin="auto" padding={2} display="flex" justifyContent="space-between" alignItems="center" top={2}>
        <a href="https://www.meiaentrada.org.br">
          <Image
            width={220}
            height={80}
            src="https://testejae.s3.amazonaws.com/logo-meia-entrada.1880ce37.svg"
          />
        </a>
      <Navbar />
      </Box>
    </Box>
  );
};

export default Header;
