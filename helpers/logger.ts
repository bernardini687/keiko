/** Development-only console logger. */
export function log(x: any) {
  Deno.env.get('DENO_ENV') === 'dev' && console.log(x)
}
