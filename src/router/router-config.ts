import React, { ComponentType } from "react";
import Home from "pages/home/Home";
import Header from "pages/home/header/Header";
import About from "pages/about/About";
import IRouteItem from "./types";


type IRouter = IRouteItem[]


const router: IRouter = [
  {
    key: 'home',
    path: '/home',
    component: Home,
    routes: [
      {
        key: 'header',
        path: '/home/header',
        component: Header,
      }
    ]
  },
  {
    key: 'about',
    path: '/about',
    component: About,
  },
];

export default router;