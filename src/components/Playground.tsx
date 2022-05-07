import { PropsWithChildren } from "react";

const Playground = ({ children }: PropsWithChildren<{}>) => {
  return (
    <div
      style={{
        margin: "var(--spacing-4x) 0",
        padding: "var(--spacing-4x)",
        border: "solid 1px var(--border)",
        borderRadius: "var(--border-radius-md)",
      }}
    >
      {children}
    </div>
  );
};

export default Playground;
