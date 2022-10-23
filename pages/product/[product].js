import { useRouter } from "next/router"


export default function Products(){
    const router = useRouter();
    console.log(router.query.product)

    return <di>products: {router.query.product}</di>
}