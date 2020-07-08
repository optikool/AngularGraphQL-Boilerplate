export interface Collection {
    id: number;
    name: string;
    description: string;
    created_date: Date;
    thumbnail: UploadFile;
    cagetory: Category;
    gallery: Array<UploadFile>
}

export interface Category {
    id: number;
    name: string;
    description: string;
    thumbnail: UploadFile;
    collections: Array<Collection>;
}

export interface UploadFile {
    id: number;
    name: string;
    hash: string;
    ext: string;
    url: string;
}

export interface CollectionResponse {
    data: CollectionPayload;
}

export interface CollectionPayload {
    collections: Array<Collection>;
}
