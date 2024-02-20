export type HTMLTags = Exclude<keyof HTMLElementTagNameMap, 'dir'| 'marquee' | 'frameset' | 'frame' | 'font'>
