import { MIN_SCREEN_WIDTH } from "@/lib/utils";
import React, { PropsWithChildren } from "react";

const MobileScreen = ({ children }: PropsWithChildren) => {
  return (
    <div className={`w-full min-w-[${MIN_SCREEN_WIDTH}px]`}>
      <div className="w-full overflow-auto">{children}</div>
    </div>
  );
};

export default MobileScreen;
