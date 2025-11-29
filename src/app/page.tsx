'use client';

import Map from '@/components/Map';
import useBreweriesStore from '@/store/breweryStore';
import Link from 'next/link';
import { useEffect } from 'react';

export default function BreweryPage() {
    const breweries = useBreweriesStore((state) => state.breweries);
    const fetchDataBreweries = useBreweriesStore((state) => state.fetchDataBreweries);

    useEffect(() => {
        fetchDataBreweries();
    }, [fetchDataBreweries]);

    return (
        <>
            <Map latitude={35.25738891} longitude={-97.46818222} />
            {breweries.map((item) => (
                <Link key={item.id} href={`/brewery/${item.id}`}>
                    <div>{item.name}</div>
                </Link>
            ))}
        </>
    );
}
