import { NextResponse } from 'next/server'
import { exec } from 'child_process'
import { promisify } from 'util'
import path from 'path'

const execAsync = promisify(exec)

export async function POST() {
  try {
    const projectRoot = path.join(process.cwd())
    const scriptPath = path.join(projectRoot, 'scripts', 'analyze-components.js')
    
    console.log('Running component analysis script...')
    
    const { stdout, stderr } = await execAsync(`node "${scriptPath}"`, {
      cwd: projectRoot,
      timeout: 30000 // 30 second timeout
    })
    
    if (stderr) {
      console.warn('Script warnings:', stderr)
    }
    
    console.log('Script output:', stdout)
    
    return NextResponse.json({
      success: true,
      message: 'Component analysis completed successfully',
      output: stdout
    })
    
  } catch (error) {
    console.error('Error running component analysis:', error)
    
    return NextResponse.json(
      {
        success: false,
        message: 'Failed to run component analysis',
        error: error instanceof Error ? error.message : 'Unknown error'
      },
      { status: 500 }
    )
  }
}