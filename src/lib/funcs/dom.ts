export function $<T extends HTMLElement>(selector: string): T | null {
    return document.querySelector<T>(selector);
}

export function $$<T extends HTMLElement>(selector: string): NodeListOf<T> {
    return document.querySelectorAll<T>(selector);
}
