# Build the dependencies
pnpm i || npm i

# Prisma generate
npx prisma generate

# Prisma Migrate (Seed automatically)
npx prisma migrate dev --name "init"

# Typescript compiler
npx tsc

# Start server with pm2
pnpm run start

# Open the project in the browser
open http://localhost:3000/