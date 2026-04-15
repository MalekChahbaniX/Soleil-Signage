# Start API server
$env:PORT=3000; $env:NODE_ENV="development"; pnpm --filter @workspace/api-server run start

# Start frontend
$env:PORT=5173; $env:BASE_PATH="/"; $env:NODE_ENV="development"; pnpm --filter @workspace/soleil-pub run dev

# Typecheck all packages
pnpm run typecheck

# Build all packages
pnpm run build