import { useRouter } from "next/router"
import { useEffect, useState } from "react";
import Fetch from "../../components/Fetch";
import Header from "../../components/Header";
import Image from "next/image";
import Link from "next/link";


export default function Products() {
  const [detailItem, setDetailItem] = useState([])
  const router = useRouter();


  useEffect(() => {
    Fetch(setDetailItem)
  }, [])

  const index = detailItem.findIndex(item => item.id === Number(router.query.product));

  return <div>
    <Header />
    <div className="BackPage bg-red-600 hover:bg-red-900 text-white font-bold py-2 px-4 w-36 rounded-full">
      <Link href={"/"} >Geri dön</Link>
    </div>
    {detailItem[index] ? <div className='px-52 mt-20'>
      <div className='card box-border w-60 p-4 border-4 mr-10' key={detailItem[index].id}>
        <Image class="rounded" src={detailItem[index].image} alt="imgAlt" width="300"
          height="400" />
        <div class="mt-2  ml-16 card-detail ">
          <div>
            <div class="title text-3xl  text-slate-700 uppercase font-black tracking-wider">{detailItem[index].title}</div>
            <div class="card-price mt-16 float-right text-slate-600">{detailItem[index].price}TL</div>
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
        border-radius: 50px;
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
        }
        .title{
          font-size: 720px;
        }
      }
      .BackPage{
        float: right;
        margin: 60px 210px 15px 0;
      }
      `}</style>
  </div>
}