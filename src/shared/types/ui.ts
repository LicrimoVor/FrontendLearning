export type Direction = 'top right' | 'top left' | 'bottom right' | 'bottom left';
export type HTMLTags = Exclude<keyof HTMLElementTagNameMap, 'dir'| 'marquee' | 'frameset' | 'frame' | 'font'>
