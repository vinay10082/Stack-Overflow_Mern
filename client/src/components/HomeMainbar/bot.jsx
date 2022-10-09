import React from 'react'
import ChatBot from 'react-simple-chatbot'
import { ThemeProvider } from 'styled-components'

import '../../assets/chatbot.png'
import '../../Pages/AskQuestion/AskQuestion'
import AskQuestion from '../../Pages/AskQuestion/AskQuestion'

// Creating our own theme
const theme = {
    background: '#FFE4E1',
    headerBgColor: '#D8BFD8',
    headerFontSize: '20px',
    botBubbleColor: 'white',
    headerFontColor: 'white',
    botFontColor: 'F5F5F5',
    userBubbleColor: '#98FB98',
    userFontColor: 'black',
};

// Set some properties of the bot
const config = {
    botAvatar: 'chatbot.png',
    floating: true,
};

const Bot=() => {

    return (
        <div className="App">
            <ThemeProvider theme={theme}>
                <ChatBot
                    // This appears as the header
                    // text for the chat bot
                    headerTitle="Ask Me"
                    steps = {[
                        {
                            id: '0',
                            message: 'Hey User!',
                            // This calls the next id
                            // i.e. id 1 in this case
                            trigger: '1',
                        }, {
                            id: '1',
                     
                            // This message appears in
                            // the bot chat bubble
                            message: 'Please write your username',
                            trigger: '2'
                        }, {
                            id: '2',
                     
                            // Here we want the user
                            // to enter input
                            user: true,
                            trigger: '3',
                        }, {
                            id: '3',
                            message: " hi {previousValue}, Ask your Doubts Here?",
                            trigger: 4
                        }, {
                            id: '4',
                            component:<AskQuestion />,
                            trigger: 5
                        },{
                            id:'5',
                            message: "Thanks for Asking",
                            end:true
                        }
                    ]}
                    {...config}
 
                />
            </ThemeProvider>
        </div>
    )
}
 
export default Bot;