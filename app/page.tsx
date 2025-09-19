"use client";


import { resumeType } from "@/types/resumeType";
import resumeData from "@/data/maximilien.json";
import Resume from "@/components/Resume";
import dynamic from "next/dynamic";

const PDFViewerComponent = dynamic(
  () =>
    import("@react-pdf/renderer").then((mod) => ({ default: mod.PDFViewer })),
  {
    loading: () => <div>Chargement du PDF...</div>,
  },
);

export default function Home() {
  const data = resumeData as resumeType;

  return (
    <div className="flex justify-center items-center h-screen bg-gray-100">
      <PDFViewerComponent width="80%" height="60%">
        <Resume data={data} />
      </PDFViewerComponent>
    </div>
  );
}
