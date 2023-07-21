import { ReactNode } from "react"

export type ChildrenType = {
     children: ReactNode
}

export type ProductType = {
     id: number,
     image: string,
     title: string,
     rating: {
          rate: number,
          count: number
     },
     rate: number,
     price: number,
     category: string,
     description: string
     // custom property for working with cart
     cartQuantity: number,
}

export type GlobalContextType = {
     data: ProductType[] | undefined,
     isLoading: boolean,
     error: unknown,
     addToCart: (productToAdd: ProductType) => void,
     productsInCart: ProductType[]
}