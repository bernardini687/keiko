type Command = 'add' | 'budget' | 'help' | 'prepare' | 'review' | 'undo'

const commands: Record<string, Command> = {
  a: 'add',
  b: 'budget',
  h: 'help',
  p: 'prepare',
  r: 'review',
  u: 'undo',
}

const key = Deno.args[0]?.[0]

export const command = commands[key] ?? 'main'
