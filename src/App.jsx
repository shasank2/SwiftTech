import { useState } from 'react'
import LayoutComponent from './components/Layout/LayoutComponent'
import Dashboard from './pages/Dashboard'
import { Provider } from 'react-redux'
import { store } from './redux/store'

function App() {

  return (
    <>
      <Provider store={store}>
        <LayoutComponent >
          {/* React Router goes here but I just need a single page */}
          <Dashboard />
        </LayoutComponent>
      </Provider>
    </>
  )
}

export default App
