import typescript from '@rollup/plugin-typescript'
import { terser } from 'rollup-plugin-terser'

export default {
  input: 'source/index.ts',
  output: [
    {
      file: 'dist/browser/strunit.js',
      name: 'strunit',
      format: 'iife'
    },
    {
      file: 'dist/browser/strunit.min.js',
      name: 'strunit',
      format: 'iife',
      plugins: [terser()]
    }
  ],
  plugins: [typescript()]
}
