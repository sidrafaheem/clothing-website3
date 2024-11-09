import { type SchemaTypeDefinition } from 'sanity'
import product from './product'
import category from './category'
import Grid from './Grid'
import MainImage from './MainImage'


export const schema: { types: SchemaTypeDefinition[] } = {
  types: [product,category,MainImage,Grid],
}
