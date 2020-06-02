touch test.db &&
rm test.db &&
DENO_ENV=test deno run -A prepare.ts &&

DENO_ENV=test deno run -A add.ts g 120 y &&
DENO_ENV=test deno run -A add.ts g 90 m &&
DENO_ENV=test deno run -A add.ts i 900 m &&
DENO_ENV=test deno run -A add.ts g 100 m &&

DENO_ENV=test deno run -A add.ts l 34,99 1-6-2020 &&
DENO_ENV=test deno run -A add.ts l 34,99 1-5-2020 &&
DENO_ENV=test deno run -A add.ts l 34,99 2-6-2020 &&

DENO_ENV=test deno run -A review.ts &&
DENO_ENV=test deno run -A review.ts r &&

DENO_ENV=test KEIKO_SAVE_GOAL=10 deno run -A budget.ts
