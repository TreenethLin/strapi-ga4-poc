export interface ArticleResponse {
    data: Article[];
    meta: {
      pagination: {
        page: number;
        pageSize: number;
        pageCount: number;
        total: number;
      };
    };
  }
  
export interface Article {
    id: number;
    attributes: {
      title: string;
      author: string;
      release: string;
      content: string;
      cta_url: string;
      cta_btn: string;
      createdAt: string;
      updatedAt: string;
      publishedAt: string;
      cover: {
        data: {
          id: number;
          attributes: {
            name: string;
            formats: {
              small: ImageFormat;
              medium: ImageFormat;
              thumbnail: ImageFormat;
            };
            url: string;
          };
        };
      };
    };
  }
  
interface ImageFormat {
    ext: string;
    url: string;
    hash: string;
    mime: string;
    name: string;
    size: number;
    width: number;
    height: number;
  }