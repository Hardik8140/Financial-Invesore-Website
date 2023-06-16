import { Box, Center, Image, Text } from "@chakra-ui/react";
import React, { Component } from "react";
import Slider from "react-slick";

export default class CenterMode extends Component {
  render() {
    const settings = {
      className: "center",
      centerMode: true,
      infinite: true,
      centerPadding: "60px",
      slidesToShow: 3,
      speed: 500,
    };
    return (
      <Center bgGradient="linear(to-t, black, brand.100, black)">
        <Box mt="50px" mb="50px" w="90%" color="white" textAlign="center">
          <Slider {...settings}>
            <Box borderRadius="20px" p="40px" border="1px solid #00ff0a">
              <Image
                src="one.jpg"
                border="1px solid #00ff0a"
                borderRadius="5px"
                boxSize="100px"
              />
              <Text>
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Accusamus quibusdam cupiditate aliquam iste amet, sint totam
                recusandae asperiores, esse, modi a praesentium labore? Illum,
                maiores! Odio, dolor quis. Distinctio, totam.
              </Text>
            </Box>

            <Box>
              <Image
                src="two.jpg"
                border="1px solid #00ff0a"
                borderRadius="5px"
                boxSize="200px"
              />
            </Box>
            <Box>
              <Image
                src="three.jpg"
                border="1px solid #00ff0a"
                borderRadius="5px"
                boxSize="200px"
              />
            </Box>
            <Box>
              <Image
                src="four.jpg"
                border="1px solid #00ff0a"
                borderRadius="5px"
                boxSize="200px"
              />
            </Box>
            <Box>
              <Image
                src="five.jpg"
                border="1px solid #00ff0a"
                borderRadius="5px"
                boxSize="200px"
              />
            </Box>
            <Box>
              <Image
                src="six.jpg"
                border="1px solid #00ff0a"
                borderRadius="5px"
                boxSize="200px"
              />
            </Box>
          </Slider>
        </Box>
      </Center>
    );
  }
}
