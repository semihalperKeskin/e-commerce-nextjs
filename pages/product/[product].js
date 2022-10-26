import { useRouter } from "next/router"
import { useContext, useEffect, useState } from "react";
import ContextApp from "../../components/ContextApp";
import Fetch from "../../components/Fetch";
import Header from "../../components/Header";


export default function Products() {
    const [detailItem, setDetailItem] = useState([])
    const router = useRouter();


    useEffect(() => {
        Fetch(setDetailItem)
    }, [])

    const index = detailItem.findIndex(item => item.id === Number(router.query.product));

    return <div>
        <Header />
        {detailItem[index] ? <div className='px-52 mt-20'>
            <div className='card box-border w-60 p-4 border-4 mr-10'>
                <img class="rounded" src={detailItem[index].image} alt="imgAlt" />
                <div class="mt-2 card-detail">
                    <div>
                        <div class="description text-3xl text-slate-700 uppercase font-black tracking-wider">{detailItem[index].title}</div>
                        <div class="card-price text-slate-600">{detailItem[index].price}TL</div>
                    </div>
                </div>
            </div>
        </div> : <div></div>}



        <style jsx>{`
      .card{
        display: flex;
        width: 100%;
        padding: 150px;
        border: 1px solid red;
        :hover{
          border-top-left-radius: 10px;
          border-bottom-left-radius: 10px;
          animation-name: example;
          animation-duration: 0.25s;
          border-left: 8px solid red;
          box-shadow: 0 14px 28px rgba(0,0,0,0.25), 0 10px 10px rgba(0,0,0,0.22);
        }
        img{
          display: flex;
          width: 300px;
        height: 400px;
        }
        .description{
          font-size: 720px;
        }
      }
      `}</style>
    </div>
}