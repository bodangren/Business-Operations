import Link from 'next/link';
import { readdirSync, statSync } from 'fs';
import { join } from 'path';
import { Badge } from '@/components/ui/badge';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';

export default function DebugLandingPage() {
  const debugDir = join(process.cwd(), 'src/app/debug');
  
  const subdirectories = readdirSync(debugDir)
    .filter(item => {
      const itemPath = join(debugDir, item);
      return statSync(itemPath).isDirectory();
    })
    .sort();

  return (
    <div className="min-h-screen bg-gradient-to-br from-background via-background to-muted/20">
      <div className="container mx-auto px-4 py-8 max-w-6xl">
        <div className="mb-6">
          <Badge variant="outline">Debug</Badge>
          <h1 className="text-3xl font-bold mt-2">Debug Pages</h1>
          <p className="text-muted-foreground mt-2">
            This page automatically lists all debug subpages available for testing and development.
          </p>
        </div>
        
        <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
          {subdirectories.map((dir) => (
            <Link
              key={dir}
              href={`/debug/${dir}`}
            >
              <Card className="border-gray-200 hover:bg-muted/50 transition-colors h-full">
                <CardHeader>
                  <CardTitle className="text-xl capitalize">
                    {dir.replace(/-/g, ' ')}
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground text-sm">
                    Debug page for {dir.replace(/-/g, ' ')} functionality
                  </p>
                </CardContent>
              </Card>
            </Link>
          ))}
        </div>
        
        {subdirectories.length === 0 && (
          <p className="text-muted-foreground italic">No debug pages found.</p>
        )}
      </div>
    </div>
  );
}