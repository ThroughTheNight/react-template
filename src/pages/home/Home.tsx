import React, { FC } from "react";
import IRouteItem from "router/types";
import RenderRouter from "router/RenderRouter";
import { Link } from "react-router-dom";
import { Button } from "antd";
import { connect } from "react-redux";
import { IState } from "store/types";

interface IRouterConfig {
  routes?: IRouteItem[],
  count?: number,
}

const Home: FC<IRouterConfig> = ({ routes, count }) => {
  return (
    <div>
      Home Page
      <Button>increment</Button>
      <div>count is {count}</div>
      <div><Link to="/about">To About</Link></div>
      {
        routes && <RenderRouter routes={routes} />
      }
    </div>
  );
};

const mapStateToProps = (state: IState) => {
  return {
    count: state.counts.count
  };
};

export default connect(mapStateToProps)(Home);