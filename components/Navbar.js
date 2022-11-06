import Link from "next/link";


export default function Navbar() {
    return <nav className="flex space-x-4 bg-yellow-200 p-2 pl-48">
        {[
            ['Anasayfa', '/'],
            ['Kategoriler', '/kategori'],
            ['Hakkimizda', '/hakkinda'],
            ['İletişim', '/iletisim'],
        ].map(([title, url], i) => (
        <Link key={i}  href={url} className="rounded-lg px-3 py-2 text-slate-700 font-medium hover:bg-slate-100 hover:text-slate-900">{title}</Link>
        ))}

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
      }`}
        </style>
    </nav>
}