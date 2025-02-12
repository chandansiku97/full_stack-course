import { Route, Routes } from "react-router-dom";
import Login from "./Components/Login"
import PageNotFound from "./Components/PageNotFound";
import Home from "./Components/Home";
import ProtectedRoute from "./Components/ProtectedRoute";
import { useState } from "react";
import { ThemeProvider } from './Components/Theme_context';
function App() {
  // loggdeIn -> information , user data -> CRUD
  return (
    <>
     <ThemeProvider>  {/* Wrap your app in ThemeProvider */}
      <Routes>
        <Route path="/" element={<ProtectedRoute>
          <Home ></Home>
        </ProtectedRoute>}></Route>

      <Route path="/:chatid" element={
          <ProtectedRoute><Home></Home></ProtectedRoute>
        }></Route>

        <Route path="/login" element={<Login ></Login>}></Route>
        <Route path="*" element={< PageNotFound />} />
      </Routes>
      </ThemeProvider>
    </>
  )
}

export default App