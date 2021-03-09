import React,{ FC } from "react";
import IRouteItem from "router/types";
import RenderRouter from "router/RenderRouter";

interface IRouterConfig {
  routes?: IRouteItem[],
}

const Home : FC<IRouterConfig> = ({ routes }) => {
  return (
    <div>
      Home Page
        {
          routes && <RenderRouter routes={ routes }  />
        }
    </div>
  );
};

export default Home;