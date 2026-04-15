import { type SchemaTypeDefinition } from 'sanity'
import { galleryType } from './gallery'
import { newsType } from './news'
import { instagramType } from './instagram'

export const schemaTypes: SchemaTypeDefinition[] = [galleryType, newsType, instagramType]
