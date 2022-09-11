import { Button } from '@mui/material'
import { useState, useEffect } from 'react'
import { Product } from '../../app/models/product'
import ProductList from './ProductList'

export default function Catalog() {
  const [products, setProducts] = useState<Product[]>([])

  useEffect(() => {
    fetch('http://localhost:5000/api/products')
      .then((response) => response.json())
      .then((data) => setProducts(data))
  }, []) // Burada [] olunca useEffect sadece 1 kere ve component baslatildiginda calistiriliyor. (ngOnInit gibi)
  // Fakat [] eklemezsek, useEffect tekrar tekrar sonsuz sayida cagrilir

  function addProduct() {
    // setProducts([...products, { name: 'product 3', price: 300 }])
    // Asagidaki sekilde yapinca, yukaridaki ile ayni sonuca ulasiliyor fakat products yerine setProducts'a verdigimiz parametreyi kullaniyoruz
    setProducts((prevState) => [
      ...prevState,
      {
        id: prevState.length + 101,
        name: 'product 4',
        price: 400,
        brand: '',
        description: '',
        pictureUrl: '',
      },
    ])
  }
  return (
    <>
      <ProductList products={products}></ProductList>
      <Button variant='contained' onClick={addProduct}>
        Add product
      </Button>
    </>
  )
}
