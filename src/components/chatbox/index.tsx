"use client"

import "@chatscope/chat-ui-kit-styles/dist/default/styles.min.css"
import React from "react"
import {
  MainContainer,
  ChatContainer,
  MessageList,
  Message,
  MessageInput,
} from "@chatscope/chat-ui-kit-react"
import { ChartBar } from "../dushboard"
import Area from "../aera"
import RadialBar from "../treeMap"

const Chat: React.FC = () => {
  return (
    <div style={{ position: "relative" }}>
      <MainContainer>
        <ChatContainer>
          <MessageList>
            <Message
              model={{
                message: "please look this chart",
                sentTime: "just now",
                sender: "Joe",
              }}
            />
            <ChartBar />
            <Message
              model={{
                message: "please look this chart",
                sentTime: "just now",
                sender: "Joe",
              }}
            />
            <Area />
            <RadialBar />
          </MessageList>
          <MessageInput placeholder="Type message here" />
        </ChatContainer>
      </MainContainer>
    </div>
  )
}

export default Chat
