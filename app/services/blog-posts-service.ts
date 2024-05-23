import Service from '@ember/service';
import type {
  BlogPost,
  BlogPostUpsertRequest,
} from 'blogging-platform-client/models/models';

export default class BlogPostsService extends Service {
  async getAll() {
    const response = await fetch(`http://localhost:5042/api/blogposts`, {
      method: 'GET',
      headers: {
        Accept: 'application.json',
        'Content-Type': 'application/json',
      },
    });

    return await (response.json() as Promise<BlogPost[]>);
  }

  async getById(id: number) {
    const response = await fetch(`http://localhost:5042/api/blogposts/${id}`, {
      method: 'GET',
      headers: {
        Accept: 'application.json',
        'Content-Type': 'application/json',
      },
    });

    return await (response.json() as Promise<BlogPost>);
  }

  async create(entity: BlogPostUpsertRequest) {
    const response = await fetch(`http://localhost:5042/api/blogposts`, {
      method: 'POST',
      headers: {
        Accept: 'application.json',
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(entity),
    });

    return await (response.json() as Promise<BlogPost>);
  }

  async update(id: number, entity: BlogPostUpsertRequest) {
    const response = await fetch(`http://localhost:5042/api/blogposts/${id}`, {
      method: 'PUT',
      headers: {
        Accept: 'application.json',
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(entity),
    });

    return await (response.json() as Promise<BlogPost>);
  }

  async delete(id: number) {
    await fetch(`http://localhost:5042/api/blogposts/${id}`, {
      method: 'DELETE',
      headers: {
        Accept: 'application.json',
        'Content-Type': 'application/json',
      },
    });
  }
}

// Don't remove this declaration: this is what enables TypeScript to resolve
// this service using `Owner.lookup('service:blog-post-service')`, as well
// as to check when you pass the service name as an argument to the decorator,
// like `@service('blog-post-service') declare altName: BlogPostServiceService;`.
declare module '@ember/service' {
  interface Registry {
    'blog-posts-service': BlogPostsService;
  }
}
