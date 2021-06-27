import { BrowserRouter, Switch, Route } from 'react-router-dom'
import { AuthProvider } from './contexts/Auth'

import { Home } from './pages/Home'
import { NewRoom } from './pages/NewRoom'
import { Room } from './pages/Room'
import { AdminRoom } from './pages/AdminRoom'

import { GlobalStyles } from './assets/styles/global'

function App() {
  return (
    <AuthProvider>
      <BrowserRouter>
        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/rooms/new" component={NewRoom} />
          <Route path="/rooms/:room_id" component={Room} />
          <Route path="/admin/rooms/:room_id" component={AdminRoom} />
        </Switch>
      </BrowserRouter>
      <GlobalStyles />
    </AuthProvider>
  )
}

export default App;
