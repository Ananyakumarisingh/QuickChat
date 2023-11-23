import React, { useEffect, useState } from 'react'
import { ChatState } from '../Context/ChatProvider'
import { Box } from '@chakra-ui/layout'
import SideDrawer from '../components/miscellaneous/SideDrawer'
import MyChats from '../components/MyChats'
import ChatBox from '../components/ChatBox'

const ChatPage = () => {
  const {user} = ChatState()
  return (<div style={{width: "100%"}}>
    {user && <SideDrawer />}
    <Box>{user && <MyChats />}</Box>
    <Box>{user && <ChatBox />}</Box>
  </div>)
  
}

export default ChatPage
