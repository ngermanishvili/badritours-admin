// src/app/pricing/list/page.tsx
"use client";

import React from 'react';
import { ContentLayout } from '@/components/admin-panel/content-layout';
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Search, DollarSign, Users, Calendar } from "lucide-react";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";

const priceList = [
    { id: 1, service: "City Tour", basePrice: 50, pricePerPerson: 20, currency: "USD" },
    { id: 2, service: "Wine Tasting Tour", basePrice: 100, pricePerPerson: 40, currency: "USD" },
    { id: 3, service: "Mountain Expedition", basePrice: 200, pricePerPerson: 80, currency: "USD" },
    { id: 4, service: "Beach Relaxation", basePrice: 80, pricePerPerson: 30, currency: "USD" },
    { id: 5, service: "Historical Sites Tour", basePrice: 120, pricePerPerson: 50, currency: "USD" },
];

export default function PriceList() {
    return (
        <ContentLayout title="Price List">
            <div className="container mx-auto px-4 py-8">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
                    <Card>
                        <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                            <CardTitle className="text-sm font-medium">Total Services</CardTitle>
                            <DollarSign className="h-4 w-4 text-muted-foreground" />
                        </CardHeader>
                        <CardContent>
                            <div className="text-2xl font-bold">{priceList.length}</div>
                        </CardContent>
                    </Card>
                    <Card>
                        <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                            <CardTitle className="text-sm font-medium">Average Base Price</CardTitle>
                            <Users className="h-4 w-4 text-muted-foreground" />
                        </CardHeader>
                        <CardContent>
                            <div className="text-2xl font-bold">
                                ${(priceList.reduce((acc, item) => acc + item.basePrice, 0) / priceList.length).toFixed(2)}
                            </div>
                        </CardContent>
                    </Card>
                    <Card>
                        <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                            <CardTitle className="text-sm font-medium">Last Updated</CardTitle>
                            <Calendar className="h-4 w-4 text-muted-foreground" />
                        </CardHeader>
                        <CardContent>
                            <div className="text-2xl font-bold">2023-08-25</div>
                        </CardContent>
                    </Card>
                </div>

                <div className="flex justify-between items-center mb-6">
                    <div className="flex space-x-2">
                        <div className="relative">
                            <Search className="absolute left-2 top-2.5 h-4 w-4 text-muted-foreground" />
                            <Input placeholder="Search services" className="pl-8 w-[300px]" />
                        </div>
                        <Select>
                            <SelectTrigger className="w-[150px]">
                                <SelectValue placeholder="Currency" />
                            </SelectTrigger>
                            <SelectContent>
                                <SelectItem value="USD">USD</SelectItem>
                                <SelectItem value="EUR">EUR</SelectItem>
                                <SelectItem value="GEL">GEL</SelectItem>
                            </SelectContent>
                        </Select>
                    </div>
                    <Button>Add New Service</Button>
                </div>

                <Table>
                    <TableHeader>
                        <TableRow>
                            <TableHead>Service</TableHead>
                            <TableHead>Base Price</TableHead>
                            <TableHead>Price Per Person</TableHead>
                            <TableHead>Currency</TableHead>
                            <TableHead>Actions</TableHead>
                        </TableRow>
                    </TableHeader>
                    <TableBody>
                        {priceList.map((item) => (
                            <TableRow key={item.id}>
                                <TableCell>{item.service}</TableCell>
                                <TableCell>${item.basePrice}</TableCell>
                                <TableCell>${item.pricePerPerson}</TableCell>
                                <TableCell>{item.currency}</TableCell>
                                <TableCell>
                                    <Button variant="outline" size="sm" className="mr-2">Edit</Button>
                                    <Button variant="outline" size="sm">Details</Button>
                                </TableCell>
                            </TableRow>
                        ))}
                    </TableBody>
                </Table>
            </div>
        </ContentLayout>
    );
}