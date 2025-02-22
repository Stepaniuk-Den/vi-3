// components/MuiSelect/CustomSelect.tsx
import { FormControl,SelectChangeEvent } from "@mui/material";
import { FC } from "react";
import { CustomSelect, StyledInputLabel, StyledMenuItem } from "./StyledSelect";

interface IDateProps {
  label: string;
  value: string;
  onChange: (event: SelectChangeEvent<unknown>) => void;
  options: { value: string; label: string }[];
  error?: string;
}

const DateSelect: FC<IDateProps> = ({
  label,
  value,
  onChange,
  options,
  error,
}) => {
  return (
    <FormControl fullWidth error={!!error}>
      <StyledInputLabel id="date">{label}</StyledInputLabel>
      <CustomSelect
        labelId="date"
        id="date"
        name="date"
        label={label}
        value={value || ""}
        onChange={onChange}
      >
        {options.map(({ value, label }) => (
          <StyledMenuItem key={value} value={value}>
            {label}
          </StyledMenuItem>
        ))}
      </CustomSelect>
    </FormControl>
  );
};

export default DateSelect;
