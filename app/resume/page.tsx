"use client";

import { pdf } from "@react-pdf/renderer";
import {
  ArrowLeft,
  ChevronLeft,
  ChevronRight,
  Download,
  Moon,
  Sun,
} from "lucide-react";
import dynamic from "next/dynamic";
import { useTheme } from "next-themes";
import { useEffect, useState } from "react";
import Resume from "@/components/Resume";
import { Button } from "@/components/ui/button";
import resumeData from "@/data/maximilien.json";
import type { resumeType } from "@/types/resumeType";

// Import des styles CSS nécessaires pour react-pdf
import "react-pdf/dist/Page/AnnotationLayer.css";
import "react-pdf/dist/Page/TextLayer.css";

// Dynamic import pour éviter les erreurs SSR
const PDFDocument = dynamic(
  () => import("react-pdf").then((mod) => ({ default: mod.Document })),
  { ssr: false },
);

const PDFPage = dynamic(
  () => import("react-pdf").then((mod) => ({ default: mod.Page })),
  { ssr: false },
);

export default function ResumePage() {
  const data = resumeData as resumeType;
  const [isClient, setIsClient] = useState(false);
  const [pdfUrl, setPdfUrl] = useState<string>("");
  const [numPages, setNumPages] = useState<number>(0);
  const [pageNumber, setPageNumber] = useState<number>(1);
  const [_loading, setLoading] = useState(true);
  const [pdfJsLoaded, setPdfJsLoaded] = useState(false);
  const { theme, setTheme } = useTheme();

  useEffect(() => {
    setIsClient(true);

    // Configuration du worker PDF.js avec la version correspondante
    const setupPdfJs = async () => {
      try {
        const { pdfjs } = await import("react-pdf");

        // Utiliser la même version que l'API (5.3.93) pour éviter le conflit
        pdfjs.GlobalWorkerOptions.workerSrc = `https://unpkg.com/pdfjs-dist@${pdfjs.version}/build/pdf.worker.min.mjs`;

        setPdfJsLoaded(true);
      } catch (error) {
        console.error("Error setting up PDF.js:", error);
        // Fallback avec une version compatible
        try {
          const { pdfjs } = await import("react-pdf");
          pdfjs.GlobalWorkerOptions.workerSrc = `https://cdn.jsdelivr.net/npm/pdfjs-dist@${pdfjs.version}/build/pdf.worker.min.mjs`;
          setPdfJsLoaded(true);
        } catch (fallbackError) {
          console.error("Fallback PDF.js setup failed:", fallbackError);
          setLoading(false);
        }
      }
    };

    setupPdfJs();
  }, []);

  useEffect(() => {
    if (!pdfJsLoaded) return;

    // Générer le PDF et créer un blob URL
    const generatePDF = async () => {
      try {
        setLoading(true);
        const blob = await pdf(<Resume data={data} />).toBlob();
        const url = URL.createObjectURL(blob);
        setPdfUrl(url);
      } catch (error) {
        console.error("Error generating PDF:", error);
        setLoading(false);
      }
    };

    generatePDF();

    // Cleanup function pour libérer l'URL
    return () => {
      if (pdfUrl) {
        URL.revokeObjectURL(pdfUrl);
      }
    };
  }, [data, pdfJsLoaded]); // Retiré pdfUrl des dépendances pour éviter la boucle infinie

  const onDocumentLoadSuccess = ({ numPages }: { numPages: number }) => {
    setNumPages(numPages);
    setLoading(false);
  };

  const handleDownloadPDF = async () => {
    try {
      const blob = await pdf(<Resume data={data} />).toBlob();
      const url = URL.createObjectURL(blob);
      const link = document.createElement("a");
      link.href = url;
      link.download = `${data.profile.name.replace(/\s+/g, "_")}_Resume.pdf`;
      link.click();
      URL.revokeObjectURL(url);
    } catch (error) {
      console.error("Error downloading PDF:", error);
    }
  };

  const goToPrevPage = () => {
    setPageNumber((prev) => Math.max(prev - 1, 1));
  };

  const goToNextPage = () => {
    setPageNumber((prev) => Math.min(prev + 1, numPages));
  };

  return (
    <div className="min-h-screen bg-background">
      {/* Header avec navigation */}
      <div className="bg-background border-b shadow-sm">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <Button variant="outline" asChild>
              <a href="/">
                <ArrowLeft className="w-4 h-4 mr-2" suppressHydrationWarning />
                Back to Portfolio
              </a>
            </Button>
            <h1 className="text-xl font-semibold">
              Resume - {data.profile.name}
            </h1>
            <div className="flex items-center space-x-2">
              {isClient && (
                <Button
                  variant="ghost"
                  size="sm"
                  onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
                >
                  {theme === "dark" ? (
                    <Sun className="h-4 w-4" suppressHydrationWarning />
                  ) : (
                    <Moon className="h-4 w-4" suppressHydrationWarning />
                  )}
                </Button>
              )}
              <Button variant="outline" onClick={handleDownloadPDF}>
                <Download className="w-4 h-4 mr-2" suppressHydrationWarning />
                Download PDF
              </Button>
            </div>
          </div>
        </div>
      </div>

      {/* PDF Display */}
      <div className="flex justify-center items-start p-8">
        <div className="w-full max-w-4xl">
          {/* Controls */}
          {isClient && pdfUrl && numPages > 1 && (
            <div className="flex items-center justify-between p-4 mb-6 bg-card border rounded-lg shadow-sm">
              <Button
                variant="outline"
                size="sm"
                onClick={goToPrevPage}
                disabled={pageNumber <= 1}
              >
                <ChevronLeft className="w-4 h-4 mr-1" />
                Previous
              </Button>

              <span className="text-sm text-muted-foreground">
                Page {pageNumber} of {numPages}
              </span>

              <Button
                variant="outline"
                size="sm"
                onClick={goToNextPage}
                disabled={pageNumber >= numPages}
              >
                Next
                <ChevronRight className="w-4 h-4 ml-1" />
              </Button>
            </div>
          )}

          {/* PDF Viewer - Design épuré */}
          <div className="flex justify-center">
            {isClient && pdfJsLoaded && pdfUrl ? (
              <div className="bg-white rounded-lg shadow-xl border border-gray-200 overflow-hidden">
                <PDFDocument
                  file={pdfUrl}
                  onLoadSuccess={onDocumentLoadSuccess}
                  loading={
                    <div className="flex justify-center items-center h-[800px] bg-white">
                      <div className="text-lg text-gray-600">
                        Loading PDF...
                      </div>
                    </div>
                  }
                  error={
                    <div className="flex justify-center items-center h-[400px] bg-white">
                      <div className="text-lg text-red-500">
                        Failed to load PDF
                      </div>
                    </div>
                  }
                >
                  <PDFPage
                    pageNumber={pageNumber}
                    width={
                      typeof window !== "undefined"
                        ? Math.min(794, window.innerWidth - 150)
                        : 794
                    }
                    renderTextLayer={false}
                    renderAnnotationLayer={false}
                  />
                </PDFDocument>
              </div>
            ) : (
              <div className="flex justify-center items-center h-[800px] bg-white rounded-lg shadow-xl border border-gray-200">
                <div className="text-lg text-gray-600">
                  {!pdfJsLoaded
                    ? "Setting up PDF viewer..."
                    : "Generating PDF..."}
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
