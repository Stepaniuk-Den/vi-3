"use client";

import { useState, useEffect } from "react";
import Select from "react-select";

// Генерує всі можливі слоти часу з 9:00 до 18:00 з кроком у 15 хвилин
const generateTimeSlots = () => {
  const times: { label: string; value: string }[] = [];
  for (let hour = 9; hour < 18; hour++) {
    for (const min of [0, 15, 30, 45]) {
      const timeString = `${hour.toString().padStart(2, "0")}:${min.toString().padStart(2, "0")}`;
      times.push({ label: timeString, value: timeString });
    }
  }
  return times;
};

const TimeSelect = ({ onChange, selectedDate }: { onChange: (time: string) => void, selectedDate: string }) => {
  const [selectedTime, setSelectedTime] = useState(null);
  const [filteredTimeOptions, setFilteredTimeOptions] = useState(generateTimeSlots());

  useEffect(() => {
    const now = new Date();
    const currentHour = now.getHours();
    const currentMinutes = now.getMinutes();
    
    const today = new Date().toISOString().split("T")[0]; // Отримуємо сьогоднішню дату у форматі YYYY-MM-DD

    let availableTimes = generateTimeSlots();

    // Якщо вибрана сьогоднішня дата і поточний час між 9:00 - 18:00
    if (selectedDate === today && currentHour >= 9 && currentHour < 18) {
      availableTimes = availableTimes.filter(({ value }) => {
        const [hour, minute] = value.split(":").map(Number);
        return hour > currentHour || (hour === currentHour && minute >= currentMinutes);
      });
    }

    setFilteredTimeOptions(availableTimes);
  }, [selectedDate]);

  const handleSelectChange = (selectedOption: any) => {
    setSelectedTime(selectedOption);
    onChange(selectedOption.value); // Відправляємо вибране значення
  };

  return (
    <Select
      value={selectedTime}
      onChange={handleSelectChange}
      options={filteredTimeOptions}
      placeholder="Оберіть час"
      className="inputsCl"

    />
  );
};

export default TimeSelect;
