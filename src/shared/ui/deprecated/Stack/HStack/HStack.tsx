import { FC, memo } from 'react';

import { FlexProps, Flex } from '../Flex/Flex';

type HStackProps = Omit<FlexProps, 'direction'>;

/**
 * @deprecated
 * Компонент позиционирования flex
 */
export const HStack: FC<HStackProps> = memo((props: HStackProps) => (
    <Flex
        direction="row"
        {...props}
    />
));
