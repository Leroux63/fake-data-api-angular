import {ProductService} from "../services/product/product.service";

export interface ProductHttp{
  id: number
  title: string
  price: number
  category: string
  description: string
  image: string
}


export interface Product{
  id: number
  title: string
  price: number
  category: string
  description: string
  image: string
}

export namespace Product{
  export function mapperProductHttpToProduct(productHttp: ProductHttp):Product{
    return{
      id: productHttp.id,
      title: productHttp.title,
      price: productHttp.price,
      category: productHttp.category,
      description: productHttp.description,
      image: productHttp.image
    }
  }
}
