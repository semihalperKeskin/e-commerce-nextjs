import Head from 'next/head'
import Link from 'next/link'
import Image from 'next/image'
import { useContext, useEffect, useState } from 'react'
import styles from "/css/Home.module.css"
import Header from '../components/header'
import ContextApp from '../components/AppContext'

export default function Home() {
  
  const context = useContext(ContextApp);
  

 

  return (
    <>
      <Head>
        <title>E commerce</title>
      </Head>
      <Header/>

      <div className='px-52 mt-20'>
        {context.products && context.products.map((item, i) => {
          return (
            <div key={i}>
              <div className='card box-border w-60 p-4 border-4 mr-10'>
                <img class="rounded" src={item.image} alt="imgAlt" />
                <div class="mt-2 card-detail">
                  <div>
                    <div class="text-sm text-slate-600 uppercase font-black tracking-wider">{item.title}</div>
                    <div class="font-bold text-slate-700 leading-snug">
                      <Link href={`/product/${item.id}`} class="hover:underline">Ürün Detay</Link>
                    </div>
                    <div class="card-price text-slate-600">{item.price}</div>
                  </div>
                </div>
              </div>
            </div>
          )
        })}


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
        display: flex;
        border: 1px solid red;
        word-wrap:break-word;
        height: 500px;
        float: left;
        margin-bottom: 60px;
        border-radius: 15px;
        flex-wrap: wrap;
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
          width: 250px;
        height: 250px;
        }
        .text-xs{
          max-witdh: 20px;
        }
        .card-detail{
        .card-price{
        }
      }
      }
      `}</style>

    </>
  )
}
