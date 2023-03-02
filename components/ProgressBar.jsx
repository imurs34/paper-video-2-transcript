import styled from "styled-components";
import { useAtom } from "jotai";
import { useRef } from "react";

import { highlightAtom, percentAtom } from "../atom";

function Control({ jump }) {
  const [percent] = useAtom(percentAtom);
  const ref = useRef();
  const [, setHighlightAtom] = useAtom(highlightAtom);
  const jumpToPlay = (e) => {
    setHighlightAtom(null);
    const percentPoint = e.nativeEvent.offsetX / ref.current.offsetWidth;
    jump(percentPoint);
  };
  return (
    <ProgressBarLine onClick={jumpToPlay} ref={ref}>
      <ProgressBarFilled percent={percent} />
    </ProgressBarLine>
  );
}

const ProgressBarLine = styled.div`
  display: flex;
  width: 100%;
  height: 10px;
  margin-top: 5px;
  margin-bottom: 5px;
  background-color: #adadad;
  cursor: pointer;
`;
const ProgressBarFilled = styled.div`
  color: white;
  flex-basis: ${(props) => props.percent}%;
  background-color: red;
  z-index: 1500;
  height: 10px;
  position: relative;
`;


export default Control;