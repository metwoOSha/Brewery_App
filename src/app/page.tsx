'use client';

import Card from '@/components/Card/Card';
import useBreweriesStore from '@/store/breweryStore';
// import Link from 'next/link';

import cls from './page.module.css';

export default function BreweryPage() {
    const breweries = useBreweriesStore((state) => state.breweries);

    return (
        <>
            <div className="conteiner">
                <div className={cls.grid}>
                    {breweries.slice(0, 5).map((item) => (
                        <div key={item.id}>
                            {/* <Link key={item.id} href={`/brewery/${item.id}`}>
                        <div>{item.name}</div>
                    </Link> */}
                                <Card
                                    id={item.id}
                                    name={item.name}
                                    country={item.country}
                                    city={item.city}
                                />
                        </div>
                    ))}
                </div>
            </div>
        </>
    );
}
