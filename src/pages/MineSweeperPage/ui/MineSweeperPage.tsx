import { FC, memo } from 'react';

import { classNames } from '@/shared/lib/classNames';
import { Loader } from '@/shared/ui/redesigned/Loader';

import cls from './MineSweeperPage.module.scss';

interface MineSweeperPageProps {
    className?: string,
}

/** Страница с сапером */
const MineSweeperPage: FC <MineSweeperPageProps> = (
    props: MineSweeperPageProps,
) => {
    const {
        className,
    } = props;

    return (
        <div className={classNames(cls.MineSweeperPage, {}, [className])}>
            <Loader />
        </div>
    );
};

export default memo(MineSweeperPage);
