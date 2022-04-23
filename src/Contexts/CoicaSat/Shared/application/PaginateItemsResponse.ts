export class PaginateItemsResponse {
  public items: any[];
  public totalItems: number;
  public totalPages: number;
  public currentPage: number;

  constructor(items: any[], totalItems: number, nPerPage: number, currentPage: number) {
    this.items = items;
    this.totalItems = totalItems;
    this.totalPages = Math.ceil(this.totalItems / nPerPage);
    this.currentPage = currentPage;
  }
}
