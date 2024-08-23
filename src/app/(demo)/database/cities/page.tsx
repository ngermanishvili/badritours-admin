// src/app/database/cities/page.tsx
"use client";

import React from 'react';
import { ContentLayout } from '@/components/admin-panel/content-layout';
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Search, Building, MapPin, Flag } from "lucide-react";

const cities = [
    { id: 1, name: "Tbilisi", country: "Georgia", population: 1114000, isCapital: true },
    { id: 2, name: "Batumi", country: "Georgia", population: 169100, isCapital: false },
    { id: 3, name: "Kutaisi", country: "Georgia", population: 147600, isCapital: false },
    { id: 4, name: "Rustavi", country: "Georgia", population: 126800, isCapital: false },
    { id: 5, name: "Gori", country: "Georgia", population: 48300, isCapital: false },
];

export default function CityDatabase() {
    return (
        <ContentLayout title="City Database">
            <div className="container mx-auto px-4 py-8">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
                    <Card>
                        <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                            <CardTitle className="text-sm font-medium">Total Cities</CardTitle>
                            <Building className="h-4 w-4 text-muted-foreground" />
                        </CardHeader>
                        <CardContent>
                            <div className="text-2xl font-bold">{cities.length}</div>
                        </CardContent>
                    </Card>
                    <Card>
                        <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                            <CardTitle className="text-sm font-medium">Capital Cities</CardTitle>
                            <Flag className="h-4 w-4 text-muted-foreground" />
                        </CardHeader>
                        <CardContent>
                            <div className="text-2xl font-bold">{cities.filter(city => city.isCapital).length}</div>
                        </CardContent>
                    </Card>
                    <Card>
                        <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                            <CardTitle className="text-sm font-medium">Total Population</CardTitle>
                            <MapPin className="h-4 w-4 text-muted-foreground" />
                        </CardHeader>
                        <CardContent>
                            <div className="text-2xl font-bold">
                                {cities.reduce((acc, city) => acc + city.population, 0).toLocaleString()}
                            </div>
                        </CardContent>
                    </Card>
                </div>

                <div className="flex justify-between items-center mb-6">
                    <div className="relative">
                        <Search className="absolute left-2 top-2.5 h-4 w-4 text-muted-foreground" />
                        <Input placeholder="Search cities" className="pl-8 w-[300px]" />
                    </div>
                    <Button>Add New City</Button>
                </div>

                <Table>
                    <TableHeader>
                        <TableRow>
                            <TableHead>City Name</TableHead>
                            <TableHead>Country</TableHead>
                            <TableHead>Population</TableHead>
                            <TableHead>Capital</TableHead>
                            <TableHead>Actions</TableHead>
                        </TableRow>
                    </TableHeader>
                    <TableBody>
                        {cities.map((city) => (
                            <TableRow key={city.id}>
                                <TableCell>{city.name}</TableCell>
                                <TableCell>{city.country}</TableCell>
                                <TableCell>{city.population.toLocaleString()}</TableCell>
                                <TableCell>{city.isCapital ? 'Yes' : 'No'}</TableCell>
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