// src/app/database/hotels/page.tsx
"use client";

import React from 'react';
import { ContentLayout } from '@/components/admin-panel/content-layout';
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Search, Building, Star, MapPin } from "lucide-react";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";

const hotels = [
    { id: 1, name: "Grand Hotel", city: "Tbilisi", stars: 5, rooms: 200 },
    { id: 2, name: "Seaside Resort", city: "Batumi", stars: 4, rooms: 150 },
    { id: 3, name: "Mountain View", city: "Gudauri", stars: 3, rooms: 80 },
    { id: 4, name: "City Center Inn", city: "Kutaisi", stars: 3, rooms: 60 },
    { id: 5, name: "Luxury Palace", city: "Tbilisi", stars: 5, rooms: 180 },
];

export default function HotelDatabase() {
    return (
        <ContentLayout title="Hotel Database">
            <div className="container mx-auto px-4 py-8">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
                    <Card>
                        <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                            <CardTitle className="text-sm font-medium">Total Hotels</CardTitle>
                            <Building className="h-4 w-4 text-muted-foreground" />
                        </CardHeader>
                        <CardContent>
                            <div className="text-2xl font-bold">{hotels.length}</div>
                        </CardContent>
                    </Card>
                    <Card>
                        <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                            <CardTitle className="text-sm font-medium">Average Rating</CardTitle>
                            <Star className="h-4 w-4 text-muted-foreground" />
                        </CardHeader>
                        <CardContent>
                            <div className="text-2xl font-bold">
                                {(hotels.reduce((acc, hotel) => acc + hotel.stars, 0) / hotels.length).toFixed(1)}
                            </div>
                        </CardContent>
                    </Card>
                    <Card>
                        <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                            <CardTitle className="text-sm font-medium">Total Rooms</CardTitle>
                            <MapPin className="h-4 w-4 text-muted-foreground" />
                        </CardHeader>
                        <CardContent>
                            <div className="text-2xl font-bold">
                                {hotels.reduce((acc, hotel) => acc + hotel.rooms, 0).toLocaleString()}
                            </div>
                        </CardContent>
                    </Card>
                </div>

                <div className="flex justify-between items-center mb-6">
                    <div className="flex space-x-2">
                        <div className="relative">
                            <Search className="absolute left-2 top-2.5 h-4 w-4 text-muted-foreground" />
                            <Input placeholder="Search hotels" className="pl-8 w-[300px]" />
                        </div>
                        <Select>
                            <SelectTrigger className="w-[150px]">
                                <SelectValue placeholder="Filter by stars" />
                            </SelectTrigger>
                            <SelectContent>
                                <SelectItem value="all">All Stars</SelectItem>
                                <SelectItem value="5">5 Stars</SelectItem>
                                <SelectItem value="4">4 Stars</SelectItem>
                                <SelectItem value="3">3 Stars</SelectItem>
                                <SelectItem value="2">2 Stars</SelectItem>
                                <SelectItem value="1">1 Star</SelectItem>
                            </SelectContent>
                        </Select>
                    </div>
                    <Button>Add New Hotel</Button>
                </div>

                <Table>
                    <TableHeader>
                        <TableRow>
                            <TableHead>Hotel Name</TableHead>
                            <TableHead>City</TableHead>
                            <TableHead>Stars</TableHead>
                            <TableHead>Rooms</TableHead>
                            <TableHead>Actions</TableHead>
                        </TableRow>
                    </TableHeader>
                    <TableBody>
                        {hotels.map((hotel) => (
                            <TableRow key={hotel.id}>
                                <TableCell>{hotel.name}</TableCell>
                                <TableCell>{hotel.city}</TableCell>
                                <TableCell>{hotel.stars}</TableCell>
                                <TableCell>{hotel.rooms}</TableCell>
                                <TableCell>
                                    <Button variant="outline" size="sm" className="mr-2">Edit</Button>
                                    <Button variant="outline" size="sm">Delete</Button>
                                </TableCell>
                            </TableRow>
                        ))}
                    </TableBody>
                </Table>
            </div>
        </ContentLayout>
    );
}