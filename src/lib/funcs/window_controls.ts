import { getCurrentWindow, Window } from "@tauri-apps/api/window";
import { $ } from "./dom";

export function initializeWindowControls() {
    const win = getCurrentWindow();

    setupWindowControlButtons(win);
    updateWindowState(win);

    win.onResized(() => updateWindowState(win));
}

function setupWindowControlButtons(win: Window) {
    const minimizeButton = $("#titlebar-minimize");
    const maximizeButton = $("#titlebar-maximize");
    const closeButton = $("#titlebar-close");

    if (minimizeButton) {
        minimizeButton.addEventListener("click", () => win.minimize());
    }
    if (maximizeButton) {
        maximizeButton.addEventListener("click", () => win.toggleMaximize());
    }
    if (closeButton) {
        closeButton.addEventListener("click", () => win.close());
    }
}

async function updateWindowState(win: Window) {
    const isMaximized = await win.isMaximized();

    updateMaximizeIcon(isMaximized);
    updateBorderRadius(isMaximized);
}

function updateMaximizeIcon(isMaximized: boolean) {
    const maximizeIcon = $("#titlebar-maximize");

    if (!maximizeIcon) return;

    maximizeIcon.innerHTML = isMaximized
        ? '<i class="ti ti-layers-subtract"></i>'
        : '<i class="ti ti-crop-1-1"></i>';
}

function updateBorderRadius(isMaximized: boolean) {
    const htmlElement = document.documentElement;
    const bodyElement = document.body;
    const borderRadius = isMaximized ? "0px" : "6px";

    if (htmlElement) {
        htmlElement.style.borderRadius = borderRadius;
    }
    if (bodyElement) {
        bodyElement.style.borderRadius = borderRadius;
    }
}
