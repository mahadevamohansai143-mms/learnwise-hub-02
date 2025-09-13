import { useState, useCallback } from "react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Progress } from "@/components/ui/progress";
import { useToast } from "@/components/ui/use-toast";
import { Upload, FileText, CheckCircle, AlertCircle, Loader2 } from "lucide-react";
import documentIcon from "@/assets/document-processing.jpg";

interface UploadStatus {
  status: 'idle' | 'uploading' | 'processing' | 'complete' | 'error';
  progress: number;
  fileName?: string;
  message?: string;
}

const DocumentUpload = () => {
  const [uploadStatus, setUploadStatus] = useState<UploadStatus>({ status: 'idle', progress: 0 });
  const [dragActive, setDragActive] = useState(false);
  const { toast } = useToast();

  const handleFiles = useCallback(async (files: FileList) => {
    if (files.length === 0) return;
    
    const file = files[0];
    if (!file.type.includes('pdf') && !file.type.includes('document') && !file.type.includes('text')) {
      toast({
        title: "Invalid file type",
        description: "Please upload PDF, Word documents, or text files.",
        variant: "destructive",
      });
      return;
    }

    setUploadStatus({ status: 'uploading', progress: 0, fileName: file.name });
    
    // Simulate upload progress
    for (let i = 0; i <= 50; i += 10) {
      setUploadStatus(prev => ({ ...prev, progress: i }));
      await new Promise(resolve => setTimeout(resolve, 200));
    }
    
    setUploadStatus(prev => ({ ...prev, status: 'processing', progress: 50, message: 'Processing document...' }));
    
    // Simulate processing
    for (let i = 50; i <= 100; i += 10) {
      setUploadStatus(prev => ({ ...prev, progress: i }));
      await new Promise(resolve => setTimeout(resolve, 300));
    }
    
    setUploadStatus({
      status: 'complete',
      progress: 100,
      fileName: file.name,
      message: 'Document processed successfully! AI assessments generated.'
    });

    toast({
      title: "Success!",
      description: "Document uploaded and processed. Ready for study!",
    });
  }, [toast]);

  const handleDrag = useCallback((e: React.DragEvent) => {
    e.preventDefault();
    e.stopPropagation();
    if (e.type === "dragenter" || e.type === "dragover") {
      setDragActive(true);
    } else if (e.type === "dragleave") {
      setDragActive(false);
    }
  }, []);

  const handleDrop = useCallback((e: React.DragEvent) => {
    e.preventDefault();
    e.stopPropagation();
    setDragActive(false);
    if (e.dataTransfer.files) {
      handleFiles(e.dataTransfer.files);
    }
  }, [handleFiles]);

  const handleInputChange = useCallback((e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files) {
      handleFiles(e.target.files);
    }
  }, [handleFiles]);

  const resetUpload = () => {
    setUploadStatus({ status: 'idle', progress: 0 });
  };

  return (
    <section id="documents" className="py-16">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold mb-4">Upload Learning Materials</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Upload your documents, PDFs, or study materials. Our AI will process them 
            and generate personalized assessments and study recommendations.
          </p>
        </div>

        <div className="max-w-4xl mx-auto grid lg:grid-cols-2 gap-8 items-center">
          <div className="animate-scale-in">
            <img
              src={documentIcon}
              alt="Document processing illustration"
              className="rounded-xl shadow-medium w-full h-64 object-cover"
            />
          </div>

          <Card className="animate-slide-up shadow-medium">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <FileText className="h-5 w-5 text-primary" />
                Document Processor
              </CardTitle>
              <CardDescription>
                Drag and drop your files or click to browse
              </CardDescription>
            </CardHeader>
            <CardContent>
              {uploadStatus.status === 'idle' ? (
                <div
                  className={`border-2 border-dashed rounded-lg p-8 text-center transition-all duration-300 ${
                    dragActive
                      ? 'border-primary bg-primary/5 scale-105'
                      : 'border-muted-foreground/25 hover:border-primary hover:bg-primary/5'
                  }`}
                  onDragEnter={handleDrag}
                  onDragLeave={handleDrag}
                  onDragOver={handleDrag}
                  onDrop={handleDrop}
                >
                  <Upload className="h-12 w-12 text-muted-foreground mx-auto mb-4" />
                  <h3 className="text-lg font-semibold mb-2">Upload Documents</h3>
                  <p className="text-muted-foreground mb-4">
                    Supports PDF, Word documents, and text files
                  </p>
                  <input
                    type="file"
                    id="file-upload"
                    className="hidden"
                    accept=".pdf,.doc,.docx,.txt"
                    onChange={handleInputChange}
                  />
                  <label htmlFor="file-upload">
                    <Button variant="gradient" asChild>
                      <span>Choose Files</span>
                    </Button>
                  </label>
                </div>
              ) : (
                <div className="space-y-4">
                  <div className="flex items-center gap-3">
                    {uploadStatus.status === 'uploading' || uploadStatus.status === 'processing' ? (
                      <Loader2 className="h-5 w-5 animate-spin text-primary" />
                    ) : uploadStatus.status === 'complete' ? (
                      <CheckCircle className="h-5 w-5 text-success" />
                    ) : (
                      <AlertCircle className="h-5 w-5 text-destructive" />
                    )}
                    <span className="font-medium">{uploadStatus.fileName}</span>
                  </div>
                  
                  <Progress value={uploadStatus.progress} className="progress-glow" />
                  
                  {uploadStatus.message && (
                    <p className="text-sm text-muted-foreground">{uploadStatus.message}</p>
                  )}
                  
                  {uploadStatus.status === 'complete' && (
                    <div className="flex gap-2">
                      <Button variant="success" size="sm">
                        View Analysis
                      </Button>
                      <Button variant="outline" size="sm" onClick={resetUpload}>
                        Upload Another
                      </Button>
                    </div>
                  )}
                </div>
              )}
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default DocumentUpload;