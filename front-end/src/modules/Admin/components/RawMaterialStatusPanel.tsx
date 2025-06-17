"use client";

import React, { useMemo } from "react";
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
const RawMaterialStatusPanel = () => {
  const { data: materials = [], isLoading } = useQuery({
    queryKey: ["rawMaterials"],
    queryFn: getAllRawMaterials,
  });

  // Kalkulasi data berdasarkan perbandingan `stock` dengan `reorder_level`
  const totalTypes = materials.length;
  // Item dianggap stok rendah jika stok saat ini <= level pemesanan kembali
  const lowStockItems = materials.filter((m) => m.stock <= m.reorder_level);
  const criticalStockItems = materials.filter(
    (m) => m.stock <= m.reorder_level / 2
  );
  const lowStockCount = lowStockItems.length;

  // Logika untuk menentukan status panel secara dinamis
  const { statusText, StatusIcon, statusColorClass, panelBorderClass } =
    useMemo(() => {
      if (isLoading) {
        return {
          statusText: "Memuat Data...",
          StatusIcon: IconLoader,
          statusColorClass: "text-sky-400 animate-spin",
          panelBorderClass: "border-sky-500/50",
        };
      }
      if (totalTypes === 0) {
        return {
          statusText: "Data Kosong",
          StatusIcon: IconArchive,
          statusColorClass: "text-slate-400",
          panelBorderClass: "border-slate-600/50",
        };
      }
      if (criticalStockItems.length > 0) {
        return {
          statusText: "Stok Kritis",
          StatusIcon: IconAlertOctagon,
          statusColorClass: "text-red-400",
          panelBorderClass: "border-red-500/50",
        };
      }
      if (lowStockCount > 0) {
        return {
          statusText: "Perlu Perhatian",
          StatusIcon: IconAlertTriangle,
          statusColorClass: "text-yellow-400",
          panelBorderClass: "border-yellow-500/50",
        };
      }
      return {
        statusText: "Stok Aman",
        StatusIcon: IconCircleCheck,
        statusColorClass: "text-green-400",
        panelBorderClass: "border-green-500/50",
      };
    }, [isLoading, totalTypes, lowStockCount, criticalStockItems.length]);

  return (
    <div
      className={cn(
        "p-4 rounded-xl shadow-lg w-full max-w-md mx-auto font-sans",
        "bg-gradient-to-br from-slate-800 to-slate-900 backdrop-blur-lg border",
        panelBorderClass,
        "transition-all duration-500"
      )}
    >
      {/* Header Panel */}
      <div className="flex items-center justify-between mb-3 pb-3 border-b border-white/10">
        <div className="flex items-center gap-3 text-slate-100">
          <IconBuildingWarehouse size={22} />
          <h3 className="font-bold text-lg">Status Bahan Baku</h3>
        </div>
        <div
          className={cn(
            "flex items-center gap-2 font-semibold text-sm px-3 py-1 rounded-full bg-white/5",
            statusColorClass
          )}
        >
          <StatusIcon size={16} strokeWidth={2.5} />
          <span>{statusText}</span>
        </div>
      </div>

      {/* Statistik Utama */}
      <div className="grid grid-cols-2 gap-3 mb-3">
        <StatItem
          icon={IconArchive}
          value={isLoading ? "-" : totalTypes}
          label="Total Jenis"
          itemColorClass="text-slate-300"
        />
        <StatItem
          icon={IconAlertTriangle}
          value={isLoading ? "-" : lowStockCount}
          label="Stok Rendah"
          itemColorClass={
            isLoading
              ? "text-slate-300"
              : criticalStockItems.length > 0
                ? "text-red-400"
                : lowStockCount > 0
                  ? "text-yellow-400"
                  : "text-green-400"
          }
        />
      </div>

      {/* Daftar Item Stok Rendah */}
      {lowStockCount > 0 && !isLoading && (
        <div className="mt-3 pt-3 border-t border-white/10 text-xs">
          <p className={cn("font-semibold mb-2", statusColorClass)}>
            Peringatan: {lowStockCount} bahan baku memerlukan perhatian.
          </p>
          <ul className="space-y-1.5 text-slate-300 max-h-24 overflow-y-auto pr-2">
            {lowStockItems.map((item) => (
              <li
                key={item.id}
                className="flex justify-between items-center text-sm"
              >
                <span>{item.name}</span>
                <span
                  className={cn(
                    "font-bold px-2 py-0.5 rounded",
                    item.stock <= item.reorder_level / 2
                      ? "bg-red-500/20 text-red-300"
                      : "bg-yellow-500/20 text-yellow-300"
                  )}
                >
                  Sisa: {item.stock} {item.unit}
                </span>
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
};

export default RawMaterialStatusPanel;
