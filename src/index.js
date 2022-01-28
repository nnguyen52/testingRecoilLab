import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { RecoilRoot } from 'recoil';
import StartUp from './recoilComponents/StartUp';
import { AnimatePresence, LayoutGroup } from 'framer-motion';
import { WindowHookComp } from './recoilStates/windowResize';
ReactDOM.render(
  <>
    <LayoutGroup>
      <AnimatePresence exitBeforeEnter>
        <RecoilRoot>
          <React.StrictMode>
            <WindowHookComp />
            <StartUp />
            <App />
          </React.StrictMode>
        </RecoilRoot>
      </AnimatePresence>
    </LayoutGroup>
  </>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
