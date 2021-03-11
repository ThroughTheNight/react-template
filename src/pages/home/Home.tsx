import React, { FC } from "react";
import RenderRouter from "router/RenderRouter";
import { IRouterConfig } from "./home-interface";
import { Link } from "react-router-dom";
import { Button } from "antd";
import { connect } from "react-redux";
import { Dispatch } from "redux";
import { INCREMENT_COUNT, DECREMENT_COUNT } from "store/reduces/counts";
import { DECREMENT_COUNT_ASYNC } from "store/sagas/root-saga";
import { IState, IAction } from "store/types";

const Home: FC<IRouterConfig> = ({ routes, count, onClickDispatch }) => {
  return (
    <div>
      <div>Home Page</div>
      <Button onClick={ () => onClickDispatch({ type: INCREMENT_COUNT }) }>increment</Button>
      <Button onClick={ () => onClickDispatch({ type: DECREMENT_COUNT }) }>decrement</Button>
      <Button onClick={ () => onClickDispatch({ type: DECREMENT_COUNT_ASYNC }) }>saga decrement</Button>
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

const mapDispatchToProps = (dispatch: Dispatch) => {
  return {
    onClickDispatch: (action: IAction) => {
      dispatch(action);
    },
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Home);