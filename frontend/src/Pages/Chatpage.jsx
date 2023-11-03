import { useContext, useState } from "react";
import SideDrawer from "../components/miscellaneous/SideDrawer";
import Chatbox from "../components/Chatbox";
import MyChats from "../components/MyChats";
import { Flex } from "@chakra-ui/react";
import { ChatContext } from "../context/ChatProvider";

const Chatpage = () => {
  const [fetchAgain, setFetchAgain] = useState(false);
  const { user } = useContext(ChatContext);
  // console.log(user);
  return (
    <Flex
      direction="column" // Set the direction to "column" for a vertical layout
      justifyContent="space-between"
      alignItems="stretch" // Set this to "stretch" to make children fill the width
      w="100%"
      h="100vh"
      p="10px"
    >
      {user && <SideDrawer />}
      <Flex
        justifyContent="space-between"
        alignItems="stretch"
        w="100%"
        h="100%"
      >
        {user && <MyChats fetchAgain={fetchAgain} />}
        {user && (
          <Chatbox fetchAgain={fetchAgain} setFetchAgain={setFetchAgain} />
        )}
      </Flex>
    </Flex>
  );
};

export default Chatpage;
