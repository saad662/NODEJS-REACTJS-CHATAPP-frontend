import { MultiChatSocket, MultiChatWindow, useMultiChatLogic } from 'react-chat-engine-advanced'

const ChatsPage = (props) => {
  const chatProps = useMultiChatLogic(
    '2f681cd3-702e-4f23-8ac7-9b3e6227d0ef',
    props.user.username,
    props.user.secret
  );
  return (
    <div style={{ height: '100vh' }}>
      <MultiChatSocket {...chatProps} />  {/* Allow us to connect to chat engine websockts */}
      <MultiChatWindow {...chatProps} style={{ height: '100%' }} />
    </div>
  )
}

export default ChatsPage