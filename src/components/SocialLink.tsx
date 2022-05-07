import { PropsWithChildren } from "react";

const SocialLink = ({
  children,
  iconSrc,
}: PropsWithChildren<{ iconSrc?: string }>) => {
  return (
    <h5 style={{ margin: "0 16px" }}>
      <div
        style={{
          display: "flex",
          alignItems: "center",
        }}
      >
        {iconSrc && (
          <div
            style={{
              background: `url("${iconSrc}") center no-repeat`,
              backgroundSize: "contain",
              width: 18,
              height: 18,
              marginRight: "var(--spacing-2x)",
            }}
          />
        )}
        {children}
      </div>
    </h5>
  );
};

export default SocialLink;
