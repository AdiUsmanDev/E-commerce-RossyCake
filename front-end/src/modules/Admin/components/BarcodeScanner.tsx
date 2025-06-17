// src/components/BarcodeScanner.tsx
import React, { useState, useEffect, useRef } from "react";

// Deklarasi global untuk Html5QrcodeScanner yang akan dimuat dari CDN
declare global {
  interface Window {
    Html5QrcodeScanner: any; // Menggunakan 'any' untuk menyederhanakan penanganan tipe
  }
}

interface BarcodeScannerProps {
  onScan: (barcode: string) => void;
}

const useBarcodeScanner = (
  onResult: (result: { text: string; result: any }) => void,
  onError: (errorMessage: string) => void,
  config: any
) => {
  const qrcodeRegionId = useRef(
    `html5qr-code-full-region-${Math.random().toString(36).substring(2, 9)}`
  ).current;
  const [isScannerReady, setIsScannerReady] = useState(false);
  const scannerRef = useRef<any | null>(null);

  useEffect(() => {
    const scriptId = "html5-qrcode-script-cdn";

    const loadHtml5QrcodeScript = (): Promise<void> => {
      return new Promise((resolve, reject) => {
        if (document.getElementById(scriptId)) {
          if (window.Html5QrcodeScanner) {
            resolve();
          } else {
            const checkInterval = setInterval(() => {
              if (window.Html5QrcodeScanner) {
                clearInterval(checkInterval);
                resolve();
              }
            }, 100);
            setTimeout(() => {
              clearInterval(checkInterval);
              reject(
                new Error(
                  "Html5QrcodeScanner tidak tersedia setelah skrip dimuat."
                )
              );
            }, 5000);
          }
        } else {
          const script = document.createElement("script");
          script.src =
            "https://unpkg.com/html5-qrcode@2.3.8/html5-qrcode.min.js";
          script.id = scriptId;
          script.async = true;
          script.onload = () => {
            const checkInterval = setInterval(() => {
              if (window.Html5QrcodeScanner) {
                clearInterval(checkInterval);
                resolve();
              }
            }, 50);
            setTimeout(() => {
              clearInterval(checkInterval);
              reject(
                new Error(
                  "Html5QrcodeScanner tidak tersedia setelah skrip dimuat (onload)."
                )
              );
            }, 5000);
          };
          script.onerror = () =>
            reject(new Error("Gagal memuat pustaka html5-qrcode."));
          document.body.appendChild(script);
        }
      });
    };

    const initScanner = async () => {
      if (!document.getElementById(qrcodeRegionId)) {
        console.warn(
          `Target elemen #${qrcodeRegionId} belum ada di DOM. Mencoba lagi...`
        );
        return;
      }

      if (scannerRef.current) {
        setIsScannerReady(true);
        return;
      }

      try {
        await loadHtml5QrcodeScript();

        const html5QrcodeScanner = new window.Html5QrcodeScanner(
          qrcodeRegionId,
          {
            fps: config.fps || 10,
            rememberLastUsedCamera: true,
          },
          /* verbose= */ false
        );
        scannerRef.current = html5QrcodeScanner;

        const renderPromise = html5QrcodeScanner.render(
          (decodedText: string, decodedResult: any) => {
            onResult({ text: decodedText, result: decodedResult });
            if (scannerRef.current) {
              scannerRef.current.clear().catch((error: any) => {
                console.error("Gagal membersihkan html5QrcodeScanner. ", error);
              });
              scannerRef.current = null;
            }
          },
          (errorMessage: string) => {
            if (
              errorMessage &&
              !errorMessage.includes("Not found") &&
              !errorMessage.includes(
                "No MultiFormat Readers were able to detect the code"
              )
            ) {
              // onError(errorMessage); // Mengkomentari ini karena terlalu banyak error "not found"
              // console.error("Kesalahan Pemindai:", errorMessage); // Mengkomentari ini juga
            }
          }
        );

        await renderPromise;
        setIsScannerReady(true);
      } catch (err: any) {
        console.error("Kesalahan selama inisialisasi pemindai:", err);
        onError(`Gagal menginisialisasi pemindai: ${err.message || err}`);
        setIsScannerReady(false);
      }
    };

    initScanner();

    return () => {
      if (scannerRef.current) {
        scannerRef.current.clear().catch((error: any) => {
          console.error(
            "Gagal membersihkan html5QrcodeScanner saat unmount. ",
            error
          );
        });
        scannerRef.current = null;
      }
    };
  }, [qrcodeRegionId, onResult, onError, config]);

  return { qrcodeRegionId, isScannerReady };
};

