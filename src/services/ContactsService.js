import HttpClient from './utils/HttpClient';

const baseURL = 'http://localhost:3001';

class ContactsService {
  constructor() {
    this.HttpClient = new HttpClient(baseURL);
  }

  async listContacts(orderBy = 'asc') {
    return this.HttpClient.get(`/contacts?orderBy=${orderBy}`);
  }

  async createContact(contact) {
    return this.HttpClient.post('/contacts', {
      body: contact,
    });
  }
}

export default new ContactsService();
