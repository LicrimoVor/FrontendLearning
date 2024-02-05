import { FC, memo } from 'react';

import { FlexProps, Flex } from '../Flex/Flex';

type VStackProps = Omit<FlexProps, 'direction'>;

/** Компонент позиционирования flex */
export const VStack: FC<VStackProps> = memo((props: VStackProps) => {
    const {
        align = 'start',
    } = props;

    return (
        <Flex
            direction="column"
            align={align}
            {...props}
        />
    );
});
