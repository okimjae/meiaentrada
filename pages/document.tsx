import type { NextPage } from "next";
import Head from "next/head";
import Image from "next/image";
import { Box, Grid, Divider, Typography } from "@mui/material";
import Footer from "../components/meiaentrada/footer";
import Header from "../components/meiaentrada/header.tsx";
import styled from "@emotion/styled";

const Document: NextPage = () => {
  const PEM =
    "MIID8zCCAtsCAQEwgYeggYQwf6R9MHsxCzAJBgNVBAYTAkJSMRMwEQYDVQQKDApJQ1AtQnJhc2lsMSYwJAYDVQQLDB1VTklBTyBOQUNJT05BTCBET1MgRVNUVURBTlRFUzEvMC0GA1UEAwwmTWFyaWEgRWR1YXJkYSBMaWJlcmF0byBkZSBTb3V6YSBMZWl0ZSACAQGggc4wgcukgcgwgcUxCzAJBgNVBAYTAkJSMRMwEQYDVQQKDApJQ1AtQnJhc2lsMRcwFQYDVQQLDA4xNDEyMTk1NzAwMDEwOTEZMBcGA1UECwwQVmlkZW9jb25mZXJlbmNpYTEOMAwGA1UECwwFVkFMSUQxGzAZBgNVBAsMElBlc3NvYSBKdXJpZGljYSBBMzEYMBYGA1UECwwPQUMgVkFMSUQgQlJBU0lMMSYwJAYDVQQDDB1VTklBTyBOQUNJT05BTCBET1MgRVNUVURBTlRFUzANBgkqhkiG9w0BAQUFAAIEAKZ9VzAiGA8yMDIyMDgyNjE0NTE0NVoYDzIwMjMwMzMxMjM1OTU5WjCBzTBGBgVgTAEKATE9EzsxMDExMTk5ODQ2NzAwNjI3ODY5MDAwMDBTUFJHMDIwNjYwMDAwMDAwMzk1OTA1MzMzICAgICAgICAgIDB2BgVgTAEKAjFtE2tDZW50cm8gVW5pdmVyc2l0YXJpbyBTYW8gQ2FtaWxvICAgICAgICAgU1VQRVJJT1IgICAgICAgUHNpY29sb2dpYSAgICAgICAgICAgICAgICAgICAgQ290aWEgICAgICAgICAgICAgICBTUDALBgVgTAEEAzECEwAwcjAuBgNVHR8EJzAloSOGIWh0dHBzOi8vdW5lLmRuZS52Yy92MS9jcmwvdW5lLmNybDAdBgNVHSMEFoAUyNwQtL1L/3YrFdVHw2DXOR17vc4wIQYIKwYBBQUHAQEEFTATBggrBgEFBQcwAgQHhgVIVFRQUzANBgkqhkiG9w0BAQUFAAOCAQEArlqpjaWz57ZAYnHD2F6Q7D9nDPFT4nDZ4d4KKeop3eojhYt2XkS/qISOiztaZnoDFRVQXz9ZzJAelUw3k9dLebV+p4lSI+0TFM24W5f4FgrJ3naHOLJ3b4Sed1lOBMDiBrBuWQ3p+5VmacB20oj/aDfXrlUgVfIuAt3DltOjtQIkLWeg87ZAhDZ5gcqCHBMlG5Y+L4qQwEwtO57AnEPVtWq8oqH0a/RsSMQclcnrjxzMT/ozPkWo3EL63FXdCYFNI00ET4icg8MwkaPm7KjCWPjU58KZXHxuBK77NgiTEZf+qyfeVgvIjbYoH4JWSq+GfAlUiGPVvJEWY+yR+2FpwA==";

  const user = [
    { name: "Nome", value: "Jae Woo Kim" },
    { name: "Instituição", value: "Universidade Anhembi Morumbi" },
    { name: "Curso", value: "Análise e Desenvolvimento de Sistemas" },
    { name: "Documento de Identificação", value: "000000000213340" },
    { name: "Emissor", value: "UNE" },
  ];

  const UserName = styled(Typography)`
    font-weight: bold;
    max-width: 120px;
    @media (min-width: 600px) {
      text-align: right;
    } ;
  `;

  const Container = styled(Box)`
    max-width: 1140px;
    margin: auto;
    padding: 0 15px;
    @media (min-width: 767px) {
      padding: 0 30px;;
    } ;
  `;

  const CustomTitle = styled(Typography)`
    color: #005e9e;
    font-size: 1.8rem;
    font-weight: bold;
    margin-bottom: 3rem;
    ::after {
      content: "";
      position: absolute;
      top: 100%;
      left: 0;
      height: 5px;
      width: 300px;
      max-width: 100%;
      background: #005e9e;
      z-index: 1;
    }
  `;

  return (
    <>
      <Head>
        <title>Meia-entrada</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" />
        <link
          rel="stylesheet"
          href="https://fonts.googleapis.com/css2?family=Rubik:wght@500&display=swap"
        />
      </Head>
      <header>
        <Header />
      </header>
      <main style={{ padding: "3rem 0" }}>
        <Container>
          <Box style={{ position: "relative", marginTop: '100px' }}>
            <CustomTitle>
              Validação de CIE{" "}
              <span style={{ fontSize: "1.7rem" }}>
                (Carteira de Identificação Estudantil)
              </span>
            </CustomTitle>
          </Box>
          <Box>
            <Box
              style={{
                backgroundColor: "#d4edda",
                color: "#155724",
                textAlign: "center",
                border: "1px solid transparent",
                borderRadius: "0.25rem",
                padding: "0.75rem 1.25rem",
              }}
            >
              <Typography
                style={{
                  margin: "1rem 0",
                  fontSize: "1.5rem",
                  fontFamily: "Rubik sans-serif",
                  fontWeight: "bold",
                }}
              >
                Documento válido!
              </Typography>
            </Box>
            <Box style={{ marginBottom: "40px" }}>
              <Typography style={{ margin: "1rem 0", textAlign: "center" }}>
                UNE atesta que {user[0].value} é estudante e está regularmente
                matriculado(a) em {user[2].value} da {user[1].value}
              </Typography>
              <Box>
                <Grid container spacing={2}>
                  <Grid item xs={12} sm={8} md={10}>
                    <Box
                      style={{
                        borderTop: "1px solid #e0e0e0",
                        width: "100%",
                      }}
                    >
                      {user.map((u) => (
                        <Box style={{ margin: "10px" }} key={u.name}>
                          <Grid container style={{ marginBottom: "10px" }}>
                            <Grid item xs={12} sm={4} md={2}>
                              <UserName>{u.name}:</UserName>
                            </Grid>
                            <Grid item xs={12} sm={8} md={10}>
                              <Typography>{u.value}</Typography>
                            </Grid>
                          </Grid>
                          <Divider />
                        </Box>
                      ))}
                    </Box>
                  </Grid>
                  <Grid item xs={12} sm={4} md={2}>
                    <Box
                      style={{
                        borderRadius: "8px",
                      }}
                    >
                      <Image
                        width={220}
                        height={300}
                        src="https://testejae.s3.amazonaws.com/20220802_185027.jpg"
                        style={{ margin: "auto" }}
                      />
                    </Box>
                  </Grid>
                </Grid>
              </Box>
            </Box>
            <Box>
              <Typography
                style={{
                  fontSize: "1.25rem",
                  fontWeight: "bold",
                  marginBottom: "10px",
                }}
              >
                Certificado de Atributo em formato PEM:
              </Typography>
              <Box
                style={{
                  border: "1px solid #e0e0e0",
                  padding: "10px 20px",
                  wordWrap: "break-word",
                }}
              >
                <Typography
                  style={{
                    textAlign: "center",
                    color: "#888",
                    marginBottom: "1rem",
                  }}
                >
                  -----BEGIN CERTIFICATE-----
                </Typography>
                <Typography
                  style={{
                    textAlign: "left",
                    fontSize: "0.9em",
                    fontFamily: "Arial sans-serif;",
                  }}
                >
                  {PEM}
                </Typography>
                <Typography
                  style={{
                    textAlign: "center",
                    color: "#888",
                    marginTop: "1rem",
                  }}
                >
                  -----END CERTIFICATE-----
                </Typography>
              </Box>
            </Box>
          </Box>
        </Container>
      </main>
      <Footer />
    </>
  );
};

export default Document;
