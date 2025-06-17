// src/app/order-success/ReceiptActions.tsx

import React from "react";
// PERBAIKAN: Hapus impor 'ReactToPrint' yang menyebabkan eror
import { Button } from "@/components/ui/button";
import { Printer, Download } from "lucide-react";
import html2canvas from "html2canvas";
import jsPDF from "jspdf";
import { Order as OrderType } from "@/types/order.types";

interface ReceiptActionsProps {
  receiptRef: React.RefObject<HTMLDivElement>;
  order: OrderType;
  handlePrint: () => void; // PERBAIKAN: Terima fungsi handlePrint sebagai prop
}

const ReceiptActions: React.FC<ReceiptActionsProps> = ({
  receiptRef,
  order,
  handlePrint,
}) => {
  const handleDownloadPdf = () => {
    const input = receiptRef.current;
    if (!input) {
      console.error("Referensi ke komponen struk tidak ditemukan.");
      return;
    }

    // Menggunakan html2canvas dengan backgroundColor untuk mengatasi eror 'oklch'
    html2canvas(input, {
      scale: 2,
      useCORS: true,
      backgroundColor: "#ffffff", // Penting untuk mencegah eror parsing warna
    }).then((canvas) => {
      const imgData = canvas.toDataURL("image/png");
      const pdf = new jsPDF({
        orientation: "portrait",
        unit: "mm",
        format: "a4",
      });

      const pdfWidth = pdf.internal.pageSize.getWidth();
      const pdfHeight = (canvas.height * pdfWidth) / canvas.width;

      pdf.addImage(imgData, "PNG", 0, 0, pdfWidth, pdfHeight);
      pdf.save(`struk-pesanan-${order.id}.pdf`);
    });
  };

  return (
    <div className="w-full max-w-4xl flex justify-center items-center gap-4 mt-8 p-4 bg-gray-50 rounded-lg border">
      {/* PERBAIKAN: Tombol ini sekarang hanya memanggil fungsi handlePrint dari props */}
      <Button onClick={handlePrint} variant="outline">
        <Printer className="mr-2 h-4 w-4" />
        Cetak Struk
      </Button>

      <Button onClick={handleDownloadPdf}>
        <Download className="mr-2 h-4 w-4" />
        Unduh sebagai PDF
      </Button>
    </div>
  );
};

export default ReceiptActions;
