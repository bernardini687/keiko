#!/bin/sh

touch $1.ts
echo "import { $1 } from './src/$1/handler.ts'\n\n$1()" >> $1.ts
echo "CREATED $1.ts"

mkdir -p src/$1
echo "CREATED src/$1"

mkdir src/$1/helpers
echo "CREATED src/$1/helpers"

echo "export function $1() {\n  console.log('$1')\n}" >> src/$1/handler.ts
touch src/$1/handler.ts
echo "CREATED src/$1/handler.ts"
