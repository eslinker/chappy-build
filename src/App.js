import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Lecture from './pages/lecture/Lecture';
import GlobalNav from './components/GlobalNav';
import GlobalFooter from './components/GlobalFooter';
import Main from './pages/Main';
import Layout from './pages/Layout';
import Sidebar from './components/Sidebar';
import Termination from './pages/lecture/Termination';
import Complete from './pages/lecture/Complete';
import Registering from './pages/lecture/Registering';
import Activity from './pages/Activity';

import { RecoilRoot } from 'recoil';

function App() {
  return (
    <>
      <RecoilRoot>
        <BrowserRouter>
          <GlobalNav />
          <Sidebar />
          <Routes>
            <Route path="/" element={<Layout />}>
              <Route index element={<Main />}></Route>
              <Route path="/lecture" element={<Lecture />} />
              <Route path="/complete" element={<Complete />} />
              <Route path="/termination" element={<Termination />} />
              <Route path="/registering" element={<Registering />} />
              <Route path="/activity" element={<Activity />} />
            </Route>
          </Routes>
          <GlobalFooter />
        </BrowserRouter>
      </RecoilRoot>
    </>
  );
}

export default App;
