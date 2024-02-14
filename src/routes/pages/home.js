import React, { useState, useEffect, useRef } from "react";
import Header from "../../components/Header";
import Banner from "../../components/banner";
import { Stack, Typography, Container, Box, useMediaQuery, Divider } from "@mui/material";
import CardAdvantages from "../../components/CardAdvantages";
import { motion } from "framer-motion";
import mockAdvantages from "../../utils/mockAdvantages";
import mockBrands from "../../utils/mockBrands";
import ImageTemplate from "../../components/ImageTemplate";
import Showcase from "../../components/showcase";
import bannerCollection from '../../assets/image/bannerCollection/bannerCollection.png'
import bannerCollectionMobile from '../../assets/image/bannerCollection/bannerCollectionMobile.svg'
import Newsletter from "../../components/Newsletter";
import MenuFooter from "../../components/MenuFooter";
import Footer from "../../components/Footer";
import CardDialog from "../../components/CardDialog";

const Home = (() => {
  const isMobile = useMediaQuery((theme) => theme.breakpoints.down("sm"));
  const carousel = useRef()
  const [width, setWidth] = useState(0)

  useEffect(() => {
    setWidth(carousel.current?.scrollWidth - carousel.current.offsetWidth)
  }, [])

  return (
    <>
      <CardDialog />
      <Header />
      <Box marginTop={{ xs: '126px', md: '186px' }} />
      <Banner />
      <Container maxWidth={false} sx={{ maxWidth: '1646px', paddingLeft: '31px', paddingRight: '0px' }}>
        <Stack>
          <Box paddingRight={{ xs: '31px', sm: '0px' }}>
            <Stack alignItems='center' paddingTop='24px' paddingBottom='20px'>
              <Typography fontWeight={700} fontSize='16px' color='primary' >
                Por que comprar na Maeztra?
              </Typography>
            </Stack>
          </Box>
          <motion.div ref={carousel} whileTap={{ cursor: 'grabbing' }} style={{ cursor: 'grab', overflow: 'hidden' }}>
            <motion.div drag='x'
              dragConstraints={{ right: 0, left: -width }}
              style={{ display: 'flex', gap: '15px' }}>
              {mockAdvantages.map((item) => (
                <motion.div key={item.id}>
                  <CardAdvantages image={item.image} title={item.title} subTitle={item.subtitle} />
                </motion.div>
              ))}
            </motion.div>
          </motion.div>
        </Stack>

        <Stack>
          <Box paddingRight={{ xs: '31px', sm: '0px' }}>
            <Stack alignItems='center' paddingTop='80px' paddingBottom='20px'>
              <Typography fontWeight={700} fontSize='32px' color='primary' >
                Marcas Parceiras
              </Typography>
            </Stack>
          </Box>
          <motion.div ref={carousel} whileTap={{ cursor: 'grabbing' }} style={{ cursor: 'grab', overflow: 'hidden' }}>
            <motion.div drag='x'
              dragConstraints={{ right: 0, left: -width }}
              style={{ display: 'flex', gap: "15px" }}>
              {mockBrands.map((item) => (
                <motion.div key={item.id} >
                  <ImageTemplate image={item.image} width='306px' />
                </motion.div>
              ))}
            </motion.div>
          </motion.div>
        </Stack>
      </Container>

      <Container maxWidth={false} sx={{ maxWidth: '1646px', paddingLeft: '31px', paddingRight: '31px' }}>
        <Stack>
          <Stack alignItems='center' paddingTop='80px' paddingBottom='20px'>
            <Typography fontWeight={700} fontSize='32px' color='primary' >
              As Mais Pedidas
            </Typography>
          </Stack>
          <Showcase />
        </Stack>

        <Stack
          flexDirection={{ sm: 'column', md: 'row' }}
          justifyContent='space-between'
          alignItems={{ sm: 'start', md: 'center' }}
          marginTop='80px'
          gap={{ xs: '32px', md: '64px' }}
        >
          <Box width='100%' maxWidth={{ sm: '100%', md: '420px' }} >
            <Typography fontWeight={700} fontSize='24px' color='#000'>Lorem ipsum</Typography>
            {!isMobile &&
              <Typography fontWeight={400} fontSize='14px' color='#000' marginTop='14px'>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Interdum mauris posuere fusce proin mattis. Hendrerit cras ut nunc enim dictum. Mattis proin ut quis donec sed eget nulla. Vel mi ut mauris integer. Nibh sagittis in lobortis sed cursus condimentum velit pharetra. Amet luctus ut vulputate scelerisque placerat consequat. Neque arcu mi iaculis id. Vel vitae, pharetra, a nec tristique. Feugiat id tortor eu mauris pulvinar velit massa. Ut ornare augue eget convallis volutpat aliquet. Sed sed pellentesque porttitor phasellus donec condimentum sit sapien.
              </Typography>
            }
            {isMobile &&
              <Typography fontWeight={400} fontSize='14px' color='#000' marginTop='14px'>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Interdum mauris posuere fusce proin mattis. Hendrerit cras ut nunc enim dictum. Mattis proin ut quis donec sed eget nulla. Vel mi ut mauris integer. Nibh sagittis in lobortis sed cursus condimentum velit pharetra. Amet luctus ut vulputate scelerisque .
              </Typography>
            }
          </Box>
          <ImageTemplate image={!isMobile ? bannerCollection : bannerCollectionMobile} width='100%' style={{ minWidth: '298px' }} />
        </Stack>
      </Container >

      <Divider sx={{ marginTop: '80px' }} />
      <Container maxWidth={false} sx={{ maxWidth: '1000px', paddingLeft: '31px', paddingRight: '31px', marginY: "40px" }}>
        <Newsletter />
      </Container >
      <Divider />

      <Container maxWidth={false} sx={{ maxWidth: '1000px', paddingLeft: '31px', paddingRight: '31px', marginY: "40px" }}>
        <MenuFooter />
      </Container >

      <Footer />

    </>
  );
})

export default Home;