// import useBreweriesStore from '@/store/breweryStore';
import Link from 'next/link';
import cls from './Card.module.css';

// export default function Card() {
//     const breweries = useBreweriesStore((state) => state.breweries);
//     const items = breweries.slice(0, 5);

//     return (
//         <div className={cls.grid}>
//             {items.map((item, index: number) => (
//                 <div key={item.id} className={`card card-${index + 1}`}>
//                     <h3>{item.name}</h3>
//                     <p>
//                         {item.city}, {item.state_province}
//                     </p>
//                 </div>
//             ))}
//         </div>
//     );
// }

export default function Card({ id, name }) {
    return (
        <div className={cls.card}>
            <div className={cls.name}>10 Barrel Brewing Co - Bend Pub</div>
            <Link href={`/brewery/${id}`}>
                <span className={cls.more}>More details ➜</span>
            </Link>
        </div>
    );
}
