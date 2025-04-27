import { useSelector, useDispatch } from "react-redux"
import { productsApi } from "./redux/actions/Action";
import { useEffect } from "react";

function App() {
  const dispatch = useDispatch()

  useEffect(()=>{
    dispatch(productsApi())
  },[dispatch])

  const { products } = useSelector((state) => state.product)
  console.log(products);

  return (
    <>
      <p className="font-light text-fuchsia-800">eBay</p>
    </>
  )
}

export default App
