import {
  Modal,
  Button,
  ModalBody,
  ModalCloseButton,
  ModalContent,
  ModalHeader,
  ModalOverlay,
  Flex,
  Text,
} from "@chakra-ui/react";
import { useClickableWord } from "../../methods/useClickableWord";

type ModalProps = {
  isOpen: any;
  onClose: any;
  searchOnPerseus: any;
  searchOnBibleNames: any;
  word: string;
};

const ModalComponent: React.FC<ModalProps> = ({
  isOpen,
  onClose,
  searchOnPerseus,
  searchOnBibleNames,
  word,
}) => {
  const { dictionary, wikipedia, searchForTheWord } = useClickableWord;

  return (
    <Modal
      size="md"
      motionPreset="scale"
      isCentered
      isOpen={isOpen}
      onClose={onClose}
    >
      <ModalOverlay bg="blackAlpha.50" />
      <ModalContent>
        <ModalCloseButton alignItems="flex-end" />
        <ModalHeader textAlign="center">Modal Title</ModalHeader>
        <ModalBody
          display="flex"
          flexDirection="column"
          alignItems="center"
          justifyContent="center"
          pb={6}
        >
          <Text>{}</Text>
          {
            <Button
              mb={1}
              onClick={(e) => {
                e.preventDefault();
                dictionary(word);
                e.stopPropagation();
              }}
            >
              Perseus
            </Button>
          }
          {
            <Button
              mb={1}
              onClick={(e) => {
                e.preventDefault();
                wikipedia(word);
                e.stopPropagation();
              }}
            >
              Bible Names
            </Button>
          }
          <Flex direction="column" align="center" justify="center" width="70%">
            <Button color="black.600" bg="blue.400" onClick={onClose}>
              Close
            </Button>
          </Flex>
        </ModalBody>
      </ModalContent>
    </Modal>
  );
};

export default ModalComponent;
