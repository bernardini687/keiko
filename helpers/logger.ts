export function log(thing: any) {
  Deno.env.get('DENO_ENV') === 'dev' && console.log(thing)
}
