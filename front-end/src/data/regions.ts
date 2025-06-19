// src/data/regions.ts

export interface City {
  id: string;
  name: string;
}

export interface Province {
  id: string;
  name: string;
  cities: City[];
}

export const INDONESIAN_REGIONS: Province[] = [
  {
    id: "jambi",
    name: "Jambi",
    cities: [
      { id: "kota-jambi", name: "Kota Jambi" },
      { id: "muaro-jambi", name: "Kab. Muaro Jambi" },
      { id: "tanjab-barat", name: "Kab. Tanjung Jabung Barat" },
      { id: "tanjab-timur", name: "Kab. Tanjung Jabung Timur" },
    ],
  },
  {
    id: "sumsel",
    name: "Sumatera Selatan",
    cities: [
      { id: "palembang", name: "Kota Palembang" },
      { id: "banyuasin", name: "Kab. Banyuasin" },
    ],
  },
  {
    id: "dki",
    name: "DKI Jakarta",
    cities: [
      { id: "jaksel", name: "Jakarta Selatan" },
      { id: "jakpus", name: "Jakarta Pusat" },
      { id: "jaktim", name: "Jakarta Timur" },
    ],
  },
  // ...tambahkan provinsi lainnya jika perlu
];
