export const FONT_WEIGHT = {
    BOLD: 'bold',
    SEMI: 600,
    NORMAL: 'normal',
  };
  
  const textStyles = {
    display1: {
      fontSize: '4.8rem',
      fontWeight: FONT_WEIGHT.SEMI,
      lineHeight: '6rem',
    },
    display2: {
      fontSize: '4rem',
      fontWeight: FONT_WEIGHT.SEMI,
      lineHeight: '4.8rem',
    },
    h1Semi: {
      fontSize: '3.2rem',
      fontWeight: FONT_WEIGHT.SEMI,
      lineHeight: '4.0rem',
    },
    body1Semi: {
      fontSize: '2rem',
      fontWeight: FONT_WEIGHT.SEMI,
      lineHeight: '2.8rem',
    },
    body1: {
      fontSize: '2rem',
      fontWeight: FONT_WEIGHT.NORMAL,
      lineHeight: '2.8rem',
    },
    body2: {
      fontSize: '1.6rem',
      fontWeight: FONT_WEIGHT.NORMAL,
      lineHeight: '2.4rem',
    },
    body2Semi: {
      fontSize: '1.6rem',
      fontWeight: FONT_WEIGHT.SEMI,
      lineHeight: '2.4rem',
    },
  };
  
  
  export default textStyles;
//   ex:
//   export const BoxTextStylesExamples = () => (
//     <Flex>
//       <Box w="10rem" textStyle="body4Uppercase">
//         Body 4 Uppercase
//       </Box>
//       <Box w="10rem" textStyle="h1Semi">
//         H1 Semi
//       </Box>
//      </Flex>;
//   );