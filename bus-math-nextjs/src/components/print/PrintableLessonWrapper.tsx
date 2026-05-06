'use client';

import React, { useRef, useEffect, useState } from 'react';
import { Previewer } from 'pagedjs';
import { cn } from '@/lib/utils';

export interface PrintableLessonWrapperProps {
  /** Child content to be printed */
  children: React.ReactNode;
  /** Lesson title for header */
  title: string;
  /** Unit name */
  unitName?: string;
  /** Lesson number */
  lessonNumber?: number;
  /** Enable paged.js pagination */
  enablePagination?: boolean;
  /** Custom CSS for print */
  printCSS?: string;
  /** Additional class names */
  className?: string;
  /** Show print preview */
  showPreview?: boolean;
  /** On preview ready callback */
  onPreviewReady?: (previewer: Previewer) => void;
}

/**
 * PrintableLessonWrapper component
 * Wraps lesson content for printing with paged.js pagination
 */
export function PrintableLessonWrapper({
  children,
  title,
  unitName,
  lessonNumber,
  enablePagination = true,
  printCSS,
  className,
  showPreview = false,
  onPreviewReady,
}: PrintableLessonWrapperProps) {
  const contentRef = useRef<HTMLDivElement>(null);
  const previewRef = useRef<HTMLDivElement>(null);
  const [isPreviewReady, setIsPreviewReady] = useState(false);

  useEffect(() => {
    if (!enablePagination || !showPreview || !contentRef.current || !previewRef.current) {
      return;
    }

    const initPreview = async () => {
      try {
        const newPreviewer = new Previewer();

        // Clone content for preview
        const content = contentRef.current?.cloneNode(true) as HTMLElement;
        if (!content) return;

        // Add print-specific styles
        if (printCSS) {
          const style = document.createElement('style');
          style.textContent = printCSS;
          content.prepend(style);
        }

        // Preview content
        await newPreviewer.preview(content);

        setIsPreviewReady(true);
        onPreviewReady?.(newPreviewer);
      } catch (error) {
        console.error('Failed to initialize paged.js preview:', error);
      }
    };

    initPreview();
  }, [enablePagination, showPreview, printCSS, onPreviewReady]);

  // Generate header metadata
  const headerContent = (
    <div className="print:hidden mb-4 p-4 bg-muted/50 rounded-lg">
      <div className="flex items-center justify-between">
        <div>
          <h2 className="text-lg font-semibold">{title}</h2>
          {unitName && <p className="text-sm text-muted-foreground">{unitName}</p>}
        </div>
        {lessonNumber && (
          <div className="text-right">
            <span className="text-2xl font-bold">Lesson {lessonNumber}</span>
          </div>
        )}
      </div>
    </div>
  );

  return (
    <div className={cn('printable-lesson-wrapper', className)}>
      {headerContent}

      {/* Main content for printing */}
      <div
        ref={contentRef}
        className={cn(
          'printable-content',
          showPreview && 'hidden print:block'
        )}
      >
        {/* Worksheet header - visible only in print */}
        <div className="hidden print:block worksheet-header">
          <h1>{title}</h1>
          {unitName && <p className="text-sm">{unitName}</p>}
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
      {showPreview && (
        <div
          ref={previewRef}
          className={cn(
            'print-preview',
            isPreviewReady ? 'block' : 'hidden'
          )}
        />
      )}
    </div>
  );
}

export default PrintableLessonWrapper;
