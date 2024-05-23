import Route from '@ember/routing/route';
import { service } from '@ember/service';
import type BlogPostsService from 'blogging-platform-client/services/blog-posts-service';

export default class IndexRoute extends Route {
  @service blogPostsService!: BlogPostsService;

  async model() {
    return await this.blogPostsService.getAll();
  }
}
