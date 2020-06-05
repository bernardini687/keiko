import { undo } from './src/undo/handler.ts'

// TODO: import { table } from './src/shared.ts'
//       or is that the handler's job?
const table = Deno.args[0]?.startsWith('r') ? 'regulars' : 'entries'
console.log('TABLE::', table)

undo(table)
