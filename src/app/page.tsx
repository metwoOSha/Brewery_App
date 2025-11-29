'use client';

import Card from '@/components/Card/Card';
import useBreweriesStore from '@/store/breweryStore';
import Link from 'next/link';

export default function BreweryPage() {
    const breweries = useBreweriesStore((state) => state.breweries);

    return (
        <>
            {breweries.slice(0, 5).map((item) => (
                <Link key={item.id} href={`/brewery/${item.id}`}>
                    <div>{item.name}</div>
                </Link>
            ))}
            <Card />
        </>
    );
}
