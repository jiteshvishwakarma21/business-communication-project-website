// Customer-proposed configuration, not verified laptop hardware.
export const specifications = [
  {title:'Processor & graphics',items:[
    ['CPUs','Dual AMD EPYC 9654 (96 cores each, 192 cores total) or Intel Xeon Platinum 8490H.'],
    ['GPUs','4× to 8× NVIDIA H100 / H200 (80GB / 141GB SXM5) connected via NVLink, or 4× NVIDIA RTX 6000 Ada Generation.']
  ]},
  {title:'Memory & storage',items:[
    ['RAM','1.5 TB to 3 TB DDR5 ECC Registered Memory (12-channel / 24 DIMM slots).'],
    ['Storage','2TB NVMe M.2 (OS / Boot) + 30TB–60TB PCIe Gen 5 NVMe SSDs in RAID 0 / 10 for a high-bandwidth scratch array.']
  ]},
  {title:'Display specifications',items:[
    ['Foldable display concept','Dual-screen laptop that unfolds to 180° into one large, creaseless and seamless display. This is the intended design; the panel and hinge technology are unverified.'],
    ['Proposed external displays','Dual 32-inch 4K UHD (3840 × 2160) at 120Hz IPS / OLED with a proposed 100% DCI-P3 gamut target.'],
    ['Headless option','Standard 1080p setup screen or remote management via IPMI / BMC (iDRAC / iLO) without a dedicated display.']
  ]},
  {title:'Battery & charging',items:[
    ['Power supply (PSU)','Redundant 3000W–4000W Platinum / Titanium efficiency PSUs (220V–240V input).'],
    ['UPS','5kVA–10kVA online double-conversion UPS backup with external battery module.'],
    ['Laptop battery','Capacity, runtime, and charging specifications have not been provided. The PSU and UPS above describe external workstation infrastructure.']
  ]},
  {title:'Dimensions & ports',items:[
    ['Proposed workstation form factor','4U rackmount server or large E-ATX custom tower. Foldable laptop dimensions remain to be confirmed.'],
    ['Networking / ports','Dual 100GbE / 200GbE Mellanox ConnectX-7 InfiniBand / Ethernet NICs, PCIe 5.0 x16 expansion slots, Thunderbolt 4 / USB4.']
  ]},
  {title:'Input methods & accessories',items:[
    ['Cooling','Closed-loop liquid cooling system or direct-to-chip liquid loop.'],
    ['Peripherals','External mechanical keyboard, precision mouse, and server rack mounting rails. The laptop concept has no built-in keyboard.']
  ]}
];
