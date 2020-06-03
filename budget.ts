import { budget } from './src/budget/handler.ts'

const saveFraction = Number(Deno.env.get('KEIKO_SAVE_GOAL')) || 0
console.log('SAVE FRACTION::', saveFraction)

budget(saveFraction)
