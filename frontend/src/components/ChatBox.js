import { Box } from "@chakra-ui/layout";
import { ChatState } from "../context/ChatProvider";

const Chatbox = () => {
  const { selectedChat } = ChatState();

  return (
    <Box
      display={{ base: selectedChat ? "flex" : "none", md: "flex" }}
      alignItems="center"
      flexDir="column"
      p={3}
      bg="white"
      w={{ base: "100%", md: "68%" }}
      borderRadius="lg"
      borderWidth="1px"
    >
      Single chat
    </Box>
  );
};

export default Chatbox;
