"use client";

import { useState, useEffect, useRef } from "react";
import { FormControl, SelectChangeEvent } from "@mui/material";
// import { CustomSelect, StyledInputLabel, StyledMenuItem } from "./StyledSelect";
import useCurrentViewportHeight from "@/helpers/useCurrentViewportHeight";
import Select from '@mui/material/Select';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import { inputLabelStyles, menuItemStyles, selectStyles } from "./SelectStyles";

interface IOptionType {
  label: string;
  value: string;
}

interface ITimeSelectProps {
  onChange: (time: string) => void;
  selectedDate: string;
  t: (key: string) => string;
  disabled?: boolean;
  error?: string;
}

const generateTimeSlots = () => {
  const times: IOptionType[] = [];
  for (let hour = 9; hour < 18; hour++) {
    for (const min of [0, 15, 30, 45]) {
      const timeString = `${hour.toString().padStart(2, "0")}:${min
        .toString()
        .padStart(2, "0")}`;
      times.push({ label: timeString, value: timeString });
    }
  }
  return times;
};

const TimeSelect = ({
  onChange,
  selectedDate,
  t,
  disabled,
  error,
}: ITimeSelectProps) => {
  const [selectedTime, setSelectedTime] = useState<string>("");
  const [filteredTimeOptions, setFilteredTimeOptions] = useState<IOptionType[]>(
    generateTimeSlots()
  );
  const [menuMaxHeight, setMenuMaxHeight] = useState<number>(200);

  const height = useCurrentViewportHeight();
  const selectRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    if (selectRef.current) {
      const selectRect = selectRef.current.getBoundingClientRect();
      const modalHeight = height;
      const availableSpace = modalHeight - selectRect.bottom - 20; 
      setMenuMaxHeight(Math.max(availableSpace, 100)); // 
    }
  }, [height]);

  useEffect(() => {
    const now = new Date();
    const currentHour = now.getHours();
    const currentMinutes = now.getMinutes();
    const today = new Date().toISOString().split("T")[0];

    let availableTimes = generateTimeSlots();

    if (selectedDate === today && currentHour >= 9 && currentHour < 18) {
      availableTimes = availableTimes.filter(({ value }) => {
        const [hour, minute] = value.split(":").map(Number);
        return (
          hour > currentHour ||
          (hour === currentHour && minute >= currentMinutes)
        );
      });
    }

    setFilteredTimeOptions(availableTimes);

    // if (availableTimes.length > 0) {
    //   setSelectedTime(availableTimes[0].value);
    //   onChange(availableTimes[0].value);
    // }
  }, [selectedDate, onChange]);

  const handleSelectChange = (event: SelectChangeEvent<unknown>) => {
    setSelectedTime(event.target.value as string);
    onChange(event.target.value as string);
  };

  return (
    <FormControl fullWidth error={!!error}>
      <InputLabel id="time"sx={inputLabelStyles}>{t("time")}</InputLabel>
      <Select
        labelId="time"
        sx={selectStyles} 
        id="time"
        name="time"
        disabled={disabled}
        value={selectedTime}
        onChange={handleSelectChange}
        aria-labelledby="time"
        label={t("time")}
        MenuProps={{
          disablePortal: true,
          container: selectRef.current,
          PaperProps: {
            sx: {
              backgroundColor: "white",
              borderRadius: "8px",
              boxShadow: "0px 4px 6px rgba(0, 0, 0, 0.1)",
              maxHeight: `${menuMaxHeight}px`,
              //           "@media (min-width: 768px)": {
              //            height: `calc(${height}px - 400px)`,
              // },

              // "@media (min-width: 1024px)": {
              //   height: `calc(${height}px - 460px)`,
              // },
            },
            style: {
              // overflowY: "auto",
              // touchAction: "auto",
            },
            className: "custom-scroll",
          },
          // disableScrollLock: true,
          MenuListProps: {
            sx: {
              padding: "0",
            },
          },
        }}
      >
        {filteredTimeOptions.map((option) => (
          <MenuItem sx={menuItemStyles} key={option.value} value={option.value}>
            {option.label}
          </MenuItem>
        ))}
      </Select>
    </FormControl>
  );
};

export default TimeSelect;
