import Link from "next/link";


export default function Header() {
    return <nav className="flex space-x-4 bg-yellow-200 p-2 pl-48">
        {[
            ['Anasayfa', '/'],
            ['Katagoriler', '/katagori'],
            ['Hakkimizda', '/hakkinda'],
            ['İletişim', '/iletisim'],
        ].map(([title, url]) => (
            <a href={url} className="rounded-lg px-3 py-2 text-slate-700 font-medium hover:bg-slate-100 hover:text-slate-900"><Link href={url}>{title}</Link></a>
        ))}
    </nav>
}