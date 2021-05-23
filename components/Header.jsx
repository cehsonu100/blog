import AppBar from '@material-ui/core/AppBar'
import Box from '@material-ui/core/Box'
import Button from '@material-ui/core/Button'
import Container from '@material-ui/core/Container'
import IconButton from '@material-ui/core/IconButton'
import Link from 'next/link'
import MenuIcon from '@material-ui/icons/Menu'
import Typography from '@material-ui/core/Typography'
import DarkModeSwitch from './DarkModeSwitch'
import useMediaQuery from '@material-ui/core/useMediaQuery'
import { useState, useEffect } from 'react'

const Header = ({ setIsMenuOpen, isMenuOpen }) => {

    const [shouldShowMenuButton, setShouldShowMenuButton] = useState(false)

    const isLargerThanTablet = useMediaQuery('(min-width: 750px)');

    useEffect(() => {
        setShouldShowMenuButton(!isLargerThanTablet)
    }, [isLargerThanTablet]);
    
    return (
        <AppBar color='primary' position="fixed">
            <Container>
                <Box display='flex' alignItems='center' justifyContent='space-between'>
                    <Box display='flex' alignItems='center'>
                        {shouldShowMenuButton &&
                        <IconButton 
                            edge="start" 
                            color="inherit" 
                            aria-label="menu"
                            onClick={e => setIsMenuOpen(!isMenuOpen)}
                        >
                            <MenuIcon />
                        </IconButton>}
                        <Link href='/' passHref>
                            <Button color='inherit'>
                                <Typography variant='h3'>
                                    BLOG-MD
                                </Typography>
                            </Button>
                        </Link>
                    </Box>
                    <DarkModeSwitch />
                </Box>
            </Container>
        </AppBar>
    );
};

export default Header;
