import { RESTDataSource } from "@apollo/datasource-rest";

export class JsonplaceholderPostAPI extends RESTDataSource {
  override baseURL = "https://jsonplaceholder.typicode.com/";

  async getPosts() {
    return this.get("posts");
  }

  async getPost(id: string) {
    return this.get(`posts/${id}`);
  }
}
