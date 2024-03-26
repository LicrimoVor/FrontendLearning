import {
    FC, memo, ReactNode, createContext, useRef, useState, useEffect, useMemo, useContext,
} from 'react';

type SpringType = typeof import('@react-spring/web');
type GestureType = typeof import('@use-gesture/react');

interface AnimationProviderState {
    Spring?: SpringType,
    Gesture?: GestureType
    isLoading?: boolean,
}

const getAsyncAnimationModule = async () => (
    Promise.all([
        import('@react-spring/web'),
        import('@use-gesture/react'),
    ])
);

const AnimationContext = createContext<AnimationProviderState>({});

/** Ленивая подругзка библиотек */
export const AnimationProvider: FC<{children: ReactNode, }> = memo((
    props: {children: ReactNode},
) => {
    const {
        children,
    } = props;

    const Spring = useRef<SpringType>();
    const Gesture = useRef<GestureType>();
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        getAsyncAnimationModule().then(([spring, gesture]) => {
            Spring.current = spring;
            Gesture.current = gesture;
            setIsLoading(false);
        });
    });

    const providerState = useMemo(() => ({
        isLoading,
        Spring: Spring.current,
        Gesture: Gesture.current,
    }), [Gesture, Spring, isLoading]);

    return (
        <AnimationContext.Provider value={providerState}>
            {children}
        </AnimationContext.Provider>
    );
});

export const useAnimationContext = () => (
    useContext(AnimationContext) as Required<AnimationProviderState>
);
