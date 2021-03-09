import React, { Children, FC } from "react";

interface IIfWrapProps {
  when: any,
}

// 用来包装需要判断展示dom的，类似于 v-if
const IfWrap: FC<IIfWrapProps> = ({ when, children }) => (
  <>
    {
      when && Children.map(children, item => item)
    }
  </>
);

IfWrap.defaultProps = {
  when: false
};

export default IfWrap;