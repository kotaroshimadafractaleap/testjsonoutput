import type { NextPage } from 'next';
import React from 'react';
import { useState } from 'react';

const Home: NextPage = () => {
  const [selectedTank, setSelectedTank] = useState('一般水槽（攪拌なし）');
  const [selectedQuantity, setSelectedQuantity] = useState(1);

  const handleTankChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    setSelectedTank(event.target.value);
  };

  const handleQuantityChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    setSelectedQuantity(parseInt(event.target.value, 10));
  };

  const handleDownload = () => {
    const data = {
      tank: selectedTank,
      quantity: selectedQuantity,
    };

    const jsonString = JSON.stringify(data, null, 2);
    const blob = new Blob([jsonString], { type: 'application/json' });
    const url = URL.createObjectURL(blob);

    const link = document.createElement('a');
    link.href = url;
    link.download = 'blockflow.json';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <main>
      <h1>テスト用JSON取得MVP</h1>

      <div>
        <label htmlFor="tank">BFブロック:</label>
        <select id="tank" value={selectedTank} onChange={handleTankChange}>
          <option value="一般水槽（攪拌なし）">一般水槽（攪拌なし）</option>
          {/* Add other tank options here */}
        </select>
      </div>

      <div>
        <label htmlFor="quantity">台数:</label>
        <select id="quantity" value={selectedQuantity} onChange={handleQuantityChange}>
          {Array.from({ length: 10 }, (_, i) => i + 1).map((num) => (
            <option key={num} value={num}>
              {num}
            </option>
          ))}
        </select>
      </div>

      <button onClick={handleDownload}>blockflow.jsonを作成する</button>
    </main>
  );
};

export default Home;