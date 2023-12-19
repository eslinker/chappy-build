import React from 'react'
import {BrowserRouter, Routes, Route} from "react-router-dom";
import Lecture from "./pages/lecture/Lecture";
import GlobalNav from "./components/GlobalNav";
import GlobalFooter from "./components/GlobalFooter";
import Main from "./pages/Main";
import Layout from "./pages/Layout";
import Sidebar from "./components/Sidebar";

function App() {
  return (
    <>
    <BrowserRouter>
        <GlobalNav />
        <Sidebar />
        <Routes>
            <Route path='/' element={<Layout />}>
                <Route index element={<Main />}></Route>
                <Route path='/lecture' element={<Lecture />}/>
            </Route>
        </Routes>
        <GlobalFooter />
    </BrowserRouter>
    </>
  );
}

export default App;
