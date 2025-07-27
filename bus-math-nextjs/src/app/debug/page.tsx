import Link from 'next/link';
import { readdirSync, statSync } from 'fs';
import { join } from 'path';

export default function DebugLandingPage() {
  const debugDir = join(process.cwd(), 'src/app/debug');
  
  const subdirectories = readdirSync(debugDir)
    .filter(item => {
      const itemPath = join(debugDir, item);
      return statSync(itemPath).isDirectory();
    })
    .sort();

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-6">Debug Pages</h1>
      <p className="text-gray-600 mb-8">
        This page automatically lists all debug subpages available for testing and development.
      </p>
      
      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
        {subdirectories.map((dir) => (
          <Link
            key={dir}
            href={`/debug/${dir}`}
            className="block p-6 bg-white border border-gray-200 rounded-lg shadow hover:bg-gray-50 transition-colors"
          >
            <h2 className="text-xl font-semibold mb-2 capitalize">
              {dir.replace(/-/g, ' ')}
            </h2>
            <p className="text-gray-600">
              Debug page for {dir.replace(/-/g, ' ')} functionality
            </p>
          </Link>
        ))}
      </div>
      
      {subdirectories.length === 0 && (
        <p className="text-gray-500 italic">No debug pages found.</p>
      )}
    </div>
  );
}