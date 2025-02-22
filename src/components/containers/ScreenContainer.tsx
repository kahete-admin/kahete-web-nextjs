"use client";

import useScreenSize from "@/hooks/useScreenSize";
import React, { PropsWithChildren } from "react";
import MobileScreen from "../screens/mobile/MobileScreen";
import DesktopScreen from "../screens/desktop/DesktopScreen";

const ScreenContainer = ({ children }: PropsWithChildren) => {
  const { width } = useScreenSize();
  return (
    <div className="flex relative min-h-[calc(100vh-74px)]">
      {width < 1200 && <MobileScreen>{children}</MobileScreen>}
      {width >= 1200 && <DesktopScreen>{children}</DesktopScreen>}
    </div>
  );
};

export default ScreenContainer;
