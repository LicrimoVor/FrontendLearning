export const setMetaData = (description?: string, title?: string) => {
    const metaDescription = document.documentElement.querySelector<HTMLMetaElement>('meta[name=description]');
    const metaTitle = document.documentElement.querySelector<HTMLTitleElement>('title');

    if (description && metaDescription) {
        metaDescription.content = description;
    }
    if (title && metaTitle) {
        metaTitle.textContent = title;
    }
};
