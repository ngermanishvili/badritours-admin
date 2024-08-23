// src/app/offers/active/page.tsx
import React from 'react';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { ContentLayout } from '@/components/admin-panel/content-layout';


// This would typically come from an API or database
const mockOffers = [
    { id: 1, title: "Georgia Adventure Tour", pax: 4, price: 1200, currency: "USD / EGP / GEL", status: "Active" },
    { id: 2, title: "Tbilisi City Tour", pax: 2, price: 150, currency: "USD / EGP / GEL", status: "Pending" },
    { id: 3, title: "Wine Tasting in Kakheti", pax: 6, price: 300, currency: "USD / EGP / GEL", status: "Active" },
    { id: 4, title: "Hiking in Kazbegi", pax: 3, price: 250, currency: "USD / EGP / GEL", status: "Active" },
    { id: 5, title: "Rafting in Rioni River", pax: 8, price: 200, currency: "USD / EGP / GEL", status: "Pending" },
    { id: 6, title: "Paragliding in Gudauri", pax: 1, price: 100, currency: "USD / EGP / GEL", status: "Active" },
    { id: 7, title: "Cycling in Borjomi", pax: 2, price: 50, currency: "USD / EGP / GEL", status: "Active" },
    { id: 8, title: "Skiing in Bakuriani", pax: 4, price: 300, currency: "USD / EGP / GEL", status: "Pending" },
    // Add more mock offers as needed
];

export default function ActiveOffers() {
    return (
        <ContentLayout title="Active Offers">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {mockOffers.map((offer) => (
                    <Card key={offer.id} className="w-full">
                        <CardHeader>
                            <Badge className="mt-2 w-full" variant={offer.status === "Active" ? "destructive" : "secondary"}>
                                {offer.status}
                            </Badge>
                            <CardTitle>{offer.title}</CardTitle>
                            <CardDescription>For {offer.pax} people</CardDescription>
                        </CardHeader>
                        <CardContent>
                            <p className="text-2xl font-bold">{offer.price} {offer.currency}</p>

                        </CardContent>
                        <CardFooter className="flex justify-start flex-col w-full gap-4">
                            <Button className='bg-lime-400 w-full' variant="outline">Active Offer (DEMO)</Button>
                            <Button className='bg-red-400 w-full' variant="outline">Deactive Offer (DEMO)</Button>
                            <Button className='w-full'> View & Edit Details (DEMO)</Button>
                        </CardFooter>

                    </Card>
                ))}
            </div>
        </ContentLayout>

    );
}