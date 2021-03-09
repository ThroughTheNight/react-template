import React, { ComponentType } from "react";
import Home from "pages/home/Home";
import Header from "pages/home/header/Header";
import About from "pages/about/About";

interface IRoute {
  key: string,
  path: string,
  component: ComponentType<IChildrenProps>,
  exact?: boolean,
  routes?: IRoute[],
}

interface IChildrenProps {
  [key: string]: any
}

type IRouter = IRoute[]



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