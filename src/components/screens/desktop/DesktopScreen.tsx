import React, { PropsWithChildren } from "react";

const DesktopScreen = ({ children }: PropsWithChildren) => {
  return <div className="w-full">{children}</div>;
};

export default DesktopScreen;
