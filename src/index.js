import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import theme from "./styles/theme";
import { ThemeProvider } from "@mui/material/styles";
import router from "./routes/index";
import { RouterProvider } from "react-router-dom";

import { register } from 'swiper/element/bundle'
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
register();

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <ThemeProvider theme={theme}>
      <RouterProvider router={router} />
    </ThemeProvider>
  </React.StrictMode>
);
