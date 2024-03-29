import { RESTDataSource } from "@apollo/datasource-rest";

export class JsonplaceholderUserAPI extends RESTDataSource {
  override baseURL = "https://jsonplaceholder.typicode.com/";

  async getUsers() {
    return this.get("users");
  }

  async getUser(id: string) {
    return this.get(`users/${id}`);
  }
}
