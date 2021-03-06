import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import Menu from "@mui/material/Menu";
import MenuIcon from "@mui/icons-material/Menu";
import Container from "@mui/material/Container";
import Button from "@mui/material/Button";
import MenuItem from "@mui/material/MenuItem";
import EngineeringRoundedIcon from "@mui/icons-material/EngineeringRounded";
import CreateRoundedIcon from "@mui/icons-material/CreateRounded";
import CodeRoundedIcon from "@mui/icons-material/CodeRounded";
import { Link as RouterLink } from "react-router-dom";

const pages = ["Portfolio", "Blog"];
const ResponsiveAppBar = () => {
  const [anchorElNav, setAnchorElNav] = React.useState(null);

  const handleOpenNavMenu = (event) => {
    setAnchorElNav(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  return (
    <AppBar position="static">
      <Container maxWidth="lg">
        <Toolbar disableGutters>
          <EngineeringRoundedIcon
            sx={{ display: { xs: "none", md: "flex" }, mr: 2 }}
          />
          <CreateRoundedIcon
            sx={{ display: { xs: "none", md: "flex" }, mr: 2 }}
          />
          <CodeRoundedIcon
            sx={{ display: { xs: "none", md: "flex" }, mr: 2 }}
          />
          <Typography
            variant="h5"
            noWrap
            sx={{
              mr: 2,
              display: { xs: "none", md: "flex" },
              fontFamily: "monospace",
              fontWeight: 900,
              letterSpacing: ".1rem",
              color: "inherit",
              textDecoration: "none",
            }}
          >
            <RouterLink
              to="/"
              style={{ textDecoration: "none", color: "white" }}
            >
              Treavor Gagne
            </RouterLink>
          </Typography>

          <Box sx={{ flexGrow: 1, display: { xs: "flex", md: "none" } }}>
            <IconButton
              size="large"
              aria-label="account of current user"
              aria-controls="menu-appbar"
              aria-haspopup="true"
              onClick={handleOpenNavMenu}
              color="inherit"
            >
              <MenuIcon />
            </IconButton>
            <Menu
              id="menu-appbar"
              anchorEl={anchorElNav}
              anchorOrigin={{
                vertical: "bottom",
                horizontal: "left",
              }}
              keepMounted
              transformOrigin={{
                vertical: "top",
                horizontal: "left",
              }}
              open={Boolean(anchorElNav)}
              onClose={handleCloseNavMenu}
              sx={{
                display: { xs: "block", md: "none" },
              }}
            >
              {pages.map((page) => (
                <MenuItem to={page} key={page} onClick={handleCloseNavMenu}>
                  <RouterLink
                    to={page}
                    style={{ textDecoration: "none", color: "white" }}
                  >
                    <Button
                      key={page}
                      sx={{ color: "white", display: "block" }}
                    >
                      <Typography textAlign="center">{page}</Typography>
                    </Button>
                  </RouterLink>
                </MenuItem>
              ))}
            </Menu>
          </Box>

          <EngineeringRoundedIcon
            sx={{ display: { xs: "flex", md: "none" }, mr: 1 }}
          />
          <CreateRoundedIcon
            sx={{ display: { xs: "flex", md: "none" }, mr: 1 }}
          />
          <CodeRoundedIcon
            sx={{ display: { xs: "flex", md: "none" }, mr: 1 }}
          />
          <Typography
            variant="h5"
            noWrap
            href="/"
            sx={{
              mr: 2,
              display: { xs: "flex", md: "none" },
              flexGrow: 1,
              fontFamily: "monospace",
              fontWeight: 700,
              letterSpacing: ".1rem",
              color: "inherit",
              textDecoration: "none",
            }}
          >
            Treavor Gagne
          </Typography>
          <Box sx={{ flexGrow: 1, display: { xs: "none", md: "flex" } }}>
            {pages.map((page) => (
              <RouterLink
                to={page}
                style={{ textDecoration: "none", color: "white" }}
              >
                <Button
                  key={page}
                  onClick={handleCloseNavMenu}
                  sx={{ my: 2, color: "white", display: "block" }}
                >
                  {page}
                </Button>
              </RouterLink>
            ))}
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  );
};

export default ResponsiveAppBar;
