import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import Menu from '@mui/material/Menu';
import MenuIcon from '@mui/icons-material/Menu';
import Container from '@mui/material/Container';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import Tooltip from '@mui/material/Tooltip';
import MenuItem from '@mui/material/MenuItem';
import AdbIcon from '@mui/icons-material/Adb';
import WaterDropIcon from '@mui/icons-material/WaterDrop';
import { useDispatch, useSelector } from 'react-redux';
import { Link, useNavigate } from 'react-router-dom';
import { set_auth_users } from '../config/store/slices/userData';
import { signOut } from 'firebase/auth';
import { auth } from '../config/firebase';
import Skeleton from '@mui/material/Skeleton';

const pages = [{title:'Add Donor',link:"/AddDonor"}, {title:'Search Donor',link:'/SearchBlood'}, {title:'All Blood',link:'/AllBlood'}];
const settings = [{title:'Logout',link: '/'}];
const loginSetting = [{title: 'SignUp', link: '/SignUpPage'},{title:'Login', link: '/LoginPage'}];


function Navbar() {
  const [anchorElNav, setAnchorElNav] = React.useState(null);
  const [anchorElUser, setAnchorElUser] = React.useState(null);
  const isLoggedIn = useSelector((state)=>state.user_data.isLoggedIn); 
  console.log(isLoggedIn);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleOpenNavMenu = (event) => {
    setAnchorElNav(event.currentTarget);
  };
  const handleOpenUserMenu = (event) => {
    setAnchorElUser(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
    
  };

  const handleCloseUserMenu = () => {
    setAnchorElUser(null);
  };
  
  const Logout = () => {
    navigate('/')
    signOut(auth)
    .then(() => {
      // Sign-out successful.
      console.log("Sign-out successful.");
      dispatch(set_auth_users(false));
    }).catch((error) => {
      // An error happened.
    });
  }
  return (
    <AppBar position="static" sx={{background: "darkred"}}>
      <Container maxWidth="xl">
        <Toolbar disableGutters>
          {/* <AdbIcon sx={{ display: { xs: 'none', md: 'flex' }, mr: 1 }} /> */}
          <Link to={"/"}>
          <Typography
            variant="h6"
            noWrap
            component="a"
            href="#app-bar-with-responsive-menu"
            sx={{
              mr: 2,
              display: { xs: 'none', md: 'flex' },
              fontFamily: 'monospace',
              fontWeight: 700,
              letterSpacing: '.3rem',
              color: 'warning',
              textDecoration: 'none',
            }}
          >
            BLOODY HACKS <WaterDropIcon sx={{fontSize: 30}} />
          </Typography>
          </Link>
          <Box sx={{ flexGrow: 1, display: { xs: 'flex', md: 'none' , color : 'red'} }}>
            <IconButton
              size="large"
              aria-label="account of current user"
              aria-controls="menu-appbar"
              aria-haspopup="true"
              onClick={handleOpenNavMenu}
              color="warning"
            >
              <MenuIcon />
            </IconButton>
            <Menu
              id="menu-appbar"
              anchorEl={anchorElNav}
              anchorOrigin={{
                vertical: 'bottom',
                horizontal: 'left',
              }}
              keepMounted
              transformOrigin={{
                vertical: 'top',
                horizontal: 'left',
              }}
              open={Boolean(anchorElNav)}
              onClose={handleCloseNavMenu}
              sx={{
                display: { xs: 'block', md: 'none' },
              }}
            >
              {
                isLoggedIn ?
                pages.map((page,index) => (
                  <MenuItem key={index} onClick={handleCloseNavMenu}>
                    <Link to={page.link}><Typography textAlign="center" >{page.title}</Typography></Link>
                  </MenuItem>
                ))
                : null

              }
              </Menu>
          </Box>
          <Link to={"/"}>
          <Typography
            variant="h5"
            noWrap
            component="a"
            href="#app-bar-with-responsive-menu"
            sx={{
              mr: 2,
              display: { xs: 'block', md: 'none' },
              flexGrow: 1,
              fontFamily: 'monospace',
              fontWeight: 700,
              letterSpacing: '.1rem',
              color: 'inherit',
              textDecoration: 'none',
            }}
          >
           BLOODY HACKS <WaterDropIcon sx={{fontSize: 30}} />
          </Typography>
          </Link>
          <Box sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex' } }}>
            {
              isLoggedIn ? 
                pages.map((page,index) => (
                  <Link to={page.link}><Button
                    key={index}
                    onClick={handleCloseNavMenu}
                    sx={{ my: 2, color: 'white', fontSize: 15,fontWeight: 600,display: 'block' }}
                  >
                    {page.title}
                  </Button></Link>
                )):
                <Box sx={{ width: 300 ,display: "flex", justifyContent:"center",alignItems:"center"}}>
                  <Skeleton animation="wave" sx={{width:100, marginRight:2}}/>
                  <Skeleton animation="wave" sx={{width:100, marginRight:2}}/>
                  <Skeleton animation="wave" sx={{width:100, marginRight:2}}/>
                </Box>
            }
          </Box>

          <Box sx={{ flexGrow: 0 }}>
            <Tooltip title="Open settings">
              <IconButton onClick={handleOpenUserMenu} sx={{ p: 0 }}>
                <Avatar alt="Remy Sharp" src="/static/images/avatar/2.jpg" />
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
                {
                    isLoggedIn ?
                    settings.map((setting,index) => (
                      <MenuItem key={index} onClick={handleCloseUserMenu}>
                       <button onClick={Logout}><Typography textAlign="center">{setting.title}</Typography></button>
                      </MenuItem>
                    ))
                    :
                    loginSetting.map((item,index)=>{
                        return(
                        <MenuItem key={index} onClick={handleCloseUserMenu}>
                            <Link to={item.link}><Typography textAlign="center">{item.title}</Typography></Link>
                        </MenuItem>
                        )
                    })
                }
            </Menu>
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  );
}
export default Navbar;