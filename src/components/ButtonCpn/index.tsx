import { memo } from "react";

interface propsType {
  onClick: () => void;
}
const ButtonCpn = (props: propsType) => {
  const { onClick } = props;
  console.log("re-render button");
  return <button onClick={onClick}>test button</button>;
};

export default memo(ButtonCpn);
