import { ArticleDetailCommentsSchema } from './ArticleDetailCommentsSchema';
import { ArticleDetailRecommendSchema } from './ArticleDetailRecommendSchema';

export interface ArticleDetailPageSchema {
    comments: ArticleDetailCommentsSchema,
    recommend: ArticleDetailRecommendSchema
}
