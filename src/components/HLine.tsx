import { PropsWithChildren } from "react";

const HLine = ({ children }: PropsWithChildren<{}>) => {
  return (
    <div
      style={{ width: "80%", height: 1, background: "#a0a0a0", margin: "16px" }}
    />
  );
};

export default HLine;
