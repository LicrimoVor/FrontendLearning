import { FC, memo } from 'react';
import { useTranslation } from 'react-i18next';

import { classNames } from 'shared/lib/classNames/classNames';
import cls from './ArticlePage.module.scss';

interface ArticlePageProps {
    className?: string
}

/** Старница списка статей */
const ArticlePage: FC<ArticlePageProps> = (props) => {
    const { t } = useTranslation();

    const {
        className,
        ...otherProps
    } = props;

    return (
        <div
            className={classNames(cls.ArticlePage, {}, [className])}
        >
            {t('ArticlePage')}
        </div>
    );
};
export default memo(ArticlePage);
