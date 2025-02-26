import { FormControl, SelectChangeEvent } from "@mui/material";
import { FC } from "react";
// import { CustomSelect, StyledInputLabel, StyledMenuItem } from "./StyledSelect";
import { inputLabelStyles, menuItemStyles, selectStyles } from "./SelectStyles";
// import Select from '@mui/material/Select';
// import InputLabel from '@mui/material/InputLabel';
// import MenuItem from '@mui/material/MenuItem';
import dynamic from "next/dynamic";

interface IDateProps {
  label: string;
  value: string;
  onChange: (event: SelectChangeEvent<unknown>) => void;
  options: { value: string; label: string }[];
  error?: string;
}

const Select = dynamic(() => import("@mui/material/Select"), { ssr: false });
const InputLabel = dynamic(() => import("@mui/material/InputLabel"), { ssr: false });
const MenuItem = dynamic(() => import("@mui/material/MenuItem"), { ssr: false });

const DateSelect: FC<IDateProps> = ({
  label,
  value,
  onChange,
  options,
  error,
}) => {
  return (
    <FormControl fullWidth error={!!error}>
      <InputLabel id="date" sx={inputLabelStyles}>{label}</InputLabel>
      <Select
        labelId="date"
        sx={selectStyles}
        id="date"
        name="date"
        label={label}
        value={value || ""}
        onChange={onChange}
      >
        {options.map(({ value, label }) => (
          <MenuItem sx={menuItemStyles} key={value} value={value}>
            {label}
          </MenuItem>
        ))}
      </Select>
    </FormControl>
  );
};

export default DateSelect;
