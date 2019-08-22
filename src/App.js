import React, { Component } from 'react';
//import { Link, Redirect } from 'react-router-dom';
import Reset from "@material-ui/core/CssBaseline";
import Grid from '@material-ui/core/Grid';
import Button from '@material-ui/core/Button';
//import { fade, makeStyles } from '@material-ui/core/styles';
import { fade, withStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';
import InputBase from '@material-ui/core/InputBase';
import Badge from '@material-ui/core/Badge';
import MenuItem from '@material-ui/core/MenuItem';
import Menu from '@material-ui/core/Menu';
import MenuIcon from '@material-ui/icons/Menu';
import SearchIcon from '@material-ui/icons/Search';
import AccountCircle from '@material-ui/icons/AccountCircle';
import MailIcon from '@material-ui/icons/Mail';
import NotificationsIcon from '@material-ui/icons/Notifications';
import MoreIcon from '@material-ui/icons/MoreVert';
import logo from './logo.svg';
//import './App.css';
import clsx from 'clsx';
import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';
import CardMedia from '@material-ui/core/CardMedia';
import CardContent from '@material-ui/core/CardContent';
import CardActions from '@material-ui/core/CardActions';
import Collapse from '@material-ui/core/Collapse';
import Avatar from '@material-ui/core/Avatar';
//import IconButton from '@material-ui/core/IconButton';
//import Typography from '@material-ui/core/Typography';
import { red } from '@material-ui/core/colors';
import FavoriteIcon from '@material-ui/icons/Favorite';
import ShareIcon from '@material-ui/icons/Share';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import MoreVertIcon from '@material-ui/icons/MoreVert';
//import Paper from '@material-ui/core/Paper';

/* color: #27a69b */
/* color-border: #03877a */
const menus = ['News','Regions','Video','TV'];
const styles = theme => ({
  grow: {
    flexGrow: 1,
	margin: 20,
	[theme.breakpoints.down('xs')]: {
		margin: 0,
	},
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  mobileLogo:{
	width: 50,
	height: 50,
	maxWidth: 50,
	maxHeight: 50,
  },
  logo: {
	width: 120,
	height: 120,
	maxWidth: 120,
	maxHeight: 120,
  },
  appbar: {
	paddingLeft: 80,
  },
  toolbar: {
	//height: 50,
	minHeight: 50,
  },
  buttonbar: {
	height: '100%',
	minHeight: 50,
	width: 100/menus.length+'%',
	paddingLeft: 25,
	paddingRight: 25,
	borderRadius: 0,
	//minWidth: 100,
	//'&:not(:last-child)': {
		borderRightWidth: 1,
		borderColor: '#03877a',
		borderStyle: 'solid',
	//}
  },
  more: {
	  [theme.breakpoints.down('xs')]: {
		padding: '0 10px',
	  }
  },
  buttonloadmore: {
	  width: '100%',
	  marginTop: 16,
	  marginBottom: 16,
  },
  h100:{
	  height: '100%',
  },
  title: {
    display: 'none',
    [theme.breakpoints.up('sm')]: {
      display: 'block',
    },
  },
  search: {
    position: 'relative',
    borderRadius: theme.shape.borderRadius,
    
    marginRight: theme.spacing(2),
    marginLeft: 0,
    width: '100%',
    [theme.breakpoints.up('xs')]: {
      marginLeft: theme.spacing(2),
      width: 'auto',
	  backgroundColor: fade(theme.palette.common.white, 0.15),
		'&:hover': {
		  backgroundColor: fade(theme.palette.common.white, 0.25),
	  },
    }, 
	[theme.breakpoints.down('xs')]: {
      backgroundColor: theme.palette.common.white,
	  color: '#ccc',
	  marginRight: 10,
	  marginLeft: 10,
	  '&:hover': {
		color: '#ccc',
		backgroundColor: theme.palette.common.white,
	  },
    },
	
  },
  searchIcon: {
    width: theme.spacing(5),
    height: '100%',
    position: 'absolute',
    pointerEvents: 'none',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
  inputRoot: {
    color: 'inherit',
	width: '100%',
  },
  inputInput: {
    padding: theme.spacing(1, 1, 1, 5),
    transition: theme.transitions.create('width'),
    width: '100%',
    /*[theme.breakpoints.up('md')]: {
      width: 200,
    },*/
  },
  sectionDesktop: {
    display: 'none',
    [theme.breakpoints.up('md')]: {
      display: 'flex',
    },
  },
  sectionMobile: {
    display: 'flex',
    [theme.breakpoints.up('md')]: {
      display: 'none',
    },
  },
  root: {
    flexGrow: 1,
	[theme.breakpoints.down('xs')]: {
		marginTop: 109,
		//margin: '8px 10px 10px 10px'
	}
  },
  card: {
    //minWidth: 345,
	margin: 20,
  },
  cardspacing: {
	width: "calc(100% + 40px)",
    margin: -20,
  },
  media: {
    height: 160,
    paddingTop: '56.25%', // 16:9
	marginLeft: 16,
	marginRight: 16,
	[theme.breakpoints.down('xs')]: {
		height: 'auto',
		width: '100%',
		marginLeft: 0,
		marginRight: 0,
	},
  },
  expand: {
    transform: 'rotate(0deg)',
    marginLeft: 'auto',
    transition: theme.transitions.create('transform', {
      duration: theme.transitions.duration.shortest,
    }),
  },
  expandOpen: {
    transform: 'rotate(180deg)',
  },
  /*avatar: {
    backgroundColor: red[500],
  },*/
  footer: {
	  padding: '25px 0',
	  borderTop: '1px solid #ccc',
  },
  footermenu: {
	margin: 0,
	padding: 0,
	marginBottom: 0,
	[theme.breakpoints.up('xs')]: {
		marginLeft: 36,
		marginBottom: 0,
	},
	[theme.breakpoints.down('xs')]: {
		marginBottom: 15,
	},
	'& li': {
	//float: 'left'	,
	listStyle: 'none',
	display: 'inline',
		'&:after': {
			content:`"|"`,
			color:'#666',
			fontWeight: 100,
		},
		'&:last-child:after': {
			content:`""`,
		},
	},
	
	'& li a': {
		//margin:'0 8px',
		//'&:not(:first-child)': {
			marginLeft: 15,
			marginRight: 15,
			textDecoration: 'none',
		//},
	},
  },
  copyright: {
	  paddingRight: 20,
  },
  mobileContent: {
	  //paddingTop: 8,
	  //paddingBottom: 10,
      borderBottom: '1px solid #ccc',
	  padding: '8px 10px 10px 10px',

  },
  mobileCardContent: {
	  padding: '0 16px',
  }
});

  //const classes = useStyles();
  //const [anchorEl, setAnchorEl] = React.useState(null);
  //const [mobileMoreAnchorEl, setMobileMoreAnchorEl] = React.useState(null);

  
  class App extends React.Component {
	  
	constructor(props) {
        super(props);
        this.state = {
			anchorEl: null,
			setAnchorEl: null,
			mobileMoreAnchorEl: null,
			setMobileMoreAnchorEl: null,
			menuId: 'primary-search-account-menu',
			mobileMenuId: 'primary-search-account-menu-mobile',
			//expanded: null, 
			//setExpanded: null,
			data: [1,2,3,4,5]
			};
    }
	  
	componentDidMount() {
		window.addEventListener("resize", this.resize.bind(this));
		this.resize();
	}
  
	resize() {
		//console.log(window.innerWidth <= 760);
		this.setState({hideNav: window.innerWidth <= 599, width: window.innerWidth});
	}
	

	handleProfileMenuOpen(event) {
    this.setAnchorEl(event.currentTarget);
  }

  handleMobileMenuClose() {
    //setMobileMoreAnchorEl(null);
	this.setState({mobileMoreAnchorEl: null});
  }

  handleMenuClose() {
    //setAnchorEl(null);
	this.setState({anchorEl: null});
    this.handleMobileMenuClose();
  }

  handleMobileMenuOpen(event) {
	 //console.log(event.currentTarget);
    //etMobileMoreAnchorEl(event.currentTarget);
	this.setState({mobileMoreAnchorEl: event.currentTarget});
  }
  
  /*handleExpandClick() {
    //setExpanded(!expanded);
	this.setState({setExpanded: !this.state.expanded});
  }*/
	
  render() {
	  const { classes } = this.props;
	  const { anchorEl, menuId, mobileMoreAnchorEl, setAnchorEl, mobileMenuId, setMobileMoreAnchorEl,hideNav} = this.state;
	  
	  const isMenuOpen = Boolean(anchorEl);
	  const isMobileMenuOpen = Boolean(mobileMoreAnchorEl);
	  
	  
	  const renderMenu = (
    <Menu
      anchorEl={anchorEl}
      anchorOrigin={{ vertical: 'top', horizontal: 'right' }}
      id={menuId}
      keepMounted
      transformOrigin={{ vertical: 'top', horizontal: 'right' }}
      open={isMenuOpen}
      onClose={this.handleMenuClose}
    >
      <MenuItem onClick={this.handleMenuClose}>Profile</MenuItem>
      <MenuItem onClick={this.handleMenuClose}>My account</MenuItem>
    </Menu>
  )
  
  const renderMobileMenu = (
    <Menu
      anchorEl={mobileMoreAnchorEl}
      anchorOrigin={{ vertical: 'top', horizontal: 'right' }}
      id={mobileMenuId}
      keepMounted
      transformOrigin={{ vertical: 'top', horizontal: 'right' }}
      open={isMobileMenuOpen}
      onClose={this.handleMobileMenuClose.bind(this)}
    >
	{menus && menus.map((value,key) => {
		return <MenuItem onClick={this.handleMenuClose} key={key}>{value}</MenuItem>	
	})}
	{/*<MenuItem>
        <IconButton aria-label="show 4 new mails" color="inherit">
          <Badge badgeContent={4} color="secondary">
            <MailIcon />
          </Badge>
        </IconButton>
        <p>Messages</p>
      </MenuItem>
      <MenuItem>
        <IconButton aria-label="show 11 new notifications" color="inherit">
          <Badge badgeContent={11} color="secondary">
            <NotificationsIcon />
          </Badge>
        </IconButton>
        <p>Notifications</p>
      </MenuItem>
      <MenuItem onClick={this.handleProfileMenuOpen}>
        <IconButton
          aria-label="account of current user"
          aria-controls="primary-search-account-menu"
          aria-haspopup="true"
          color="inherit"
        >
          <AccountCircle />
        </IconButton>
        <p>Profile</p>
	</MenuItem>*/}
    </Menu>
  )
  
  return (  
	<div>
	  <div className={classes.grow}>
			
			{ hideNav && (
			<AppBar position={"fixed"}>
			<Toolbar disableGutters={true} className={classes.toolbar}>
				<Grid
			  container
			  direction="row"
			  justify="center"
			  alignItems="center"
			>
				<Grid item xs={1}>
					<img src={logo} className={classes.mobileLogo} alt="logo" />
				</Grid>
				<Grid item xs={10}>
					<Typography variant="h5" component="h2" align="center">Title</Typography>
				</Grid>
				<Grid item xs={1}>
				  <div className={classes.sectionMobile}>
					<IconButton
					  aria-label="show more"
					  aria-controls={mobileMenuId}
					  aria-haspopup="true"
					  onClick={this.handleMobileMenuOpen.bind(this)}
					  color="inherit"
					>
					  <MenuIcon />
					</IconButton>
				  </div>
				  </Grid>
				  </Grid>
				  </Toolbar>
				  <Grid item xs={12} style={{background: '#ccc',padding: '8px 0'}}>
				  <div className={classes.search}>
					<div className={classes.searchIcon}>
					  <SearchIcon />
					</div>
					<InputBase
					  placeholder="Search…"
					  classes={{
						root: classes.inputRoot,
						input: classes.inputInput,
					  }}
					  inputProps={{ 'aria-label': 'search' }}
					/>
				  </div>
			  </Grid>
			</AppBar>
			)}
				
		  { !hideNav && (
		  <Grid
			  container
			  direction="row"
			  justify="flex-start"
			  alignItems="center"
			>			
			<Grid item xs={1}>
				<img src={logo} className={classes.logo} alt="logo" />
			</Grid>
			<Grid item xs={11} className={classes.appbar}>
			<AppBar position={"static"}>
			<Toolbar disableGutters={true} className={classes.toolbar}>
			<Grid container
			  direction="row"
			  justify="flex-start"
			  alignItems="center" className={classes.h100}>
				<Grid item xs={hideNav?12:8} className={classes.h100}>
					{menus && menus.map((value,key) => {
						return <Button color="inherit" className={classes.buttonbar} key={key}>{value}</Button>
					})}
				</Grid>
				  {/*<IconButton
				edge="start"
				className={classes.menuButton}
				color="inherit"
				aria-label="open drawer"
			  >
				<MenuIcon />
				  </IconButton>
			  <Typography className={classes.title} variant="h6" noWrap>
				Material-UI
			  </Typography>*/}
			  <Grid item xs={4}>
				  <div className={classes.search}>
					<div className={classes.searchIcon}>
					  <SearchIcon />
					</div>
					<InputBase
					  placeholder="Search…"
					  classes={{
						root: classes.inputRoot,
						input: classes.inputInput,
					  }}
					  inputProps={{ 'aria-label': 'search' }}
					/>
				  </div>
			  </Grid>
			  {/*<div className={classes.grow} />
			  <div className={classes.sectionDesktop}>
				<IconButton aria-label="show 4 new mails" color="inherit">
				  <Badge badgeContent={4} color="secondary">
					<MailIcon />
				  </Badge>
				</IconButton>
				<IconButton aria-label="show 17 new notifications" color="inherit">
				  <Badge badgeContent={17} color="secondary">
					<NotificationsIcon />
				  </Badge>
				</IconButton>
				<IconButton
				  edge="end"
				  aria-label="account of current user"
				  aria-controls={menuId}
				  aria-haspopup="true"
				  onClick={handleProfileMenuOpen}
				  color="inherit"
				>
				  <AccountCircle />
				</IconButton>
			  </div>*/}
			  
			  {/*<Grid item xs={1}>
			  <div className={classes.sectionMobile}>
				<IconButton
				  aria-label="show more"
				  aria-controls={mobileMenuId}
				  aria-haspopup="true"
				  onClick={handleMobileMenuOpen}
				  color="inherit"
				>
				  <MoreIcon />
				</IconButton>
			  </div>
			  </Grid>*/}
			  
			  </Grid>
			</Toolbar>
		  </AppBar>
			</Grid>
		  </Grid>
		  )}
		  {renderMobileMenu}
		  {renderMenu}
		  
		  <div className={classes.root}>
		  { hideNav && (
		  <Grid container>
			<Grid item xs={12}>
		  <Grid container  direction="column"  justify="center"  alignItems="stretch">
            {this.state.data && this.state.data.map((value, key) => {
			return (
			
			<Grid container className={classes.mobileContent} key={key}>
				<Grid item xs={5}>
					<CardMedia
						className={classes.media}
						image="https://material-ui.com/static/images/cards/paella.jpg"
						title="Paella dish"
					  />
				</Grid>
				<Grid item xs={7}>
					<CardHeader color="primary" title=<Typography color="primary" component="p">Shrimp and Chorizo Paella</Typography>  />
					<CardContent className={classes.mobileCardContent}>
						<Typography paragraph variant="body2" color="textSecondary" component="p">
						  This impressive paella is a perfect party dish and a fun meal to cook together with your
						  guests. Add 1 cup of frozen peas along with the mussels, if you like.
						</Typography>
						<Typography variant="body2" color="textSecondary" component="p">
								Update: 28 July, 2016 12:59
						</Typography>
					  </CardContent>
				</Grid>
			</Grid>

           
			)}
			)}
			</Grid>
			</Grid>
			</Grid>)}
			
			{ !hideNav && (
		  <Grid container className={classes.cardspacing}>
			<Grid item xs={12}>
		  <Grid container  direction="row"  justify="center"  alignItems="stretch">
            {this.state.data && this.state.data.map((value, key) => {
			return (
			
			<Grid item md={4} key={key}>
		  <Card className={classes.card}>
			  <CardHeader title=<Typography color="primary" component="h1">Shrimp and Chorizo Paella</Typography>  />
			  <CardMedia
				className={classes.media}
				image="https://material-ui.com/static/images/cards/paella.jpg"
				title="Paella dish"
			  />
			  <CardContent>
				<Typography paragraph variant="body2" color="textSecondary" component="p">
				  This impressive paella is a perfect party dish and a fun meal to cook together with your
				  guests. Add 1 cup of frozen peas along with the mussels, if you like.
				</Typography>
				<Typography variant="body2" color="textSecondary" component="p">
						Update: 28 July, 2016 12:59
				</Typography>
			  </CardContent>
		  </Card>
			
			
			</Grid>

           
			)}
			)}
			</Grid>
			</Grid>
			</Grid>
			)}
			
			<Grid container>
			<Grid item xs={12} className={classes.more}>
				<Button variant="outlined" color="primary" className={classes.buttonloadmore}>Load more</Button>
			</Grid>
			</Grid>
		  </div>
		</div>
		<Grid container className={classes.footer}>
			<Grid item xs={12} sm={6} align={hideNav?"center":"left"}>
				<ul className={classes.footermenu}>
				{menus && menus.map((value,key) => {
					return <li key={key}><Typography color="primary" component="a" href="#">{value}</Typography></li>
				 })}
				</ul>
			</Grid>
			<Grid item xs={12} sm={6} align={hideNav?"center":"right"}>
				<Typography color="textSecondary" component="span" className={classes.copyright}>Copy right &copy; AMPOS</Typography>
			</Grid>
			</Grid>
		</div>
  );
	}
}

export default withStyles(styles)(App);
