import { PropsWithChildren } from "react";

const Centered = ({ children }: PropsWithChildren<{}>) => {
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        textAlign: "center",
      }}
    >
      {children}
    </div>
  );
};

export default Centered;
