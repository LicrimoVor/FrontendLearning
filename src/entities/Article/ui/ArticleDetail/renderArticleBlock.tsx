import { ArticleBlockType } from '../../model/consts/article';
import { ArticleBlock } from '../../model/types/article';
import { ArticleBlockCodeComponent } from '../ArticleBlockCodeComponent/ArticleBlockCodeComponent';
import { ArticleBlockImageComponent } from '../ArticleBlockImageComponent/ArticleBlockImageComponent';
import { ArticleBlockTextComponent } from '../ArticleBlockTextComponent/ArticleBlockTextComponent';

export const renderArticleBlock = (block: ArticleBlock) => {
    switch (block.type) {
    case ArticleBlockType.CODE:
        return (
            <ArticleBlockCodeComponent
                block={block}
                key={block.id}
            />
        );
    case ArticleBlockType.IMAGE:
        return (
            <ArticleBlockImageComponent
                block={block}
                key={block.id}
            />
        );
    case ArticleBlockType.TEXT:
        return (
            <ArticleBlockTextComponent
                block={block}
                key={block.id}
            />
        );
    default:
        return null;
    }
};
