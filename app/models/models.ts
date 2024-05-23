export interface BlogPostDto {
  id: number;
  title: string;
  body: string;
}

export interface BlogPostUpsertRequest {
  title: string;
  body: string;
}

export class BlogPost {
  id!: number;
  title!: string;
  body!: string;

  constructor(partial: Partial<BlogPost>) {
    Object.assign(this, partial);
  }

  fromDto(dto: BlogPostDto) {
    return {
      id: dto.id,
      title: dto.title,
      body: dto.body,
    };
  }
}
