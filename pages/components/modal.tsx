import {
  Modal,
  Button,
  ModalBody,
  ModalCloseButton,
  ModalContent,
  ModalHeader,
  ModalOverlay,
  Flex,
} from "@chakra-ui/react";

type ModalProps = {
  isOpen: any;
  onClose: any;
  perseusLink: any;
  //bibleNamesLink: any;
  index: number;
  word: string[];
  //onPerseus: boolean;
  //onBibleNames: boolean;
};

const ModalComponent: React.FC<ModalProps> = ({
  isOpen,
  onClose,
  perseusLink,
  //  bibleNamesLink,
  index,
  word,
  //onPerseus,
  //onBibleNames,
}) => {
  function dictionary(word: string[], index: number) {
    let link1 = "http://www.perseus.tufts.edu/hopper/morph?l=";
    let link2 = "&la=greek";
    let link = link1 + word[index] + link2;
    console.log("The word is HERE", word[index], index);
    open(link);
  }

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
          {
            <Button
              mb={1}
              onClick={(e) => {
                e.preventDefault();
                dictionary(word, index);
              }}
            >
              Perseus
            </Button>
          }
          {
            <Button mb={1} onClick={() => {}}>
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
