import { Package } from '@/domains/package';
import axios from 'axios'

const client = axios.create({
  baseURL: 'http://localhost:3000/packages',
  timeout: 5000,
  headers: {
    'Content-Type': 'application/json'
  }
});

export default class ApiService {
    getPackages(packageName?: string): Promise<Package[]> {
        return client.get(`${packageName ? '?packageName=' + packageName : ''}`).then(result => result.data);
    }

    getPackage(packageId: number): Promise<Package> {
        return client.get(`/${packageId}`).then(result => result.data);
    }

    addComment(packageId: number, text: string) {
      return client.post(`/${packageId}/comments`, { text });
    }
}