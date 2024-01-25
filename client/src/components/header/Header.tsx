'use client';
import {
  Avatar,
  Box,
  Button,
  IconButton,
  Menu,
  MenuItem,
  Tooltip,
  Typography,
} from '@mui/material';
import { styled } from '@mui/material/styles';
import { signOut, useSession } from 'next-auth/react';
import Link from 'next/link';
import { useState } from 'react';
import { BsFan } from 'react-icons/bs';
import { GiHamburgerMenu } from 'react-icons/gi';
import Overlay from '../overlay/Overlay';
import { HeaderLinks } from './LinkData';
import './styles.css';

const StyledSignUp = styled(Button)`
  background-color: #ff6600;
  color: #fff;
  font-size: 0.8rem;
  border-radius: 0;
  '&:hover': {
    background-color: '#fff';
    color: '#ff6600';
  }
`;
const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [anchorElUser, setAnchorElUser] = useState<null | HTMLElement>(null);

  const { data: session } = useSession();
  const handleOpenUserMenu = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorElUser(event.currentTarget);
  };
  const handleCloseUserMenu = () => {
    setAnchorElUser(null);
  };
  const linkNavs = HeaderLinks.map((link) => {
    return (
      <span key={link.id} className="header-links">
        <Link href={link.path} className="header-link">
          {link.name}
        </Link>
      </span>
    );
  });
  return (
    <Box component="nav">
      {isOpen && <Overlay isOpen={isOpen} setIsOpen={setIsOpen} />}
      <Box className="header-container">
        <Box className="header-icon-container">
          <GiHamburgerMenu
            className="header-icon"
            onClick={() => setIsOpen(!isOpen)}
          />
        </Box>
        <Box className="header-details">
          <BsFan className="header-company-logo" />
          <Typography
            variant="h4"
            sx={{
              fontFamily: 'Merriweather',
              fontWeight: '900',
              fontSize: '1.8rem',
            }}
          >
            IC
          </Typography>
        </Box>
        <Box className="header-links-container">
          <Box className="header-links-wrapper">{linkNavs}</Box>
        </Box>
        {session ? (
          <Box sx={{ flexGrow: 0 }}>
            <Tooltip title="Open settings">
              <IconButton onClick={handleOpenUserMenu} sx={{ p: 0 }}>
                <Avatar alt="Remy Sharp" src={session?.image} />
              </IconButton>
            </Tooltip>
            <Menu
              sx={{ mt: '45px' }}
              id="menu-appbar"
              anchorEl={anchorElUser}
              anchorOrigin={{
                vertical: 'top',
                horizontal: 'right',
              }}
              keepMounted
              transformOrigin={{
                vertical: 'top',
                horizontal: 'right',
              }}
              open={Boolean(anchorElUser)}
              onClose={handleCloseUserMenu}
            >
              <MenuItem>
                <Typography textAlign="center">
                  <a href="/dashboard">Available Jobs</a>
                </Typography>
              </MenuItem>
              {session?.role === 'ADMIN' && (
                <MenuItem>
                  <Typography textAlign="center">Admin</Typography>
                </MenuItem>
              )}
              {session?.position === 'EMPLOYER' && (
                <MenuItem>
                  <Typography textAlign="center">
                    <a href="/employer/job/create">Create Job</a>
                  </Typography>
                </MenuItem>
              )}
              <MenuItem>
                <Typography textAlign="center" onClick={() => signOut()}>
                  Logout
                </Typography>
              </MenuItem>
            </Menu>
          </Box>
        ) : (
          <Box className="header-btns">
            <Box>
              <Link href="/signin" className="header-link">
                <Button
                  variant="text"
                  className="header-login-btn"
                  sx={{
                    marginRight: '0.4rem',
                    fontSize: '1rem',
                  }}
                >
                  Log In
                </Button>
              </Link>
            </Box>
            <Box>
              <Link href="/signup" className="header-link">
                <StyledSignUp variant="contained">Sign Up</StyledSignUp>
              </Link>
            </Box>
          </Box>
        )}
      </Box>
    </Box>
  );
};

export default Header;
