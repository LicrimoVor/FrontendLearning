import {
    FC, ImgHTMLAttributes, memo, ReactElement, useLayoutEffect, useState,
} from 'react';

interface AppImageProps extends ImgHTMLAttributes<HTMLImageElement> {
    className?: string,
    fallback?: ReactElement,
    errorFallback?: ReactElement,
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
        ...otherProps
    } = props;

    const [isLoading, setIsloading] = useState(true);
    const [hasError, setHasError] = useState(false);

    useLayoutEffect(() => {
        const img = new Image();
        img.src = src ?? '';
        img.onload = () => {
            setIsloading(false);
        };
        img.onerror = () => {
            setIsloading(false);
            setHasError(true);
        };
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
            {...otherProps}
        />
    );
});
