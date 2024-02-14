import * as React from 'react';
import {
    Stack,
    Container,
    Box
} from '@mui/material';
import poweredMaeztra from '../assets/image/certificates/poweredMaeztra.png';
import poweredVtex from '../assets/image/certificates/poweredVtex.png';
import FacebookIcon from '../assets/icons/networks/FacebookIcon';
import InstagramIcon from '../assets/icons/networks/InstagramIcon';
import LinkedinIcon from '../assets/icons/networks/LinkedinIcon';
import YoutubeIcon from '../assets/icons/networks/YoutubeIcon';
import MasterIcon from '../assets/icons/payments/MasterIcon';
import VisaIcon from '../assets/icons/payments/VisaIcon';
import ImageTemplate from '../components/ImageTemplate'

const Footer = (() => {

    return (
        <Stack backgroundColor='#353535' height='100%' justifyContent='center'>
            <Container maxWidth={false} sx={{ maxWidth: '1646px', paddingLeft: '31px', paddingRight: '31px' }}>
                <Stack my='27px' gap='32px' flexDirection={{ sm: 'column', md: 'row' }} justifyContent='space-between' alignItems='center'>
                    <Stack flexDirection='row' gap='22px' alignItems='center'>
                        <Box sx={{ cursor: 'pointer' }}>
                            <InstagramIcon />
                        </Box>
                        <Box sx={{ cursor: 'pointer' }}>
                            <FacebookIcon />
                        </Box>
                        <Box sx={{ cursor: 'pointer' }}>
                            <LinkedinIcon />
                        </Box>
                        <Box sx={{ cursor: 'pointer' }}>
                            <YoutubeIcon />
                        </Box>
                    </Stack>
                    <Stack flexDirection='row' gap='22px' alignItems='center'>
                        <MasterIcon />
                        <VisaIcon />
                        <MasterIcon />
                        <VisaIcon />
                    </Stack>
                    <Stack flexDirection='row' gap='22px' alignItems='center'>
                        <ImageTemplate image={poweredVtex} />
                        <ImageTemplate image={poweredMaeztra} />
                    </Stack>
                </Stack>
            </Container>
        </Stack >
    );
})

export default Footer; 