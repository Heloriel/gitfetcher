import * as SwitchPrimitive from "@radix-ui/react-switch";
import clsx from "clsx";
import { useContext, useState } from "react";
import { ThemeContext } from "../contexts/ThemeContext";

const Switch = () => {
  const context = useContext(ThemeContext);

  return (
    <SwitchPrimitive.Root
      className={clsx(
        "group",
        "radix-state-checked:bg-purple-600",
        "relative inline-flex h-[24px] w-[44px] flex-shrink-0 cursor-pointer rounded-full border-2 border-transparent transition-colors duration-200 ease-in-out",
        "focus:outline-none focus-visible:ring focus-visible:ring-sky-500 focus-visible:ring-opacity-75 bg-zinc-700"
      )}
      checked={context.darkMode}
      onCheckedChange={() => context.setMode(!context.darkMode)}
    >
      <SwitchPrimitive.Thumb
        className={clsx(
          {"translate-x-5": context.darkMode},
          "group-radix-state-unchecked:translate-x-0",
          "pointer-events-none inline-block h-[20px] w-[20px] transform rounded-full bg-sky-500 shadow-lg ring-0 transition duration-200 ease-in-out"
        )}
      />
    </SwitchPrimitive.Root>
  );
};

export default Switch;