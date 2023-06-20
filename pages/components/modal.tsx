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
import { useEffect } from "react";

type ModalProps = {
  isOpen: any;
  onClose: any;
  word: string;
  onPerseus: boolean;
  onBibleNames: boolean;
};

const ModalComponent: React.FC<ModalProps> = ({
  isOpen,
  onClose,
  word,
  onPerseus,
  onBibleNames,
}) => {
  const { perseusSearch, bibleNamesSearch, LSJSearch } = useClickableWord;

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
        <ModalHeader textAlign="center">Make a search in:</ModalHeader>
        <ModalBody
          display="flex"
          flexDirection="column"
          alignItems="center"
          justifyContent="center"
          pb={6}
        >
          {onPerseus && (
            <Button
              mb={1}
              onClick={(e) => {
                e.preventDefault();
                perseusSearch(word);
                e.stopPropagation();
              }}
            >
              Perseus
            </Button>
          )}
          {onPerseus && (
            <Button
              mb={1}
              onClick={(e) => {
                e.preventDefault();
                LSJSearch(word);
                e.stopPropagation();
              }}
            >
              LSJ
            </Button>
          )}
          {onBibleNames && (
            <Button
              mb={1}
              onClick={(e) => {
                e.preventDefault();
                bibleNamesSearch(word);
                e.stopPropagation();
              }}
            >
              Bible Names
            </Button>
          )}
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
