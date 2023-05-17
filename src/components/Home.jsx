import { Box, Container, Heading, Image, Stack, Text } from '@chakra-ui/react'
import React from 'react';
import {Carousel} from 'react-responsive-carousel';
import "react-responsive-carousel/lib/styles/carousel.min.css";

import img1 from "../assets/1.jpg";
import img2 from "../assets/2.jpg";

import img3 from "../assets/3.jpg";

import img4 from "../assets/4.jpg";
import img5 from "../assets/5.png";
const headingOptions = {
    pos:"absolute",
    left:"50%",
    top:"50%",
    textTransform:"uppercase",
    transform:"translate(-50%,-50%)",
    padding:"4",
    size:"2xl",


}
const Home = () => {
  return (
    <Box>
        <MyCarousel />

        <Container maxW={'container.xl'} minH={'100vh'} p={'16'}>
            
            <Heading textTransform={"uppercase"} m={'auto'}  py={'2'} w={'fit-content'} borderBottom={'2px solid'}>Services</Heading>

            <Stack
            h="full"
            p={"4"}
            alignItems={'centre'}
            direction={['column','row']}

            >
                <Image src={img5} h={['40','400']} filter={"hue-rotate(-130deg)"} />

                <Text letterSpacing={"widest"} lineHeight={'190%'} p={['4','16']} textAlign={'centre'} >
                    Lorem ipsum dolor sit amet consectetur, adipisicing elit. Enim eligendi iste, eum distinctio deleniti rem eaque autem ullam maiores delectus, asperiores minus voluptate exercitationem magni fuga? Nemo quod, delectus, quis laborum dolores hic quam corporis esse aspernatur voluptatibus molestiae dolore!
                    Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ducimus repellendus veritatis odit expedita nisi quam praesentium quia! Quam nostrum quia velit. Reiciendis voluptate temporibus aspernatur, enim illum odit numquam soluta perspiciatis saepe similique. Corrupti maxime vel corporis incidunt dolore? Nihil reiciendis dolores aperiam nobis, doloribus quo rerum aut exercitationem nam nostrum itaque dolorum molestiae dolorem sint voluptatibus possimus. Esse officia deleniti iusto aliquam neque culpa adipisci quibusdam distinctio magnam illum.
                </Text>

            </Stack>
        
        </Container>


    </Box>
  )
  
}
const MyCarousel = ()=>(
    <Carousel autoPlay infiniteLoop interval={2000} showStatus={false} showArrows={false} showThumbs={false}>
        <Box w="full" h={"100vh"}>
            <Image src={img1} />
            <Heading bgColor={"blackAlpha.600"} color={'white'}{...headingOptions}> Watch the Future </Heading>


        </Box>

        <Box w="full" h={"100vh"}>
            <Image src={img2} />
            <Heading bgColor={"whiteAlpha.900"} color={'black'} {...headingOptions}> Future is @Gaming </Heading>


        </Box>

        <Box w="full" h={"100vh"}>
            <Image src={img3} />
            <Heading bgColor={"whiteAlpha.600"} color={'black'} {...headingOptions}> Gaming On  </Heading>


        </Box>

        <Box w="full" h={"100vh"}>
            <Image src={img4} />
            <Heading bgColor={"whiteAlpha.500"} color={'black'} {...headingOptions}> Night Life is Cool  </Heading>


        </Box>


    </Carousel>
  );

export default Home