import config from "../config/config";
import { Client, ID, Storage } from "appwrite";

export class StorageService {
  client = new Client();
  storage;

  constructor() {
    this.client
      .setEndpoint(config.appwriteUrl)
      .setProject(config.appwriteProjectId);
    this.storage = new Storage(this.client);
  }

  async uploadFile(file) {
    try {
      return await this.storage.createFile(
        config.appwriteBucketId,
        ID.unique,
        file
      );
    } catch (error) {
      console.log(error);
      return false;
    }
  }

  async deleteFile(fileId) {
    try {
      await this.storage.deleteFile(config.appwriteBucketId, fileId);
    } catch (error) {
      console.log(error);
      return false;
    }
  }

  async getFilePreview(fileId) {
    try {
      return await this.storage.getFilePreview(config.appwriteBucketId, fileId);
    } catch (error) {
      console.log(error);
      return false;
    }
  }
}

const storageService = new StorageService();

export default storageService;
