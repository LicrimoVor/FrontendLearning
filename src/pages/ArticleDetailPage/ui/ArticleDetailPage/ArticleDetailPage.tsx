import { FC, memo } from 'react';
import { useTranslation } from 'react-i18next';

import { classNames } from 'shared/lib/classNames/classNames';
import cls from './ArticleDetailPage.module.scss';

interface ArticleDetailPageProps {
    className?: string
}

/** Докстринг */
const ArticleDetailPage: FC<ArticleDetailPageProps> = (props) => {
    const { t } = useTranslation();

    const {
        className,
        ...otherProps
    } = props;

    return (
        <div
            className={classNames(cls.ArticleDetailPage, {}, [className])}
        >
            {t('ArticleDetailPage')}
        </div>
    );
};

export default memo(ArticleDetailPage);
