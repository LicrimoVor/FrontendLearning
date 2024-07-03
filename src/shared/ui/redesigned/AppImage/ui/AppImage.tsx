import {
    FC, ImgHTMLAttributes, memo, ReactElement, useLayoutEffect, useState,
} from 'react';

interface AppImageProps extends ImgHTMLAttributes<HTMLImageElement> {
    className?: string,
    fallback?: ReactElement,
    errorFallback?: ReactElement,
    width?: number,
    height?:number,
}

/**
 *  Картинка с асинхронной подгрузкой
 */
export const AppImage: FC<AppImageProps> = memo((props: AppImageProps) => {
    const {
        className,
        src,
        alt = 'image',
        fallback,
        errorFallback,
        width,
        height,
        ...otherProps
    } = props;

    const [isLoading, setIsloading] = useState(true);
    const [hasError, setHasError] = useState(false);

    useLayoutEffect(() => {
        const img = new Image(width, height);
        img.onerror = () => {
            setIsloading(false);
            setHasError(true);
            // console.warn(`Image download error: ${src}`);
        };
        img.onload = () => {
            setIsloading(false);
        };
        img.src = src ?? '';
    });

    if (isLoading && fallback) {
        return fallback;
    }

    if (hasError && errorFallback) {
        return errorFallback;
    }

    return (
        <img
            alt={alt}
            src={src}
            className={className}
            width={width}
            height={height}
            {...otherProps}
        />
    );
});
