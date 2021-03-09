import React from "react";
import IfWrap from "./IfWrap";

export default function IfWrapDemo() {
  return (
    <div>
      <IfWrap when={ true }>
        <span>展示的内容</span>
      </IfWrap>
      <IfWrap when={ false }>
        <span>不展示的内容</span>
      </IfWrap>
    </div>
  );
}