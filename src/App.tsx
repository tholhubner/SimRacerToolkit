import React from "react"
import { Provider } from "react-redux"
import { store } from "./app/store"
import Router from "./routing/Router"

function App(): JSX.Element {
  return (
    <Provider store={store}>
      <Router />
    </Provider>
  )
}

export default App
