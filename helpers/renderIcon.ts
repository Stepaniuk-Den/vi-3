import React from "react";

export const renderIcon = (
  icon: React.ReactNode,
  width: number,
  height: number
) => {
  if (!React.isValidElement(icon)) {
    console.error("Invalid icon passed to renderIcon:", icon);
    return null;
  }
  return React.cloneElement(icon as React.ReactElement, { width, height });
};
