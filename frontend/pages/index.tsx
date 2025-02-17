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
        "blockflow_routing_objects": [
          {
            "id": "33e7da97-a3ca-4730-a08a-340f90b83e06",
            "routes": [
              {
                "data_list": [
                  {
                    "x": 7,
                    "y": 41,
                    "z": 0
                  },
                  {
                    "x": 57,
                    "y": 41,
                    "z": 0
                  },
                  {
                    "x": 57,
                    "y": 41.923796723980544,
                    "z": 0
                  },
                  {
                    "x": 79.30205318095395,
                    "y": 41.923796723980544,
                    "z": 0
                  },
                  {
                    "x": 129.30205318095395,
                    "y": 41.923796723980544,
                    "z": 0
                  }
                ],
                "from_id": "4168257e-c9da-4c16-953d-41b9210c5b9c",
                "to_id": "150bf2fb-f0cf-4560-98b5-1079618847c8"
              }
            ]
          },
          {
            "id": "f8097b11-4441-4d73-a674-cb28bd221fde",
            "routes": [
              {
                "data_list": [
                  {
                    "x": 271.302053180954,
                    "y": -50.076203276019456,
                    "z": 0
                  },
                  {
                    "x": 321.302053180954,
                    "y": -50.076203276019456,
                    "z": 0
                  },
                  {
                    "x": 321.302053180954,
                    "y": 26.343116800032966,
                    "z": 0
                  },
                  {
                    "x": 366.90918887658006,
                    "y": 26.343116800032966,
                    "z": 0
                  },
                  {
                    "x": 416.90918887658006,
                    "y": 26.343116800032966,
                    "z": 0
                  }
                ],
                "from_id": "150bf2fb-f0cf-4560-98b5-1079618847c8",
                "to_id": "1f398a51-e130-4dbe-8d45-621e75d785f9"
              }
            ]
          }
        ],
        "blocktypes": {
          "acf_bac": [],
          "acf_chlorine_rm": [],
          "acf_h2o2_rm": [],
          "auto_dissolving_unit": [],
          "bioplanet_sr": [],
          "bioplanet_sy": [],
          "blower": [],
          "bm_sk": [],
          "booster_pump": [],
          "boron_chelate": [],
          "chemical_reactor": [],
          "chemical_tank": [],
          "coagulator": [],
          "coagulator_hr": [],
          "column": [],
          "comp_2b2t": [],
          "comp_2b3t": [],
          "comp_3b4t": [],
          "comp_4b5t": [],
          "comp_filter_press": [],
          "cv_skid2_way": [],
          "cv_skid3_way": [],
          "dbp_mc": [],
          "decarbonator": [],
          "degasifier_membrane_h2co3": [],
          "degasifier_membrane_n2": [],
          "degasifier_membrane_o2": [],
          "degasifier_membrane_o2_upw": [],
          "deionizer": [],
          "deionizer_upw": [],
          "diaphragm_pump": [],
          "dissolving_membrane_h2co3": [],
          "dissolving_membrane_n2": [],
          "dmf_gravity": [],
          "dmf_pressurized": [],
          "flomax_daf": [],
          "gas_scrubber": [],
          "h1_tower": [],
          "h2_tower": [],
          "hex": [],
          "kcdi": [],
          "low_pressure_uvoxidizer": [],
          "magnet_pump": [],
          "mbp": [],
          "mf_skid": [],
          "nanosaver": [],
          "nitrification_tank_bmsk": [],
          "oh1_tower": [],
          "oh2_tower": [],
          "pbuf_td": [],
          "ph_adjustment_tank": [],
          "prism": [],
          "pump": [],
          "reactor": [],
          "ro_skid": [],
          "sedimentation": [],
          "sedimentation_high": [],
          "simple_gas_scrubber": [],
          "sludge_tank": [],
          "std_dm_l": [],
          "std_jk_s": [],
          "std_ka_a": [],
          "std_kc_h_mf": [],
          "std_kc_h_s": [],
          "std_kc_h_uf": [],
          "std_pbuf_td": [],
          "std_pc_vr_ld": [],
          "std_pf_gs_v_full": [],
          "std_pf_gs_v_min": [],
          "std_pf_gs_v_pump": [],
          "std_pf_gs_v_tbia": [],
          "std_r_pa_wd": [],
          "std_sm_r_deca": [],
          "std_sm_r_deca_h": [],
          "std_sm_r_full": [],
          "std_sm_r_htower": [],
          "std_sm_r_min": [],
          "std_sm_rw_deca": [],
          "std_sm_rw_deca_h": [],
          "std_sm_rw_full": [],
          "std_sm_rw_htower": [],
          "std_sm_rw_min": [],
          "std_st_h": [],
          "std_up_r": [],
          "std_yk_s": [],
          "tank": [
            {
              "data": {
                "amount_operation": 1,
                "amount_spare": 0,
                "circle_diameter": 2800,
                "classification": "resin",
                "device_block_id": "150bf2fb-f0cf-4560-98b5-1079618847c8",
                "material": "frp",
                "phase": 1,
                "shape": "circle_flat",
                "size": {
                  "z": 4900
                },
                "volume": 30
              },
              "id": "150bf2fb-f0cf-4560-98b5-1079618847c8",
              "name": selectedTank,
              "object": "blocktype",
              "subtype": "tank"
            }
          ],
          "uf_membrane": [],
          "upw_pump": [],
          "upw_tank": [],
          "uv_sterilizer": [],
          "vacuum_pump": []
        },
        "connector": [],
        "device_block_groups": [],
        "device_block_ports": [
          {
            "device_block_id": "4168257e-c9da-4c16-953d-41b9210c5b9c",
            "id": "33e7da97-a3ca-4730-a08a-340f90b83e06-4168257e-c9da-4c16-953d-41b9210c5b9c",
            "name": "33e7da97-a3ca-4730-a08a-340f90b83e06-4168257e-c9da-4c16-953d-41b9210c5b9c",
            "position_x": 7,
            "position_y": 41,
            "type": "OUTPUT"
          },
          {
            "device_block_id": "150bf2fb-f0cf-4560-98b5-1079618847c8",
            "id": "33e7da97-a3ca-4730-a08a-340f90b83e06-150bf2fb-f0cf-4560-98b5-1079618847c8",
            "name": "33e7da97-a3ca-4730-a08a-340f90b83e06-150bf2fb-f0cf-4560-98b5-1079618847c8",
            "position_x": 129.30205318095395,
            "position_y": 41.923796723980544,
            "type": "INPUT"
          },
          {
            "device_block_id": "150bf2fb-f0cf-4560-98b5-1079618847c8",
            "id": "f8097b11-4441-4d73-a674-cb28bd221fde-150bf2fb-f0cf-4560-98b5-1079618847c8",
            "name": "f8097b11-4441-4d73-a674-cb28bd221fde-150bf2fb-f0cf-4560-98b5-1079618847c8",
            "position_x": 271.302053180954,
            "position_y": -50.076203276019456,
            "type": "OUTPUT"
          },
          {
            "device_block_id": "1f398a51-e130-4dbe-8d45-621e75d785f9",
            "id": "f8097b11-4441-4d73-a674-cb28bd221fde-1f398a51-e130-4dbe-8d45-621e75d785f9",
            "name": "f8097b11-4441-4d73-a674-cb28bd221fde-1f398a51-e130-4dbe-8d45-621e75d785f9",
            "position_x": 416.90918887658006,
            "position_y": 26.343116800032966,
            "type": "INPUT"
          }
        ],
        "device_blocks": [
          {
            "blockflow_canvas_id": "150bf2fb-f0cf-4560-98b5-1079618847c8",
            "blockflow_position_x": 129.30205318095395,
            "blockflow_position_y": -76.07620327601946,
            "blockflow_size_x": 100,
            "blockflow_size_y": 200,
            "device_block_group_id": "",
            "facility": "pretreatment",
            "id": "150bf2fb-f0cf-4560-98b5-1079618847c8",
            "name": selectedTank,
            "structure_id": "e798661a-8883-4532-9027-928d49184451",
            "type": "tank"
          }
        ],
        "instruments": [],
        "network_blocks": [
          {
            "from_direction": "RIGHT",
            "from_edge": "4168257e-c9da-4c16-953d-41b9210c5b9c",
            "id": "33e7da97-a3ca-4730-a08a-340f90b83e06",
            "name": "33e7da97-a3ca-4730-a08a-340f90b83e06",
            "to_direction": "LEFT",
            "to_edge": "150bf2fb-f0cf-4560-98b5-1079618847c8",
            "type": "water",
            "type_major": false,
            "type_pair": 0
          },
          {
            "from_direction": "RIGHT",
            "from_edge": "150bf2fb-f0cf-4560-98b5-1079618847c8",
            "id": "f8097b11-4441-4d73-a674-cb28bd221fde",
            "name": "f8097b11-4441-4d73-a674-cb28bd221fde",
            "to_direction": "LEFT",
            "to_edge": "1f398a51-e130-4dbe-8d45-621e75d785f9",
            "type": "water",
            "type_major": true,
            "type_pair": 0
          }
        ],
        "networktypes": {
          "air": [],
          "chemical": [],
          "gas": [],
          "n2": [],
          "utility": [],
          "water": [
            {
              "data": {
                "flowrate_day": "",
                "flowrate_hour": "",
                "flowrate_unit_day": 0,
                "flowrate_unit_hour": 1,
                "phase": 1,
                "pipe_diameter": "",
                "pipe_diameter_unit": 0,
                "show_flowrates": false,
                "show_water_temperature": false,
                "water_temperature": ""
              },
              "id": "33e7da97-a3ca-4730-a08a-340f90b83e06"
            },
            {
              "data": {
                "flowrate_day": "",
                "flowrate_hour": "",
                "flowrate_unit_day": 0,
                "flowrate_unit_hour": 1,
                "phase": 2,
                "pipe_diameter": "",
                "pipe_diameter_unit": 0,
                "show_flowrates": false,
                "show_water_temperature": false,
                "water_temperature": ""
              },
              "id": "33e7da97-a3ca-4730-a08a-340f90b83e06"
            },
            {
              "data": {
                "flowrate_day": "",
                "flowrate_hour": "",
                "flowrate_unit_day": 0,
                "flowrate_unit_hour": 1,
                "phase": 3,
                "pipe_diameter": "",
                "pipe_diameter_unit": 0,
                "show_flowrates": false,
                "show_water_temperature": false,
                "water_temperature": ""
              },
              "id": "33e7da97-a3ca-4730-a08a-340f90b83e06"
            },
            {
              "data": {
                "flowrate_day": "",
                "flowrate_hour": "",
                "flowrate_unit_day": 0,
                "flowrate_unit_hour": 1,
                "phase": 4,
                "pipe_diameter": "",
                "pipe_diameter_unit": 0,
                "show_flowrates": false,
                "show_water_temperature": false,
                "water_temperature": ""
              },
              "id": "33e7da97-a3ca-4730-a08a-340f90b83e06"
            },
            {
              "data": {
                "flowrate_day": "",
                "flowrate_hour": "",
                "flowrate_unit_day": 0,
                "flowrate_unit_hour": 1,
                "phase": 1,
                "pipe_diameter": "",
                "pipe_diameter_unit": 0,
                "show_flowrates": false,
                "show_water_temperature": false,
                "water_temperature": ""
              },
              "id": "f8097b11-4441-4d73-a674-cb28bd221fde"
            },
            {
              "data": {
                "flowrate_day": "",
                "flowrate_hour": "",
                "flowrate_unit_day": 0,
                "flowrate_unit_hour": 1,
                "phase": 2,
                "pipe_diameter": "",
                "pipe_diameter_unit": 0,
                "show_flowrates": false,
                "show_water_temperature": false,
                "water_temperature": ""
              },
              "id": "f8097b11-4441-4d73-a674-cb28bd221fde"
            },
            {
              "data": {
                "flowrate_day": "",
                "flowrate_hour": "",
                "flowrate_unit_day": 0,
                "flowrate_unit_hour": 1,
                "phase": 3,
                "pipe_diameter": "",
                "pipe_diameter_unit": 0,
                "show_flowrates": false,
                "show_water_temperature": false,
                "water_temperature": ""
              },
              "id": "f8097b11-4441-4d73-a674-cb28bd221fde"
            },
            {
              "data": {
                "flowrate_day": "",
                "flowrate_hour": "",
                "flowrate_unit_day": 0,
                "flowrate_unit_hour": 1,
                "phase": 4,
                "pipe_diameter": "",
                "pipe_diameter_unit": 0,
                "show_flowrates": false,
                "show_water_temperature": false,
                "water_temperature": ""
              },
              "id": "f8097b11-4441-4d73-a674-cb28bd221fde"
            }
          ]
        },
        "point": [
          {
            "blockflow_position_x": -10,
            "blockflow_position_y": 0,
            "id": "4168257e-c9da-4c16-953d-41b9210c5b9c",
            "name": "原水"
          },
          {
            "blockflow_position_x": 416.90918887658006,
            "blockflow_position_y": -14.656883199967034,
            "id": "1f398a51-e130-4dbe-8d45-621e75d785f9",
            "name": "処理水"
          }
        ],
        "serial_group_members": [],
        "serial_groups": [],
        "structures": [
          {
            "id": "e798661a-8883-4532-9027-928d49184451",
            "name": "通常配置",
            "phase": 1,
            "type": "ground"
          }
        ],
        "utility_points": [],
        "phase_settings": [
          {
            "id": "c2ce50d4-1290-40e6-bfb0-9008277be16d",
            "name": "フェーズ1",
            "phase": 1,
            "enable": true
          },
          {
            "id": "dee4e5a6-628b-4c0e-af35-ad051940d0c1",
            "name": "フェーズ2",
            "phase": 2,
            "enable": true
          },
          {
            "id": "025bd014-c404-4b06-a6a5-71082eabed2a",
            "name": "フェーズ3",
            "phase": 3,
            "enable": true
          },
          {
            "id": "e3ed07c2-2800-4af3-aee1-e4cc1806797d",
            "name": "フェーズ4",
            "phase": 4,
            "enable": false
          }
        ],
        "tmp_ports": []
      }
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
    <main style={{
      width: '500px',
      margin: '0 auto',
      padding: '20px',
      border: '1px solid #ccc',
      borderRadius: '5px'
    }}>
      <h1 style={{ textAlign: 'center', marginBottom: '20px' }}>
        テスト用JSON取得MVP
      </h1>
    
      <div>
        <label htmlFor="tank" style={{ display: 'block', marginBottom: '5px' }}>
          BFブロック:
        </label>
        <select
          id="tank"
          value={selectedTank}
          onChange={handleTankChange}
          style={{
            width: '100%',
            padding: '10px',
            marginBottom: '15px',
            border: '1px solid #ccc',
            borderRadius: '3px',
            boxSizing: 'border-box'
          }}
        >
          <option value="一般水槽（攪拌なし）">一般水槽（攪拌なし）</option>
        </select>
      </div>
    
      <div>
        <label htmlFor="quantity" style={{ display: 'block', marginBottom: '5px' }}>
          台数:
        </label>
        <select
          id="quantity"
          value={selectedQuantity}
          onChange={handleQuantityChange}
          style={{
            width: '100%',
            padding: '10px',
            marginBottom: '15px',
            border: '1px solid #ccc',
            borderRadius: '3px',
            boxSizing: 'border-box'
          }}
        >
          {Array.from({ length: 10 }, (_, i) => i + 1).map((num) => (
            <option key={num} value={num}>
              {num}
            </option>
          ))}
        </select>
      </div>
      <button
        onClick={handleDownload}
        style={{
          width: '100%',
          padding: '10px',
          marginBottom: '15px',
          border: 'none',
          borderRadius: '3px',
          backgroundColor: '#007bff',
          color: 'white',
          cursor: 'pointer',
          boxSizing: 'border-box'
        }}
      >
        blockflow.jsonを作成する
      </button>
    </main>
  );
};

export default Home;