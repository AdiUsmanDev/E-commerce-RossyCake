"use client";

import React from "react";
import { useQuery } from "@tanstack/react-query";
import {
  IconArchive,
  IconAlertTriangle,
  IconBuildingWarehouse,
  IconCircleCheck,
  IconAlertOctagon,
  IconLoader,
} from "@tabler/icons-react";
import { cn } from "@/lib/utils";
import { RawMaterial } from "@/types/RawMaterials";
import { getAllRawMaterials } from "@/services/RawMaterials.service";
// Impor service

// Komponen untuk satu item statistik
const StatItem: React.FC<{
  icon: React.ElementType;
  value: string | number;
  label?: string;
  itemColorClass?: string;
}> = ({ icon: Icon, value, label, itemColorClass }) => (
  <div
    className={cn(
      "flex items-center gap-1.5",
      itemColorClass || "text-neutral-200"
    )}
  >
    <Icon size={16} strokeWidth={1.5} />
    <span className="text-sm font-medium">{value}</span>
    {label && <span className="text-xs text-neutral-400">{label}</span>}
  </div>
);

// Komponen utama
const RawMaterialStatusPanel: React.FC = () => {
  const LOW_STOCK_THRESHOLD = 10;

  // Mengambil data menggunakan TanStack Query
  const { data: materials = [], isLoading } = useQuery<RawMaterial[]>({
    queryKey: ["rawMaterials"],
    queryFn: getAllRawMaterials,
  });

  // Kalkulasi data
  const totalTypes = materials.length;
  const lowStockItems = materials.filter((m) => m.stock < LOW_STOCK_THRESHOLD);
  const lowStockCount = lowStockItems.length;

  // Logika status panel
  let statusText = "Stok Aman";
  let StatusIcon = IconCircleCheck;
  let statusColorClass = "text-green-400";
  let panelBorderClass = "border-green-500/50";

  if (isLoading) {
    statusText = "Memuat...";
    StatusIcon = IconLoader;
    statusColorClass = "text-sky-400 animate-spin";
    panelBorderClass = "border-sky-500/50";
  } else if (lowStockCount > 0) {
    if (lowStockCount <= 2 && totalTypes > 0) {
      statusText = "Perlu Perhatian";
      StatusIcon = IconAlertTriangle;
      statusColorClass = "text-yellow-400";
      panelBorderClass = "border-yellow-500/50";
    } else {
      statusText = "Stok Kritis";
      StatusIcon = IconAlertOctagon;
      statusColorClass = "text-red-400";
      panelBorderClass = "border-red-500/50";
    }
  } else if (totalTypes === 0) {
    statusText = "Data Kosong";
    StatusIcon = IconArchive;
    statusColorClass = "text-neutral-400";
    panelBorderClass = "border-neutral-500/50";
  }

  return (
    <div
      className={cn(
        "p-3 rounded-lg shadow-md w-full max-w-lg mx-auto", // Dibuat sedikit lebih kecil
        "bg-neutral-800/80 dark:bg-neutral-900/90 backdrop-blur-sm border",
        panelBorderClass
      )}
    >
      <div className="flex items-center justify-between mb-2 pb-2 border-b border-neutral-700/50">
        <div className="flex items-center gap-2 text-neutral-100">
          <IconBuildingWarehouse size={20} />
          <h3 className="font-semibold text-md">Status Bahan Baku</h3>
        </div>
        <div
          className={cn(
            "flex items-center gap-1.5 font-medium text-sm",
            statusColorClass
          )}
        >
          <StatusIcon size={18} strokeWidth={2} />
          <span>{statusText}</span>
        </div>
      </div>

      {/* PERBAIKAN: Layout grid disederhanakan menjadi 2 kolom */}
      <div className="grid grid-cols-2 gap-x-3 gap-y-2">
        <StatItem icon={IconArchive} value={totalTypes} label="Total Jenis" />
        <StatItem
          icon={IconAlertTriangle}
          value={lowStockCount}
          label="Stok Rendah"
          itemColorClass={
            lowStockCount > 0
              ? lowStockCount <= 2
                ? "text-yellow-400"
                : "text-red-400"
              : "text-green-400"
          }
        />
      </div>

      {lowStockCount > 0 && !isLoading && (
        <div
          className={cn(
            "mt-2 pt-2 border-t border-neutral-700/50 text-xs",
            statusColorClass === "text-red-400"
              ? "text-red-400"
              : "text-yellow-400"
          )}
        >
          <p className="font-semibold">
            Peringatan: Terdapat {lowStockCount} bahan baku dengan stok di bawah{" "}
            {LOW_STOCK_THRESHOLD} unit.
          </p>
          <ul className="list-disc list-inside pl-1 max-h-20 overflow-y-auto">
            {lowStockItems.slice(0, 3).map((item) => (
              <li key={item.id}>
                {item.name} (Stok: {item.stock} {item.unit})
              </li>
            ))}
            {lowStockItems.length > 3 && <li>dan lainnya...</li>}
          </ul>
        </div>
      )}
    </div>
  );
};

export default RawMaterialStatusPanel;
