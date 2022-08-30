import * as React from "react";
import { Box, Button, Menu, MenuItem, Fade } from "@mui/material";
import Link from "next/link";
import { StyledBurger, Span, List, FadeIn } from "./styles";

const Navbar = () => {
  const [firstMenu, setFirstMenu] = React.useState<null | HTMLElement>(null);
  const [secondMenu, setSecondMenu] = React.useState<null | HTMLElement>(null);
  const [open, setOpen] = React.useState(false);

  const open1 = Boolean(firstMenu);
  const open2 = Boolean(secondMenu);

  const handleClick1 = (event: React.MouseEvent<HTMLElement>) => {
    setFirstMenu(event.currentTarget);
  };

  const handleClose1 = () => {
    setFirstMenu(null);
  };

  const handleClick2 = (event: React.MouseEvent<HTMLElement>) => {
    setSecondMenu(event.currentTarget);
  };

  const handleClose2 = () => {
    setSecondMenu(null);
  };

  const Burger = ({ open, setOpen }: any) => {
    return (
      <StyledBurger onClick={setOpen}>
        <div />
        <div />
        <div />
      </StyledBurger>
    );
  };

  return (
    <Box style={{ backgroundColor: "#005e9e", height: "100%" }}>
      <Box
        style={{
          backgroundColor: "#005e9e",
          alignItems: "center",
          display: "flex",
        }}
      >
        <List open={open}>
          <Box>
            <Button
              id="fade-button"
              aria-controls={open1 ? "fade-menu" : undefined}
              aria-haspopup="true"
              aria-expanded={open1 ? "true" : undefined}
              onClick={handleClick1}
              style={{
                color: "white",
                fontWeight: "bold",
                position: "relative",
              }}
            >
              Lei da Meia-entrada
              <Span />
            </Button>
            <Menu
              id="fade-menu"
              MenuListProps={{
                "aria-labelledby": "fade-button",
              }}
              anchorEl={firstMenu}
              open={open1}
              onClose={handleClose1}
              TransitionComponent={Fade}
            >
              <Link href="https://meiaentrada.org.br/lei">
                <MenuItem onClick={handleClose1}>A Lei</MenuItem>
              </Link>
              <Link href="https://meiaentrada.org.br/lei/padraonacional">
                <MenuItem onClick={handleClose1}>Padrão Nacional</MenuItem>
              </Link>
              <Link href="https://meiaentrada.org.br/lei/comocomunicar">
                <MenuItem onClick={handleClose1}>Como Funciona</MenuItem>
              </Link>
            </Menu>
          </Box>
          <Box>
            <Button
              id="fade-button"
              aria-controls={open2 ? "fade-menu" : undefined}
              aria-haspopup="true"
              aria-expanded={open2 ? "true" : undefined}
              onClick={handleClick2}
              style={{ color: "white", fontWeight: "bold" }}
            >
              Validação
              <Span />
            </Button>
            <Menu
              id="fade-menu"
              MenuListProps={{
                "aria-labelledby": "fade-button",
              }}
              anchorEl={secondMenu}
              open={open2}
              onClose={handleClose2}
              TransitionComponent={Fade}
            >
              <Link href="https://meiaentrada.org.br/validador/itens-de-seguranca">
                <MenuItem onClick={handleClose2}>Itens de segurança</MenuItem>
              </Link>
              <Link href="https://meiaentrada.org.br/validador/integracao">
                <MenuItem onClick={handleClose2}>Integração</MenuItem>
              </Link>
            </Menu>
          </Box>
          <Box>
            <Link href="https://meiaentrada.org.br/chaves-publicas">
              <Button style={{ color: "white", fontWeight: "bold" }}>
                Chaves públicas
              </Button>
            </Link>
          </Box>
          <Box>
            <Link href="https://meiaentrada.org.br/perguntas-e-respostas">
              <Button style={{ color: "white", fontWeight: "bold" }}>
                FAQ
              </Button>
            </Link>
          </Box>
          <Box>
            <Link href="https://meiaentrada.org.br/noticias">
              <Button style={{ color: "white", fontWeight: "bold" }}>
                Notícias
              </Button>
            </Link>
          </Box>
        </List>
      </Box>
      <Burger setOpen={() => setOpen(!open)} />
    </Box>
  );
};

export default Navbar;
