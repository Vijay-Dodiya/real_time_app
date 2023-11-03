import { ViewIcon } from "@chakra-ui/icons";
import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalBody,
  ModalCloseButton,
  useDisclosure,
  IconButton,
  Image,
  Box,
} from "@chakra-ui/react";

const ProfileModal = ({ user, children }) => {
  const { isOpen, onOpen, onClose } = useDisclosure();

  return (
    <>
      {children ? (
        <span onClick={onOpen}>{children}</span>
      ) : (
        <IconButton d={{ base: "flex" }} icon={<ViewIcon />} onClick={onOpen} />
      )}
      <Modal size="lg" onClose={onClose} isOpen={isOpen} isCentered>
        <ModalOverlay />
        <ModalContent h="410px">
          <ModalHeader
            display="flex"
            flexDirection="column"
            alignItems="center"
            bg="blue.500"
            color="white"
            fontFamily="Poppins, sans-serif"
            p={4}
            borderRadius="md"
            fontSize={{ base: "24px", md: "40px" }}
            textTransform="uppercase"
          >
            {user.name}
          </ModalHeader>
          <ModalCloseButton bg="red.500" />
          <ModalBody
            display="flex"
            flexDir="column"
            alignItems="center"
            justifyContent="space-between"
            marginTop="4" // Add margin to the top
            marginBottom="8"
          >
            <Image
              borderRadius="full"
              boxSize="150px"
              src={user.pic}
              alt={user.name}
            />
            <Box
              bg="teal.300" // Choose an attractive color
              color="white"
              padding={4}
              borderRadius="md"
              fontSize={{ base: "16px", md: "18px" }}
            >
              Email: {user.email}
            </Box>
          </ModalBody>
        </ModalContent>
      </Modal>
    </>
  );
};

export default ProfileModal;
