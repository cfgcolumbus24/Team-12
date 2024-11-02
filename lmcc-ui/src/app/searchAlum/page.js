
"use client";

import { Checkbox } from "@/components/ui/checkbox";

export default function FormDemo() {
  // Sample checklist items
  const checklistItems = [
    "art",
    "music",
    "guitar",
    "dance",
    "culture",
  ];

  return (
    // Bordered div with a narrower, vertically-oriented shape
    <div className="space-y-2 border border-gray-300 rounded-md p-4 max-w-xs mx-auto">
      <p className="text-sm font-medium">Sort Alumuni</p>
      {checklistItems.map((item, index) => (
        <div key={index} className="flex items-center space-x-2">
          <Checkbox id={`item-${index}`} />
          <label
            htmlFor={`item-${index}`}
            className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
          >
            {item}
          </label>
        </div>
      ))}
    </div>
  );
}
