import type { NextPage } from 'next';
import React, { useEffect, useState } from 'react';
import Papa from 'papaparse';
import { v4 as uuidv4 } from 'uuid';
import {
  Heading,
  Button,
  Box,
  Select,
  FormControl,
  FormLabel,
} from "@chakra-ui/react";

interface TankData {
  name: string;
  circle_diameter: number;
  material: string;
  phase: number;
  shape: string;
  volume: number;
  id: string;
  device_block_id: string;
}

const Home: NextPage = () => {
  const [tankData, setTankData] = useState<TankData[]>([]);
  const [selectedTank, setSelectedTank] = useState<TankData | null>(null);
  const [selectedQuantity, setSelectedQuantity] = useState<number>(1);
  const [isLoading, setIsLoading] = useState<boolean>(true);

  // Consolidated CSV loading logic into a single useEffect
  useEffect(() => {
    const loadCSVData = async () => {
      try {
        const results = await new Promise<Papa.ParseResult<TankData>>((resolve, reject) => {
          Papa.parse('/bfblock.csv', {
            download: true,
            header: true,
            dynamicTyping: true,
            complete: resolve,
            error: reject,
          });
        });

        if (results.data.length > 0) {
          setTankData(results.data);
          setSelectedTank(results.data[0]); // Default to first tank
        } else {
          console.error("csvデータを取得できませんでした");
        }
      } catch (error) {
        console.error("Error parsing CSV:", error);
      } finally {
        setIsLoading(false);
      }
    };

    loadCSVData();
  }, []);

  const handleTankChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    const tank = tankData.find((tank) => tank.name === event.target.value) || null;
    setSelectedTank(tank);
  };

  const handleQuantityChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    setSelectedQuantity(parseInt(event.target.value, 10));
  };

  const handleDownload = () => {
    if (!selectedTank) return;

    const tanks = Array.from({ length: selectedQuantity }, (_, i) => ({
      data: {
        amount_operation: 1,
        amount_spare: 0,
        classification: "resin",
        device_block_id: uuidv4(),
        material: selectedTank.material,
        phase: 1,
        shape: selectedTank.shape,
        circle_diameter: selectedTank.circle_diameter,
        size: { z: selectedTank.circle_diameter },
        volume: selectedTank.volume,
      },
      id: uuidv4(),
      name: `${selectedTank.name} ${i + 1}`,
      object: "blocktype",
      subtype: "tank",
    }));

  　//TODO blockstypes以外を整形して出力できるようにする。
    const data = {
      blockflow_routing_objects: [],
      blocktypes: {
        tank: tanks,
      },
    };
  };

  return (
    <Box p={5}>
      <Heading mb={5}>Tank Selection</Heading>

      {isLoading ? (
        <Box>Loading...</Box>
      ) : (
        <div>
          <FormControl mb={4}>
            <FormLabel>Select Tank</FormLabel>
            <Select onChange={handleTankChange} value={selectedTank?.name || ''}>
              {tankData.map((tank) => (
                <option key={tank.id} value={tank.name}>
                  {tank.name}
                </option>
              ))}
            </Select>
          </FormControl>

          <FormControl mb={4}>
            
            <FormLabel>Select Quantity</FormLabel>
            <Select onChange={handleQuantityChange} value={selectedQuantity.toString()}>
              {[1, 2, 3, 4, 5].map((qty) => (
                <option key={qty} value={qty}>
                  {qty}
                </option>
              ))}
            </Select>
          </FormControl>

          <Button onClick={handleDownload} colorScheme="blue">Download</Button>
        </div>
      )}
    </Box>
  );
};

export default Home