const BarcodeScanner: React.FC<BarcodeScannerProps> = ({ onScan }) => {
  const [scanResult, setScanResult] = useState<string | null>(null);
  const [error, setError] = useState<string | null>(null);

  const { qrcodeRegionId, isScannerReady } = useBarcodeScanner(
    (result) => {
      setScanResult(result.text);
      setError(null);

      onScan(result.text);
    },
    (errorMessage) => {
      // Hanya mengatur kesalahan jika bukan pesan "Tidak ditemukan" yang umum
      if (
        errorMessage &&
        !errorMessage.includes("Not found") &&
        !errorMessage.includes(
          "No MultiFormat Readers were able to detect the code"
        )
      ) {
        setError(errorMessage);
        console.error("Kesalahan Pemindai:", errorMessage);
      }
    },
    {
      fps: 10,
    }
  );

  return (
    // Kontainer luar untuk seluruh komponen pemindai, meniru badan modal
    <div className="flex flex-col items-center justify-center w-full max-w-lg mx-auto p-4 rounded-lg bg-white shadow-xl border border-gray-200">
      <p className="text-center text-gray-600 mb-4 text-sm md:text-base">
        Arahkan kamera ke barcode bahan baku.
      </p>

      {/* Pesan pemuatan */}
      {!isScannerReady && (
        <div className="flex items-center justify-center w-full bg-gray-200 rounded-md p-8 min-h-[200px] text-gray-600 text-center animate-pulse">
          Memuat pemindai kamera... Pastikan Anda memberikan izin kamera.
        </div>
      )}

      <div className="relative w-full overflow-hidden rounded-md bg-black text-white shadow-inner">
        {/* The pt-[56.25%] creates a 16:9 aspect ratio (height = 56.25% of width) */}
        <div
          id={qrcodeRegionId}
          className="absolute inset-0  items-center justify-center"
        >
          <style>{`
              #${qrcodeRegionId} video,
              #${qrcodeRegionId} canvas {
                width: 100% !important;
                height: 100% !important;
                object-fit: cover; 
                position: absolute; 
                top: 0;
                left: 0;
              }
              /* Menyembunyikan semua elemen UI internal yang disuntikkan oleh html5-qrcode */
              #${qrcodeRegionId} div[data-html5-qrcode-id],
              #${qrcodeRegionId} span[title="Stop Scanning"],
              #${qrcodeRegionId} .html5-qrcode-button,
              #${qrcodeRegionId} #html5-qrcode-anchor-scan-type-change,
              #${qrcodeRegionId} #html5-qrcode-error-message,
              #${qrcodeRegionId} #html5-qrcode-button-camera-start,
              #${qrcodeRegionId} #html5-qrcode-button-camera-stop {
                display: none !important;
              }
            `}</style>
        </div>
      </div>

      {/* Tampilkan hasil pemindaian jika tersedia */}
      {scanResult && (
        <div className="mt-6 w-full rounded-md border border-green-400 bg-green-100 p-3 text-center text-green-800">
          <p className="text-sm font-semibold">Barcode Terdeteksi:</p>
          <p className="break-words text-lg font-bold">{scanResult}</p>
        </div>
      )}

      {/* Tampilkan pesan kesalahan jika tersedia */}
      {error && (
        <div className="mt-6 w-full rounded-md border border-red-400 bg-red-100 p-3 text-center text-red-600">
          <p className="text-sm font-medium">Kesalahan:</p>
          <p className="break-words text-base">{error}</p>
        </div>
      )}
    </div>
  );
};

export default BarcodeScanner;
