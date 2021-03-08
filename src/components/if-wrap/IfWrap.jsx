import React from "react";
import { bool } from "prop-types";

// 用来包装需要判断展示dom的，类似于 v-if
export default function IfWrap(props) {
  const { when, children } = props;
  return (
    when ?
      React.Children.map(children, item => item) : <></>
  );
}

IfWrap.propTypes = {
  when: bool
};

IfWrap.defaultProps = {
  when: false
};

