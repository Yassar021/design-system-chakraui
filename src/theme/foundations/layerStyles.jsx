const layerStyles = {
    transparentBorder: {
    border: '2px',
    borderRadius: 'lg',
    borderColor: 'transparent',
  },
  selectedBorder: {
    border: '2px',
    borderRadius: 'lg',
    borderColor: 'primary.500',
  },
};

export default layerStyles;

// ex:

// type Props = {
//   itemNumber: string;
//   isSelected?: boolean;
//   boxStyle?: Record<string, any>;
//   onClick: () => void;
// }

// export const Card = ({ itemNumber, isSelected, boxStyle, onClick }: Props) => {
//   const layerStyle = isSelected ? 'selectedBorder' : 'transparentBorder';

//   return (
//     <Flex layerStyle={layerStyle} {...boxStyle} onClick={onClick}>
//       <Flex w="full">
//         <Box>{itemNumber} Item</Box>
//       </Flex>
//     </Flex>
//   );
// };