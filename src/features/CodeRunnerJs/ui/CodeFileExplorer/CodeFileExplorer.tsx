import {
    FC, memo, useCallback, useState,
} from 'react';

import ArrowSvg from '@/shared/assets/icons/arrow.svg';
import { useCodeSandboxContext } from '@/shared/lib/components/CodeSandbox';
import { classNames } from '@/shared/lib/classNames';

import { HStack } from '@/shared/ui/redesigned/Stack';
import { Icon } from '@/shared/ui/redesigned/Icon';
import cls from './CodeFileExplorer.module.scss';

interface CodeFileExplorerProps {
    className?: string,
}

/** Проводник файлов */
export const CodeFileExplorer: FC<CodeFileExplorerProps> = memo((props: CodeFileExplorerProps) => {
    const {
        className,
    } = props;

    const [collapsed, setCollapsed] = useState(false);
    const { library } = useCodeSandboxContext();

    const onCollapsedHandler = useCallback(() => {
        setCollapsed(!collapsed);
    }, [collapsed, setCollapsed]);

    return (
        <HStack
            className={classNames(cls.iconHandler, {}, [className])}
            justify="spaceBetween"
        >
            {collapsed
                ? (
                    <Icon
                        aria-labelledby="collaps-code-file-explorer"
                        clickable
                        Svg={ArrowSvg}
                        onClick={onCollapsedHandler}
                    />
                )
                : (
                    <>
                        <library.SandpackFileExplorer
                            style={{ height: '100%', margin: 0 }}
                        />
                        <Icon
                            aria-labelledby="collaps-code-file-explorer"
                            clickable
                            Svg={ArrowSvg}
                            onClick={onCollapsedHandler}
                            className={cls.iconNotCollaps}
                        />
                    </>
                )}
        </HStack>
    );
});
