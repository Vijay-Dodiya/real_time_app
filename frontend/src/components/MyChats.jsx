import axios from "axios";
import { AddIcon } from "@chakra-ui/icons";
import { useToast } from "@chakra-ui/toast";
import { useContext, useEffect, useState } from "react";
import { getSender } from "../config/ChatLogics";
import { Box, Flex, Button, Stack, Text } from "@chakra-ui/react";
import { ChatContext } from "../context/ChatProvider";
import ChatLoading from "./ChatLoading";
import GroupChatModal from "./miscellaneous/GroupChatModel";

const MyChats = ({ fetchAgain }) => {
  const [loggedUser, setLoggedUser] = useState();

  const { selectedChat, setSelectedChat, user, chats, setChats } =
    useContext(ChatContext);

  const toast = useToast();

  const fetchChats = async () => {
    // console.log(user._id);
    try {
      const config = {
        headers: {
          Authorization: `Bearer ${user.token}`,
        },
      };

      const { data } = await axios.get("/api/chat", config);
      setChats(data);
    } catch (error) {
      toast({
        title: "Error Occured!",
        description: "Failed to Load the chats",
        status: "error",
        duration: 5000,
        isClosable: true,
        position: "bottom-left",
      });
    }
  };

  useEffect(() => {
    setLoggedUser(JSON.parse(localStorage.getItem("userInfo")));
    fetchChats();
    // eslint-disable-next-line
  }, [fetchAgain]);

  return (
    <Box
      display={{ base: selectedChat ? "none" : "flex", md: "flex" }}
      flexDir="column"
      alignItems="center"
      p={3}
      bgGradient="linear(red.100 0%, orange.100 25%, yellow.100 50%)"
      w={{ base: "100%", md: "31%" }}
      borderRadius="lg"
      borderWidth="1px"
    >
      <Flex
        justifyContent="space-between"
        alignItems="center"
        p={3}
        bg="white"
        w="100%"
        borderRadius="lg"
      >
        <Box
          as="button"
          p={4}
          color="white"
          fontWeight="bold"
          borderRadius="md"
          bgGradient={[
            "linear(to-tr, teal.300, yellow.400)",
            "linear(to-t, blue.200, teal.500)",
            "linear(to-tr, teal.300, yellow.400)",
          ]}
          _hover={{
            bgGradient: [
              "linear(to-tr, teal.300, yellow.400)",
              "linear(to-t, blue.200, teal.500)",
              "linear(to-b, orange.100, purple.300)",
            ],
          }}
        >
          <Text
            fontSize={{ base: "25px", md: "18px", lg: "25px" }}
            fontFamily="Work sans"
            bgGradient="linear(to-l, #7928CA, #FF0080)"
            bgClip="text"
            fontWeight="extrabold"
          >
            My Chats
          </Text>
        </Box>

        <GroupChatModal>
          <Button
            bgGradient="linear(red.100 0%, orange.100 25%, yellow.100 50%)"
            display="flex"
            fontSize={{ base: "17px", md: "10px", lg: "17px" }}
            rightIcon={<AddIcon />}
          >
            New Group Chat
          </Button>
        </GroupChatModal>
      </Flex>
      <Box
        display="flex"
        flexDir="column"
        p={3}
        bg="#F8F8F8"
        w="100%"
        h="90%"
        borderRadius="lg"
        overflowY="hidden"
      >
        {chats ? (
          <Stack overflowY="scroll">
            {chats.map((chat) => (
              <Box
                onClick={() => setSelectedChat(chat)}
                cursor="pointer"
                bg={selectedChat === chat ? "#38B2AC" : "#E8E8E8"}
                color={selectedChat === chat ? "white" : "black"}
                px={3}
                py={2}
                borderRadius="lg"
                key={chat._id}
              >
                <Text>
                  {!chat.isGroupChat
                    ? getSender(loggedUser, chat.users)
                    : chat.chatName}
                </Text>
                {chat.latestMessage && (
                  <Text fontSize="xs">
                    <b>{chat.latestMessage.sender.name} : </b>
                    {chat.latestMessage.content.length > 50
                      ? chat.latestMessage.content.substring(0, 51) + "..."
                      : chat.latestMessage.content}
                  </Text>
                )}
              </Box>
            ))}
          </Stack>
        ) : (
          <ChatLoading />
        )}
      </Box>
    </Box>
  );
};

export default MyChats;
