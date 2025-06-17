// src/lib/useBarcodeScanner.ts
import { Html5QrcodeScanner, Html5QrcodeResult } from "html5-qrcode";
import { useEffect, useRef, useState } from "react";

interface UseBarcodeScannerOptions {
  qrbox?: number | { width: number; height: number };
  fps?: number;
}

interface ScanResult {
  text: string;
  result: Html5QrcodeResult;
}

const qrcodeRegionId = "html5qr-code-full-region";

export const useBarcodeScanner = (
  onScanSuccess: (result: ScanResult) => void,
  onScanError?: (errorMessage: string) => void,
  options?: UseBarcodeScannerOptions
) => {
  const scannerRef = useRef<Html5QrcodeScanner | null>(null);
  const [isScannerReady, setIsScannerReady] = useState(false);

  useEffect(() => {
    if (!scannerRef.current) {
      scannerRef.current = new Html5QrcodeScanner(
        qrcodeRegionId,
        {
          fps: options?.fps || 10,

          qrbox: options?.qrbox || { width: 250, height: 250 },
        },
        false
      );
    }

    const startScanner = async () => {
      if (scannerRef.current && !isScannerReady) {
        try {
          await scannerRef.current.render(
            (decodedText, decodedResult) => {
              onScanSuccess({ text: decodedText, result: decodedResult });
            },
            (errorMessage) => {
              if (errorMessage && errorMessage.includes("NotFoundException")) {
                return;
              }

              if (onScanError) {
                onScanError(errorMessage);
              }
              console.error(`Scanner Error (Fatal): ${errorMessage}`);
            }
          );
          setIsScannerReady(true);
          console.log("Barcode scanner rendered successfully.");
        } catch (err) {
          let errorMessage = "Gagal memulai scanner kamera atau izin ditolak.";
          if (err instanceof DOMException && err.name === "NotAllowedError") {
            errorMessage =
              "Akses kamera ditolak. Mohon izinkan akses kamera di pengaturan browser Anda.";
          } else if (err instanceof Error) {
            errorMessage = `Gagal inisialisasi kamera: ${err.message}`;
          }
          console.error("Failed to render barcode scanner:", err);
          if (onScanError) {
            onScanError(errorMessage);
          }
        }
      }
    };

    startScanner();

    return () => {
      if (scannerRef.current && isScannerReady) {
        try {
          scannerRef.current.clear();
          console.log("Barcode scanner cleared.");
        } catch (err) {
          console.error("Failed to clear barcode scanner:", err);
        }
      }
    };
  }, [onScanSuccess, onScanError, options, isScannerReady]);

  return { qrcodeRegionId, isScannerReady };
};
