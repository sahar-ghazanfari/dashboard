"use client";
import { useLocale } from "@/context/LocaleContext";
import { Select, FormControl, MenuItem } from "@mui/material";

function LanguageSelector() {
  const { locale, setLocale } = useLocale();
  const handleChange = (e) => {
    setLocale(e.target.value);
  };

  return (
    <div>
      <FormControl className="relative">
        <Select
          value={locale}
          onChange={handleChange}
          displayEmpty
          className="px-3 rounded-lg focus:outline-none"
          renderValue={(selected) => (
            <div className="flex flex-row-reverse items-center gap-2">
              <img
                src={
                  selected === "en"
                    ? "https://flagcdn.com/w40/us.png"
                    : "https://flagcdn.com/w40/ir.png"
                }
                alt={selected}
                className="w-5 h-5 rounded-full"
              />
              <span className="capitalize">{selected}</span>
            </div>
          )}
        >
          <MenuItem value="en" className="flex items-center gap-2">
            <img
              src="https://flagcdn.com/w40/us.png"
              alt="en"
              className="w-5 h-5 rounded-full"
            />
            English
          </MenuItem>
          <MenuItem value="fa" className="flex items-center gap-2">
            <img
              src="https://flagcdn.com/w40/ir.png"
              alt="fa"
              className="w-5 h-5 rounded-full"
            />
            فارسی
          </MenuItem>
        </Select>
      </FormControl>
    </div>
  );
}

export default LanguageSelector;
