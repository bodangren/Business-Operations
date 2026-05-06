'use client';

import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetDescription,
  SheetFooter,
} from '@/components/ui/sheet';
import { cn } from '@/lib/utils';
import { Printer, Eye, FileText, Key, X, Loader2 } from 'lucide-react';

export type PrintMode = 'worksheet' | 'answer-key' | 'both';

export interface PrintButtonProps {
  /** Lesson title */
  title: string;
  /** Unit name */
  unitName?: string;
  /** Lesson number */
  lessonNumber?: number;
  /** Content to print */
  children: React.ReactNode;
  /** Print mode */
  mode?: PrintMode;
  /** Show preview before printing */
  showPreview?: boolean;
  /** Custom CSS for print */
  printCSS?: string;
  /** Button variant */
  variant?: 'default' | 'outline' | 'secondary' | 'ghost';
  /** Button size */
  size?: 'default' | 'sm' | 'lg' | 'icon';
  /** Additional class names */
  className?: string;
  /** Disable button */
  disabled?: boolean;
}

/**
 * PrintButton component
 * Adds a print button to lesson pages with preview capability
 */
export function PrintButton({
  title,
  unitName,
  lessonNumber,
  children,
  mode = 'worksheet',
  showPreview = true,
  printCSS,
  variant = 'outline',
  size = 'default',
  className,
  disabled = false,
}: PrintButtonProps) {
  const [isOpen, setIsOpen] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [activeMode, setActiveMode] = useState<PrintMode>(mode);

  const handlePrint = () => {
    if (showPreview) {
      setIsOpen(true);
    } else {
      window.print();
    }
  };

  const handleDirectPrint = () => {
    setIsLoading(true);

    // Inject print styles
    const style = document.createElement('style');
    style.id = 'print-button-styles';
    style.textContent = `
      @media print {
        body * {
          visibility: hidden;
        }
        .printable-content, .printable-content * {
          visibility: visible;
        }
        .printable-content {
          position: absolute;
          left: 0;
          top: 0;
          width: 100%;
        }
        .no-print {
          display: none !important;
        }
      }
      ${printCSS || ''}
    `;
    document.head.appendChild(style);

    // Trigger print
    setTimeout(() => {
      window.print();

      // Clean up
      document.head.removeChild(style);
      setIsLoading(false);
      setIsOpen(false);
    }, 100);
  };

  const getModeIcon = (m: PrintMode) => {
    switch (m) {
      case 'worksheet':
        return <FileText className="h-4 w-4" />;
      case 'answer-key':
        return <Key className="h-4 w-4" />;
      case 'both':
        return (
          <div className="flex -space-x-1">
            <FileText className="h-4 w-4" />
            <Key className="h-4 w-4" />
          </div>
        );
    }
  };

  const getModeLabel = (m: PrintMode) => {
    switch (m) {
      case 'worksheet':
        return 'Worksheet';
      case 'answer-key':
        return 'Answer Key';
      case 'both':
        return 'Worksheet + Answer Key';
    }
  };

  return (
    <>
      <Button
        variant={variant}
        size={size}
        onClick={handlePrint}
        disabled={disabled || isLoading}
        className={cn('gap-2', className)}
      >
        {isLoading ? (
          <Loader2 className="h-4 w-4 animate-spin" />
        ) : (
          <Printer className="h-4 w-4" />
        )}
        Print
      </Button>

      {/* Preview sheet */}
      <Sheet open={isOpen} onOpenChange={setIsOpen}>
        <SheetContent side="right" className="w-full sm:max-w-2xl">
          <SheetHeader>
            <SheetTitle>Print Preview</SheetTitle>
            <SheetDescription>
              {title}
              {unitName && ` - ${unitName}`}
              {lessonNumber && ` - Lesson ${lessonNumber}`}
            </SheetDescription>
          </SheetHeader>

          {/* Mode selector */}
          <div className="py-4">
            <h4 className="text-sm font-medium mb-2">Print Mode</h4>
            <div className="flex gap-2">
              {(['worksheet', 'answer-key', 'both'] as PrintMode[]).map((m) => (
                <Button
                  key={m}
                  variant={activeMode === m ? 'default' : 'outline'}
                  size="sm"
                  onClick={() => setActiveMode(m)}
                  className="gap-2"
                >
                  {getModeIcon(m)}
                  {getModeLabel(m)}
                </Button>
              ))}
            </div>
          </div>

          {/* Preview area */}
          <div className="flex-1 overflow-auto py-4 border rounded-lg">
            <div className="printable-content p-8 bg-white">
              {/* Header */}
              <div className="worksheet-header text-center mb-8 pb-4 border-b-2 border-primary">
                <h1 className="text-2xl font-bold">{title}</h1>
                {unitName && <p className="text-muted-foreground">{unitName}</p>}
                {lessonNumber && <p>Lesson {lessonNumber}</p>}

                <div className="student-info mt-4 grid grid-cols-2 gap-4 text-left">
                  <div className="student-info-field flex items-center gap-2">
                    <label className="font-medium">Name:</label>
                    <div className="line flex-1 border-b border-black" />
                  </div>
                  <div className="student-info-field flex items-center gap-2">
                    <label className="font-medium">Date:</label>
                    <div className="line flex-1 border-b border-black" />
                  </div>
                </div>
              </div>

              {/* Content preview */}
              {activeMode !== 'answer-key' && (
                <div className="space-y-4">
                  <h3 className="font-semibold">Worksheet Content</h3>
                  {children}
                </div>
              )}

              {/* Answer key indicator */}
              {activeMode !== 'worksheet' && (
                <div className="mt-8 pt-4 border-t">
                  <div className="answer-key-header text-center">
                    <h2 className="text-xl font-bold">Answer Key</h2>
                    <p className="text-sm text-muted-foreground">
                      Answer key will be included on a separate page
                    </p>
                  </div>
                </div>
              )}
            </div>
          </div>

          <SheetFooter className="flex-row gap-2 justify-end">
            <Button variant="outline" onClick={() => setIsOpen(false)}>
              <X className="h-4 w-4 mr-2" />
              Cancel
            </Button>
            <Button variant="outline" onClick={handleDirectPrint}>
              <Eye className="h-4 w-4 mr-2" />
              Preview Full
            </Button>
            <Button onClick={handleDirectPrint} disabled={isLoading}>
              {isLoading ? (
                <Loader2 className="h-4 w-4 mr-2 animate-spin" />
              ) : (
                <Printer className="h-4 w-4 mr-2" />
              )}
              Print
            </Button>
          </SheetFooter>
        </SheetContent>
      </Sheet>
    </>
  );
}

export default PrintButton;
