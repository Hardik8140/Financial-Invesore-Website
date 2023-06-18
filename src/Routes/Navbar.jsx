import {
  Box,
  Drawer,
  DrawerBody,
  DrawerContent,
  DrawerFooter,
  DrawerHeader,
  DrawerOverlay,
  Image,
  useDisclosure,
} from "@chakra-ui/react";
import React from "react";
import { Link as RouterLink } from "react-router-dom";
import style from "./Style.module.css";
import { HamburgerIcon } from "@chakra-ui/icons";

const Navbar = () => {
  const links = [
    {
      title: "Docs",
      path: "/docs",
    },
    {
      title: "Security",
      path: "/security",
    },
    {
      title: "Faq",
      path: "/faq",
    },
  ];

  const { isOpen, onOpen, onClose } = useDisclosure();
  const btnRef = React.useRef();

  return (
    <Box
      display="flex"
      justifyContent="space-between"
      alignItems="center"
      bgGradient="linear(to-t, black, brand.100)"
      // textAlign="center"
      p={6}
    >
      <RouterLink to="/">
        <Image src="logo.png" boxSize="60px" />
      </RouterLink>

      <Box
        // border="1px solid red"
        display="flex"
        // w="40%"
        justifyContent="space-evenly"
        // textAlign="center"
      >
        <Box
          display={{ base: "none", md: "flex" }}
          width="100%"
          mr="40px"
          // textAlign="center"
        >
          {links.map((link) => (
            <RouterLink key={link.path} to={link.path} className={style.btn}>
              {link.title}
            </RouterLink>
          ))}
        </Box>

        <Box>
          <HamburgerIcon
            color="white"
            ref={btnRef}
            onClick={onOpen}
            _hover={{ cursor: "pointer", color: "yellow" }}
          />
          <Drawer
            isOpen={isOpen}
            placement="right"
            onClose={onClose}
            finalFocusRef={btnRef}
          >
            <DrawerOverlay />
            <DrawerContent bgGradient="linear(to-t, black, brand.100)">
              <DrawerHeader
                color="yellow.100"
                textAlign="center"
                textDecoration="underline"
                fontSize="xx-large"
              >
                Grow Finance
              </DrawerHeader>

              <DrawerBody
                display="flex"
                flexDirection="column"
                color="yellow.100"
                // border="1px solid white"

                m={4}
                alignItems="center"
                // marginBottom="30px"
              >
                {links.map((link) => (
                  <RouterLink
                    key={link.path}
                    to={link.path}
                    className={style.links}
                  >
                    {link.title}
                  </RouterLink>
                ))}
                <RouterLink to="/ieData" className={style.links}>
                  Connect People
                </RouterLink>
                <RouterLink to="/login" className={style.links}>
                  Login
                </RouterLink>
                <RouterLink to="/signup" className={style.links}>
                  SignUp
                </RouterLink>
              </DrawerBody>

              <DrawerFooter></DrawerFooter>
            </DrawerContent>
          </Drawer>
        </Box>
      </Box>
    </Box>
  );
};

export default Navbar;
