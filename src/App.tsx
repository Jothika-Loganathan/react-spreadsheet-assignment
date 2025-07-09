import React, { useState } from "react";
import Table from "./components/Table";

const App = () => {
  const [activeTab, setActiveTab] = useState("Sheet1");

  return (
    <div className="p-6 font-sans">
      <div className="flex space-x-4 mb-4">
        {["Sheet1", "Sheet2", "Sheet3"].map((tab) => (
          <button
            key={tab}
            onClick={() => {
              console.log(`Switched to ${tab}`);
              setActiveTab(tab);
            }}
            className={`px-4 py-2 rounded ${
              activeTab === tab ? "bg-blue-600 text-white" : "bg-gray-200"
            }`}
          >
            {tab}
          </button>
        ))}
      </div>
      <Table />
    </div>
  );
};

export default App;
