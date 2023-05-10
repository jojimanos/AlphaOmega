import {
  Popover,
  PopoverTrigger,
  PopoverContent,
  PopoverHeader,
  PopoverBody,
  PopoverFooter,
  PopoverArrow,
  PopoverCloseButton,
  PopoverAnchor,
  Text,
  Flex,
} from "@chakra-ui/react";

type PopOverProps = {
  w: string;
  index: number;
};

const PopOver: React.FC<PopOverProps> = ({ w, index }) => {
  return (
    <Popover trigger="hover">
      <PopoverTrigger>
        <Text>{w[index]}</Text>
      </PopoverTrigger>
      <PopoverContent bg="tomato" color="white">
        <PopoverHeader fontWeight="semibold">Customization</PopoverHeader>
        <PopoverArrow bg="pink.500" />
        <PopoverCloseButton bg="purple.500" />
        <PopoverBody>
          Tadaa!! The arrow color and background color is customized. Check the
          props for each component.
        </PopoverBody>
      </PopoverContent>
    </Popover>
  );
};

export default PopOver;
