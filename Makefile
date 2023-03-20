up:
	docker compose up --build

down:
	docker compose down --remove-orphans

node-sh:
	docker compose exec node sh
