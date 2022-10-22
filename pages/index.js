import Head from 'next/head'
import Link from 'next/link'
import Image from 'next/image'
import { useEffect, useState } from 'react'
import styles from "/css/Home.module.css"

export default function Home() {
  const [products, setProducts]= useState();

  useEffect(()=> {
    fetch("https://fakestoreapi.com/products").then(res => res.json()).then(res => setProducts(res))
    console.log(products)
  },[])
  return (
    <div>
      <Head>
        <title>E commerce</title>
      </Head>

          <nav className="flex space-x-4 bg-yellow-200 p-2 pl-48">
              {[
                ['Anasayfa', '/'],
                ['Katagoriler', '/katagori'],
                ['Hakkimizda', '/hakkinda'],
                ['İletişim', '/iletisim'],
              ].map(([title, url]) => (
                <a href={url} className="rounded-lg px-3 py-2 text-slate-700 font-medium hover:bg-slate-100 hover:text-slate-900"><Link href={url}>{title}</Link></a>
              ))}
            </nav>
      <div className='px-52 mt-16'>
      {products && products.map((item) => {
        return (
          <>
          <div className='card'>
    <img class="rounded" src={item.image} alt="imgAlt" width="200" height="200"/>
    <div class="mt-2">
      <div>
        <div class="text-xs text-slate-600 uppercase font-bold tracking-wider">{item.title}</div>
        <div class="font-bold text-slate-700 leading-snug">
          <Link href="url" class="hover:underline">Ürün Detay</Link>
        </div>
        <div class="mt-2 text-sm text-slate-600">{item.price}</div>
      </div>
    </div>
  </div>
          </>
        )
      } )}

  
      </div>
      <style jsx>{`
      .navbar{
        padding:5px;
        background-color: #C8DBBE;
          ul{
            list-style: none;
            li{
              display: inline;
              margin-left: 45px;
            }
          }
      }
      .card{
        display: inline-block;
        padding: 15px;
        witdh: 300px;
        height: 400px;
        border: 1px solid red;
        img{
          width: 200px;
        height: 250px;
        }
        .text-xs{
          max-witdh: 20px;
        }
      }
      `}</style>
      
    </div>
  )
}
