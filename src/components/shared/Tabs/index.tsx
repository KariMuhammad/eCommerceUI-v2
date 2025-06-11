import { cn } from "@/utils";
import React, { useState } from "react";

type TabsProps = {
  tabs: string[];
  children?: React.ReactNode;
};

export default function Tabs({ tabs, children }: TabsProps) {
  const [currentTab, setCurrentTab] = useState(0);

  return (
    <div aria-label="tabs navigation" className="w-full">
      <div className="flex justify-center items-center">
        {tabs.map((tabTitle, index) => (
          <span
            className={cn({
              "text-lg font-seimbold uppercase cursor-pointer px-4 py-2 border-b-2":
                true,
              "border-blue-500": currentTab === index,
              "border-transparent hover:border-gray-300": currentTab !== index,
            })}
            key={index}
            onClick={() => setCurrentTab(index)}
            role="button"
          >
            {tabTitle}
          </span>
        ))}
      </div>

      <div className="mt-4 p-3">
        {tabs.map((_tabTitle, index) => (
          <div
            key={index}
            className={cn({
              hidden: currentTab !== index,
              block: currentTab === index,
            })}
          >
            {children && React.Children.toArray(children)[index]}
          </div>
        ))}
      </div>
    </div>
  );
}
