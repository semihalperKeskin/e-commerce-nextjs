import { useRouter } from "next/router"
import { useContext, useState } from "react";
import ContextApp from "../../components/AppContext";
import Header from "../../components/header";


export default function Products(){
    const router = useRouter();
    const context = useContext(ContextApp);


    return <div>
        <Header/>
        {context.products.map((item)=>  item.id === Number(router.query.product) ? 
        <div className='card box-border w-60 p-4 border-4 mr-10'>
                <img class="rounded" src={item.image} alt="imgAlt" />
                <div class="mt-2 card-detail">
                  <div>
                    <div class="text-sm text-slate-600 uppercase font-black tracking-wider">{item.title}</div>
                    <div class="font-bold text-slate-700 leading-snug">
                    </div>
                    <div class="card-price text-slate-600">{item.price}</div>
                  </div>
                </div>
              </div> : <div></div>
            )}
    </div>
}