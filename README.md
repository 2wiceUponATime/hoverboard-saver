# Hoverboard Progress Saver

A browser extension that saves position and coins on [xkcd: Hoverboard](https://xkcd.com/1608/).

## Table of Contents
* [Hoverboard Progress Saver](#hoverboard-progress-saver)
    * [Supported Browsers](#supported-browsers)
    * [Requirements](#requirements)
* [Installation](#installation)
  * [Chromium](#chromium)
  * [Firefox](#firefox)
* [Development](#development)
* [Credits](#credits)

## Supported Browsers

* Chromium-based browsers (Chrome, Edge, Brave, etc.)
* Firefox

## Requirements
* Node.js 18 or later
* pnpm

# Installation

Clone the repository and install dependencies:

```bash
git clone https://github.com/2wiceUponATime/hoverboard-saver.git
cd hoverboard-saver
pnpm install
```

## Chromium
Build the extension:

```bash
pnpm build
```

Load the extension:
1. Open `chrome://extensions`
2. Enable **Developer Mode**
3. Click **Load unpacked**
4. Select the `extension` directory in the cloned repository

## Firefox
Build and zip the extension:

```bash
pnpm build:firefox
```

## Usage
Once loaded, the extension will add a new row of buttons under the comic on [xkcd: Hoverboard](https://xkcd.com/1608/).

Load as a temporary extension:
1. Open `about:debugging`
2. Go to **This Firefox**
3. Click **Load Temporary Add-on...**
4. Select the generated `.zip` file in `web-ext-artifacts/`

# Development

Chromium:

```bash
pnpm dev:chromium
```

Firefox:

```bash
pnpm dev:firefox
```

# Credits

See [extension/icons/ATTRIBUTION.md](extension/icons/ATTRIBUTION.md)