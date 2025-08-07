import { cn } from "@/lib/utils";
import { Upload, FileText, CheckCircle } from "lucide-react";
import { useState } from "react";

interface UploadZoneProps {
  onFileSelect?: (file: File) => void;
  isUploading?: boolean;
  className?: string;
}

export const UploadZone = ({ onFileSelect, isUploading, className }: UploadZoneProps) => {
  const [isDragOver, setIsDragOver] = useState(false);

  const handleDragOver = (e: React.DragEvent) => {
    e.preventDefault();
    setIsDragOver(true);
  };

  const handleDragLeave = (e: React.DragEvent) => {
    e.preventDefault();
    setIsDragOver(false);
  };

  const handleDrop = (e: React.DragEvent) => {
    e.preventDefault();
    setIsDragOver(false);
    
    const files = Array.from(e.dataTransfer.files);
    const file = files[0];
    
    if (file && (file.type === 'application/pdf' || file.type === 'application/vnd.openxmlformats-officedocument.wordprocessingml.document')) {
      onFileSelect?.(file);
    }
  };

  const handleFileInput = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      onFileSelect?.(file);
    }
  };

  return (
    <div
      className={cn(
        "relative border-2 border-dashed rounded-xl p-12 text-center transition-all duration-300",
        isDragOver 
          ? "border-ring bg-accent/20 shadow-accent" 
          : "border-border hover:border-ring/50 hover:bg-accent/5",
        isUploading && "pointer-events-none opacity-75",
        className
      )}
      onDragOver={handleDragOver}
      onDragLeave={handleDragLeave}
      onDrop={handleDrop}
    >
      <input
        type="file"
        accept=".pdf,.docx"
        onChange={handleFileInput}
        className="absolute inset-0 w-full h-full opacity-0 cursor-pointer"
        disabled={isUploading}
      />
      
      <div className="flex flex-col items-center space-y-4">
        {isUploading ? (
          <div className="animate-spin">
            <Upload className="h-16 w-16 text-accent-foreground/50" />
          </div>
        ) : (
          <div className="p-4 rounded-full bg-gradient-accent">
            <FileText className="h-12 w-12 text-accent-foreground" />
          </div>
        )}
        
        <div className="space-y-2">
          <h3 className="text-xl font-semibold font-inter">
            {isUploading ? "Processing your resume..." : "Drop your resume here"}
          </h3>
          <p className="text-muted-foreground">
            {isUploading 
              ? "Our AI is extracting your information" 
              : "Supports PDF and DOCX files up to 10MB"
            }
          </p>
          {!isUploading && (
            <p className="text-sm text-muted-foreground">
              or click to browse files
            </p>
          )}
        </div>
      </div>
    </div>
  );
};