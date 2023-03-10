import * as React from "react";
import { VStack } from "@chakra-ui/react";

/**
 * Illustrates the use of children prop and spread operator
 */
const FullScreenSection = ({ children, isDarkBackground, ...boxProps }) => {
  return (
    <VStack
      backgroundColor={boxProps.backgroundColor}
      bgGradient={boxProps.bgGradient}
      color={isDarkBackground ? "white" : "black"}
      maxWidth="auto" minHeight="100vh" {...boxProps}>
        {children}
      </VStack>
      
   
  );
};

export default FullScreenSection;
