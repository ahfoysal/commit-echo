# Changelog

All notable changes to this project will be documented in this file.

The format is based on [Keep a Changelog](https://keepachangelog.com/).

## [0.2.0] - 2026-07-05

### Added
- Add `config set` command for updating configuration from the CLI (`c5fff90`)
- Add verbose diagnostics for batch mode with `--verbose` (`8b08c31`)
- Add `--max-diff-size` overrides and interactive setup support for diff truncation limits (`c4a0195`, `aa8bfcd`, `16351ae`, `8d93fbd`)
- Add `--show-diff`, `--dry-run`, and verbose output options to the suggest workflow (`a391752`, `c24ebd5`, `b20acaf`)
- Add shell completion generation for bash, zsh, and fish (`3c7a31e`)
- Add environment-variable overrides for configuration (`964c882`)
- Add example provider for local testing without API keys (`2a1bc65`)
- Add `config` and JSON-formatted `history` commands for machine-readable inspection (`16d363a`, `2f3d1cd`, `50eebed`)
- Add interactive multi-repo batch processing and streaming commit suggestions (`8fc83e1`, `6b03bfe`)
- Add automatic commit hook integration and customizable prompt templates, including `{{message}}` support (`8cd56f0`, `13b8253`, `706a3a9`)
- Add auto-accept commit mode with `--yes` and `--auto` (`82a61b1`)

### Changed
- Improve commit success output styling and cross-platform config-path handling (`a9181fc`, `1f82ca1`)
- Expand contributor and user documentation across README, CONTRIBUTING, provider guidance, and agent workflow docs (`238febe`, `7b76e34`, `d843c73`, `48e9d4a`, `dacca44`, `a522c6e`, `0cc5a37`, `c857157`, `5c35df6`, `1206a6b`)
- Add repository formatting defaults with Prettier, `.editorconfig`, and line-ending configuration (`1435719`, `ca04db6`, `3c8028e`, `6c12284`)

### Fixed
- Normalize custom init base URLs and improve missing-tool or missing-key error messages (`14acd3c`, `ca308c3`, `141f074`, `8ee1c1d`, `40aa048`, `a88c736`)
- Validate config size limits and provider request timeouts more consistently (`a0785b0`, `99e18ca`)
- Handle empty repositories, git diff failures, corrupted history entries, and separate commit/history write failures gracefully (`769a87e`, `734631b`, `ac6c7a7`, `7ef5669`)
- Preserve more suggestion formats by fixing numbered-body, bullet parsing, template rescans, and regenerate loop behavior (`2184845`, `15a939a`, `86eaad9`, `dd8787f`, `b2310d8`)
- Increase git diff buffer capacity and support per-invocation model overrides plus `--no-color` (`7ad6d1e`, `1069a2a`, `8da655e`)
