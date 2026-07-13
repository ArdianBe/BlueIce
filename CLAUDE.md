# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## What this is

A digital drinks menu (Getränkekarte) for **Blue Ice Köln**, a shisha lounge. Each `.html` file is a **complete, self-contained single-page menu** — inline `<style>`, inline `<script>`, and the full menu markup in one document. There is no build system, no package manager, no dependencies to install, and no tests. Fonts are the only external resource (loaded from Google Fonts via `<link>`), so the pages need internet to render with their intended typography but otherwise work by opening the file directly.

## Running / previewing

Open a file directly in a browser (`open index.html`) or serve the folder (`python3 -m http.server`) and visit the file. There is nothing to compile.

## The four files

All four contain the **same menu content and the same section structure** but differ only in visual theme (CSS variables, fonts, background effects):

- `index.html` — the primary/canonical menu (gold + ice-blue, Cormorant Garamond + Jost)
- `getraenkekarte-modern-minimal.html` — "Modern Minimal" theme
- `getraenkekarte-artdeco-noir.html` — "Art Deco Noir" theme
- `getraenkekarte-neon-lounge.html` — "Neon Lounge" theme

These are design alternatives of one another. **A content change (new drink, price, description) generally must be applied to all four files** to keep them in sync — they do not share any code.

## Structure of each page

- **`:root` CSS variables** at the top define the entire palette and font stack (`--gold`, `--blue`, `--cream`, `--fd` display font, `--fb` body font, etc.). Restyling a theme means editing these variables plus the background/effect rules, not the markup.
- **Tabs → sections.** A row of `.tab-btn` buttons at the top calls `showTab(id, btn)`. Each tab maps to a `<div id="..." class="section">`. The 12 section ids are fixed and identical across all files: `shisha`, `softdrinks`, `saefte`, `cocktails`, `longdrinks`, `spirituosen`, `bier`, `wein`, `flaschen`, `kaffee`, `snacks`, `info`.
- **`showTab`** (the only JS, ~7 lines at the bottom) hides all `.section`s, removes `.active` from all buttons, then shows the clicked section and scrolls to top. The initially visible section has `class="section visible"` (currently `shisha`).
- **Menu items** are static markup: `.drink-card` (name / description / price / volume) grouped under `.subcat` sub-headings within each section. Bottles use `.bottle-card`. To add or edit an item, duplicate an existing card in the relevant section — there is no data array driving the menu.

## Conventions

- UI text is in **German** (menu is for a Cologne venue). Keep new copy in German.
- Layout is **mobile-first** (content is capped at ~460px, `.wrapper`), since the menu is meant to be viewed on phones.
