# Expired-hey-friend

This repository uses [Ruff](https://docs.astral.sh/ruff/) for Python linting and formatting.

## Running locally

Install Ruff:

```bash
pip install ruff
```

Check formatting:

```bash
ruff format --check .
```

Apply formatting:

```bash
ruff format .
```

Run linter:

```bash
ruff check .
```

Auto-fix lint issues:

```bash
ruff check --fix .
```

## CI

A GitHub Actions workflow (`.github/workflows/ruff.yml`) runs `ruff format --check` and `ruff check` on every push and pull request.
