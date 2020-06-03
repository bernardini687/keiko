import { review } from './src/review/handler.ts'

const table = Deno.args[0]?.startsWith('r') ? 'regulars' : 'entries'
console.log('TABLE::', table)

review(table)
