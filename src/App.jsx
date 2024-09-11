import Login from "./components/login/Login"
import Chat from "./components/chat/Chat"
import Detail from "./components/details/Detail"
import List from "./components/list/List"

const App = () => {
  const user = false

  return (
    <div className='container'>
      {
        user ? (
          <>
            <List/>
            <Chat/>
            <Detail/>
          </>
        ) : (<Login/>)
      }
    </div>
  )
}

export default App
