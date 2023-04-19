!#/bin/bash
name=jobs
mkdir src test config docs build
touch ./src/$name.ts
touch ./test/$name.test.ts
touch ./config/.env.development
touch ./config/.env.production
touch ./config/.env.test
echo '/node_modules' > .gitignore
echo '/build' >> .gitignore
npm init -y
npm i express dotenv cors ejs ts-standard 
npm i typescript ts-jest @types/express @types/cors @types/ejs @types/jest ts-node-dev ts-standard -D
npx tsc --init