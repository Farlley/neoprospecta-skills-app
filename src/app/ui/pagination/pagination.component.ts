import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-pagination',
  templateUrl: './pagination.component.html',
  styleUrls: ['./pagination.component.scss']
})
export class PaginationComponent implements OnInit {

  @Input() data: any[];
  @Input() limit: number;
  @Output() pageChange = new EventEmitter<{
    currentPage: number,
    start: number,
    end: number
  }>();
  @Output() start = new EventEmitter<number>();
  @Output() end = new EventEmitter<number>();

  currentPage: number = 1
  pageLength: number = 0
  isFirst: boolean = true
  isLast: boolean = true

  constructor() { }

  ngOnInit(): void {
  }

  ngOnChanges() {
    this.setPage(1)
  }

  public nextPage(): void {
    this.setPage(this.currentPage + 1)
  }
  public previousPage(): void {
    this.setPage(this.currentPage - 1)
  }
  public setPage(page: number = 1): void {
    let pages = () => Math.ceil(this.data.length / this.limit)
    this.currentPage = page
    this.pageLength = pages()
    this.isFirst = page === 1
    this.isLast = page >= pages()

    this.pageChange.emit({
      currentPage: this.currentPage,
      start: this.limit * (page - 1),
      end: this.limit * page
    })
  }

  public isActive(page: number): boolean {
    return this.currentPage === page + 1
  }

}
