import { resolve } from 'node:path'
import { fileURLToPath } from 'node:url'



function r(p: string) {
  return resolve(fileURLToPath(new URL('.', import.meta.url)), p)
}


export const aliasCore: Record<string, string> = {
  '@docs/utils': r(''),
  '@docs/types': r('../types'),
  '@components': r('../components'),
  '@composable': r('../composable')
}

export const aliasVirtual: Record<string, string> = {
  '#docs': r('./virutal')
}

export const alias: Record<string, string> = {
  ...aliasCore,
  ...aliasVirtual
}
