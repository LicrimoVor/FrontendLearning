import { MutableRefObject, RefObject, useEffect } from 'react';

export function useInitialRefEffect<T>(
    callback: () => void,
    refDep: Array<RefObject<T> | MutableRefObject<T>>,
) {
    useEffect(() => {
        if (__PROJECT__ !== 'storybook') {
            callback();
        }
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, refDep);
}
