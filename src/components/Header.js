import React from "react";
import { styled, alpha } from '@mui/material/styles';
import {
    Stack,
    Container,
    InputBase,
    Button,
    Typography,
    useMediaQuery,
    IconButton,
    Box,
    AppBar,
} from "@mui/material";
import TopBar from "./TopBar";
import PerfilIcon from "../assets/icons/PerfilIcon";
import CartIcon from "../assets/icons/CartIcon";
import CartIconV2 from "../assets/icons/CartIconV2";
import SearchIcon from '../assets/icons/SearchIcon';
import WishlistIcon from "../assets/icons/WishlistIcon";
import MenuIcon from "../assets/icons/MenuIcon";
import ImageTemplate from "./ImageTemplate";
import logoImage from "../assets/image/logoImage/logoImage.png";

const Search = styled('div')(({ theme }) => ({
    borderRadius: '16px 0px 0px 16px',
    backgroundColor: '#EFEFEF',
    width: '100%',
    maxWidth: '682px',
    transition: '0.2s',
    '&:hover': {
        backgroundColor: alpha(theme.palette.common.white, 0.25),
    },

}));

const StyledInputBase = styled(InputBase)(({ theme }) => ({
    color: 'inherit',
    width: '95%',
    '& .MuiInputBase-input': {
        padding: theme.spacing(1, 1, 1, 0),
        paddingLeft: '20px',
    },
}));

const StyledButton = styled('div')(() => ({
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    gap: '8px',
    cursor: 'pointer',
    padding: '15px 17px 15px 17px',
    border: '1px solid #fff',
    transition: '0.2s',
    '&:hover': {
        border: '1px solid #FAA500',
        borderRadius: '8px'
    },
}));

const ItemMenu = styled('div')(() => ({
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    cursor: 'pointer',
    transition: '0.2s',
    gap: '10px',
    fontWeight: 500,
    padding: '4px 20px 4px 20px',
    borderBottom: '2px solid #fff',
    '&:hover': {
        borderBottom: '2px solid #FAA500'
    },
}));


const Header = ((props) => {
    const isMobile = useMediaQuery((theme) => theme.breakpoints.down("md"));
    const categoryMenu = [
        "Vestidos",
        "Roupas",
        "Sapatos",
        "Lingerie",
        "Acessórios",
        "OUTLET"
    ]

    return (
        <>
            <AppBar position="fixed" sx={{ backgroundColor: '#FAFAFA', color: 'inherit ' }}>
                <TopBar />
                {!isMobile &&
                    <>
                        <Box sx={{ boxShadow: '0px 4px 6px 0px #00000014' }}>
                            <Container maxWidth={false} sx={{ maxWidth: '1622px' }}>
                                <Stack flexDirection='row' pt='24px' pb='24px' alignItems='center' justifyContent='space-between' gap={{ lg: '90px', md: '10px' }} >
                                    <ImageTemplate width='147px' height='18px' image={logoImage} />
                                    <Stack flexDirection='row' width='100%' mr='10px' ml='16px'>
                                        <Search>
                                            <StyledInputBase
                                                placeholder="O Que Você Busca?"
                                            />
                                        </Search>
                                        <Button variant="contained" color="secondary"
                                            sx={{
                                                marginLeft: '-10px',
                                                width: '119px',
                                                borderRadius: '8px',
                                                color: "#fff",
                                                textTransform: 'capitalize'
                                            }}
                                        >
                                            Buscar
                                        </Button>
                                    </Stack>
                                    <Stack flexDirection='row' justifyContent='space-between' alignItems='center' width='100%' maxWidth='422px'>
                                        <StyledButton >
                                            <PerfilIcon />
                                            <Typography whiteSpace='nowrap'>Minha Conta</Typography>
                                        </StyledButton>
                                        <StyledButton >
                                            <WishlistIcon />
                                            <Typography whiteSpace='nowrap'>Wishlist</Typography>
                                        </StyledButton>
                                        <StyledButton >
                                            <CartIcon />
                                            <Typography whiteSpace='nowrap'>Meu Carrinho</Typography>
                                        </StyledButton>
                                    </Stack>
                                </Stack>
                            </Container >
                        </Box>
                        <Stack alignItems='center' mt='13px' mb='13px'>
                            <Stack flexDirection='row' justifyContent='space-between' width='100%' alignItems='center' maxWidth='1220px'>
                                <ItemMenu>
                                    <CartIcon />
                                    <Typography whiteSpace='nowrap' color='#FAA500' fontWeight='bold'>Novidades</Typography>
                                </ItemMenu>
                                {categoryMenu.map((category) => (
                                    <ItemMenu key={category}>
                                        {category}
                                    </ItemMenu>
                                ))
                                }
                            </Stack>
                        </Stack>
                    </>
                }

                {
                    isMobile &&
                    <Box sx={{ boxShadow: '0px 4px 6px 0px #00000014' }}>
                        <Container fixed>
                            <Stack flexDirection='row' pt='24px' pb='24px' alignItems='center' justifyContent='space-between'>
                                <Stack flexDirection='row' alignItems='center'>
                                    <IconButton
                                        size="large"
                                        edge="start"
                                        color="inherit"
                                        aria-label="open drawer"
                                        sx={{ mr: 2 }}
                                    >
                                        <MenuIcon />
                                    </IconButton>
                                    <ImageTemplate width='147px' height='18px' image={logoImage} />
                                </Stack>
                                <Stack flexDirection='row' alignItems='center'>
                                    <IconButton size="large" aria-label="search" color="inherit">
                                        <SearchIcon />
                                    </IconButton>

                                    <IconButton size="large" aria-label="search" color="inherit">
                                        <CartIconV2 />
                                    </IconButton>
                                </Stack>
                            </Stack>
                        </Container >
                    </Box>
                }
            </AppBar>
        </>
    );
})

export default Header;