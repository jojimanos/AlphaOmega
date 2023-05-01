import {
  Modal,
  Button,
  ModalBody,
  ModalCloseButton,
  ModalContent,
  ModalFooter,
  ModalHeader,
  ModalOverlay,
  Flex,
} from "@chakra-ui/react";

type ModalProps = {
  isOpen: any;
  onClose: any;
  perseusLink: any;
  bibleNamesLink: any;
  word: string;
  onPerseus: boolean;
  onBibleNames: boolean;
};

const ModalComponent: React.FC<ModalProps> = ({
  isOpen,
  onClose,
  perseusLink,
  bibleNamesLink,
  word,
  onPerseus,
  onBibleNames,
}) => {
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
          {onPerseus && (
            <Button mb={1} onClick={perseusLink}>
              Perseus
            </Button>
          )}
          {onBibleNames && (
            <Button mb={1} onClick={bibleNamesLink}>
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
