'use client';

import React, { useRef, useEffect, useState } from 'react';
import { Previewer } from 'pagedjs';
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetDescription,
  SheetFooter,
} from '@/components/ui/sheet';
import { Button } from '@/components/ui/button';
import { cn } from '@/lib/utils';
import { Printer, X, Download, Loader2 } from 'lucide-react';

export interface PrintPreviewModalProps {
  /** Whether the modal is open */
  open: boolean;
  /** Callback when modal closes */
  onClose: () => void;
  /** Content to preview */
  children: React.ReactNode;
  /** Title for the preview */
  title: string;
  /** Unit name */
  unitName?: string;
  /** Lesson number */
  lessonNumber?: number;
  /** Custom CSS for print */
  printCSS?: string;
  /** Enable page numbers */
  showPageNumbers?: boolean;
  /** Additional class names */
  className?: string;
}

/**
 * PrintPreviewModal component
 * Shows a preview of the printable content with paged.js pagination
 */
export function PrintPreviewModal({
  open,
  onClose,
  children,
  title,
  unitName,
  lessonNumber,
  printCSS,
  showPageNumbers = true,
  className,
}: PrintPreviewModalProps) {
  const contentRef = useRef<HTMLDivElement>(null);
  const previewRef = useRef<HTMLDivElement>(null);
  const [isLoading, setIsLoading] = useState(false);
  const [pageCount, setPageCount] = useState(0);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    if (!open || !contentRef.current || !previewRef.current) {
      return;
    }

    const initPreview = async () => {
      setIsLoading(true);
      setError(null);

      try {
        // Clear previous preview
        if (previewRef.current) {
          previewRef.current.innerHTML = '';
        }

        const previewer = new Previewer();

        // Clone content for preview
        const content = contentRef.current?.cloneNode(true) as HTMLElement;
        if (!content) return;

        // Add print-specific styles
        const style = document.createElement('style');
        style.textContent = `
          @page {
            size: A4;
            margin: 2cm 2.5cm;
          }

          ${showPageNumbers ? `
          @page {
            @bottom-center {
              content: "Page " counter(page) " of " counter(pages);
              font-size: 9pt;
              color: #666;
            }
          }
          ` : ''}

          ${printCSS || ''}
        `;
        content.prepend(style);

        // Preview content
        await previewer.preview(content);

        // Count pages
        const pages = previewRef.current?.querySelectorAll('.pagedjs_page');
        setPageCount(pages?.length || 0);

        setIsLoading(false);
      } catch (err) {
        console.error('Failed to generate preview:', err);
        setError('Failed to generate preview. Please try again.');
        setIsLoading(false);
      }
    };

    initPreview();
  }, [open, printCSS, showPageNumbers]);

  const handlePrint = () => {
    window.print();
  };

  const handleDownloadPDF = () => {
    // Open print dialog for PDF download
    window.print();
  };

  return (
    <Sheet open={open} onOpenChange={onClose}>
      <SheetContent
        side="right"
        className={cn(
          'w-full sm:max-w-2xl md:max-w-3xl lg:max-w-4xl',
          'flex flex-col',
          className
        )}
      >
        <SheetHeader>
          <SheetTitle>Print Preview</SheetTitle>
          <SheetDescription>
            {title}
            {unitName && ` - ${unitName}`}
            {lessonNumber && ` - Lesson ${lessonNumber}`}
          </SheetDescription>
        </SheetHeader>

        {/* Hidden content for paged.js processing */}
        <div ref={contentRef} className="hidden">
          {/* Worksheet header */}
          <div className="worksheet-header">
            <h1>{title}</h1>
            {unitName && <p>{unitName}</p>}
            {lessonNumber && <p>Lesson {lessonNumber}</p>}

            {/* Student info fields */}
            <div className="student-info">
              <div className="student-info-field">
                <label>Name:</label>
                <div className="line" />
              </div>
              <div className="student-info-field">
                <label>Date:</label>
                <div className="line" />
              </div>
              <div className="student-info-field">
                <label>Class:</label>
                <div className="line" />
              </div>
              <div className="student-info-field">
                <label>Period:</label>
                <div className="line" />
              </div>
            </div>
          </div>

          {children}
        </div>

        {/* Preview area */}
        <div className="flex-1 overflow-auto py-4">
          {isLoading && (
            <div className="flex items-center justify-center h-full">
              <div className="flex flex-col items-center gap-4">
                <Loader2 className="h-8 w-8 animate-spin text-primary" />
                <p className="text-muted-foreground">Generating preview...</p>
              </div>
            </div>
          )}

          {error && (
            <div className="flex items-center justify-center h-full">
              <div className="text-center">
                <p className="text-destructive">{error}</p>
                <Button
                  variant="outline"
                  className="mt-4"
                  onClick={() => window.print()}
                >
                  Try Direct Print
                </Button>
              </div>
            </div>
          )}

          <div
            ref={previewRef}
            className={cn(
              'print-preview-content',
              isLoading || error ? 'hidden' : 'block'
            )}
          />
        </div>

        {/* Page count */}
        {pageCount > 0 && !isLoading && (
          <div className="text-center text-sm text-muted-foreground py-2">
            {pageCount} {pageCount === 1 ? 'page' : 'pages'}
          </div>
        )}

        <SheetFooter className="flex-row gap-2 justify-end">
          <Button variant="outline" onClick={onClose}>
            <X className="h-4 w-4 mr-2" />
            Cancel
          </Button>
          <Button variant="outline" onClick={handleDownloadPDF}>
            <Download className="h-4 w-4 mr-2" />
            Save PDF
          </Button>
          <Button onClick={handlePrint}>
            <Printer className="h-4 w-4 mr-2" />
            Print
          </Button>
        </SheetFooter>
      </SheetContent>
    </Sheet>
  );
}

export default PrintPreviewModal;
