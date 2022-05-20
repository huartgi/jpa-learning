/** This class contains all information relative to Pagination for a search page */
export declare class Pagination {
    /** The current page of the results */
    currentPage: number;
    /** Maximum number of results displayed per page */
    pageSize: number;
    /** Total number of results matching the criteria in the database */
    totalResult: number;

    /** Returns the index of the first row we want from the database */
    getFirstResult(): number;
}
