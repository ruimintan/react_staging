import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';

// reportWebVitals：页面性能分析文件（需要web-vitals库支持）
import reportWebVitals from './reportWebVitals';

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);

reportWebVitals();
