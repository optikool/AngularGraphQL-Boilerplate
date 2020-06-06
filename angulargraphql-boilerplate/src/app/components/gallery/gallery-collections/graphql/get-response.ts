import gql from 'graphql-tag';

export const galleryCollections = gql`
    query collections($limit: Int) {
        collections(limit: $limit) {
            id
            name
            description
            created_date
            thumbnail {
                name
                url
                id
                hash
                ext
            }
            cagetory {
                name
                description
                thumbnail {
                    name
                    url
                    id
                    hash
                    ext
                }
            }
            gallery {
                name
                url
                id
                hash
                ext
            }
        }
    }
`;