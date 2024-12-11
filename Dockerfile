FROM node:22.11.0-alpine AS base
    
# Install dependencies only when needed
FROM base AS deps
# Check https://github.com/nodejs/docker-node/tree/b4117f9333da4138b03a546ec926ef50a31506c3#nodealpine to understand why libc6-compat might be needed.
RUN apk add --no-cache libc6-compat python3 g++ make
RUN apk update
WORKDIR /app

# Install dependencies based on the preferred package manager
COPY package.json yarn.lock* package-lock.json* pnpm-lock.yaml* ./
# Omit --production flag for TypeScript devDependencies
RUN yarn global add pnpm

RUN pnpm install

RUN pnpm i --config.arch=x64 --config.platform=linux --config.libc=musl sharp@0.33.3
    
# Step 2. Rebuild the source code only when needed
FROM base AS builder
    
WORKDIR /app
    
# Omit --production flag for TypeScript devDependencies
RUN yarn global add pnpm

COPY --from=deps /app/node_modules ./node_modules
COPY . .

COPY src ./src
COPY public ./public
COPY next.config.mjs .
COPY tsconfig.json .

# Next.js collects completely anonymous telemetry data about general usage. Learn more here: https://nextjs.org/telemetry
# Uncomment the following line to disable telemetry at build time
ENV NEXT_TELEMETRY_DISABLED 1
# Build Next.js based on the preferred package manager
RUN pnpm build

COPY . .

# Step 2. Production image, copy all the files and run next
FROM base AS runner
    
WORKDIR /app
    
ENV NODE_ENV production
# Disable NextJS telemetry during runtime.
ENV NEXT_TELEMETRY_DISABLED 1

# Don't run production as root
RUN addgroup --system --gid 1001 nodejs
RUN adduser --system --uid 1001 nextjs

COPY --from=builder /app/next.config.mjs .
COPY --from=builder /app/package.json .

# Set the correct permission for prerender cache
RUN mkdir .next
RUN chown nextjs:nodejs .next

# Automatically leverage output traces to reduce image size
# https://nextjs.org/docs/advanced-features/output-file-tracing
COPY --from=builder --chown=nextjs:nodejs /app/.next/standalone ./
COPY --from=builder --chown=nextjs:nodejs /app/.next/static ./.next/static
COPY --from=builder --chown=nextjs:nodejs /app/.next/cache ./.next/cache
COPY --from=builder --chown=nextjs:nodejs /app/public ./public

RUN chown -R nextjs ./.next/cache
USER nextjs

EXPOSE 3000
ENV PORT 3000
CMD ["node", "server.js"]
    