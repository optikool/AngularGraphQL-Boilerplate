import { 
    Collection, 
    Category
} from '../../interfaces/collection';

export default class GalleryState {
    Collection: Collection;
    Collections: Array<Collection>;
    LatestCollectionLimit: number;
    LatestCollections: Array<Collection>;
    RandomCollections: Array<Collection>;
    CollectionCategory: Category;
    CollectionError: Error
}

export const initialState = (): GalleryState => {
    return {
        Collection: {
            id: null,
            name: '',
            description: '',
            created_date: null,
            thumbnail: {
                id: null,
                name: '',
                hash: '',
                ext: '',
                url: ''
            },
            cagetory: {
                id: null,
                name: '',
                description: '',
                thumbnail: {
                    id: null,
                    name: '',
                    hash: '',
                    ext: '',
                    url: ''
                },
                collections: []
            },
            gallery: []
            
        },
        Collections: Array<Collection>(),
        LatestCollectionLimit: 10,
        LatestCollections: Array<Collection>(),
        RandomCollections: Array<Collection>(),
        CollectionCategory: {
            id: null,
            name: '',
            description: '',
            thumbnail: {
                id: null,
                name: '',
                hash: '',
                ext: '',
                url: ''
            },
            collections: Array<Collection>()
        },
        CollectionError: null
    };
};