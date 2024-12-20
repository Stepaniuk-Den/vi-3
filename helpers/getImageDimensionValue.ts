export const getImageDimensionValue = (
  dimension: string | { [key: number]: string | undefined } | undefined,
  idx: number,
  defaultValue: string
): string => {
  if (typeof dimension === "object" && dimension !== null) {
    return dimension[idx + 1] || defaultValue;
  }
  return dimension || defaultValue;
};
