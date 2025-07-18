import React from 'react';

interface DropdownProps {
  label: string;
  options: string[];
  value: string;
  onChange: (val: string) => void;
}

const Dropdown: React.FC<DropdownProps> = ({ label, options, value, onChange }) => {
  return (
    <div className="flex flex-col mb-4">
      <label className="mb-2 text-sm text-neon">{label}</label>
      <select
        className="bg-gray-800 p-2 rounded text-white focus:outline-none focus:ring-2 focus:ring-neon"
        value={value}
        onChange={(e) => onChange(e.target.value)}
      >
        <option value="">Select a team</option>
        {options.map((opt) => (
          <option key={opt} value={opt}>
            {opt}
          </option>
        ))}
      </select>
    </div>
  );
};

export default Dropdown;
