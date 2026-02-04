#!/usr/bin/env bash
set -euo pipefail

ROOT_DIR="$(cd "$(dirname "${BASH_SOURCE[0]}")/../.." && pwd)"
cd "$ROOT_DIR"

COMPOSE_ARGS=()
if [[ -f "$ROOT_DIR/docker-compose.prod.yml" && -f "$ROOT_DIR/.env.prod" ]]; then
  COMPOSE_ARGS=(-f docker-compose.yml -f docker-compose.prod.yml --env-file .env.prod)
fi

docker info

docker compose "${COMPOSE_ARGS[@]}" ps

docker compose "${COMPOSE_ARGS[@]}" logs --tail=100 strapi frontend-prod
