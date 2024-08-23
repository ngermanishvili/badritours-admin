// src/app/vehicles/list/page.tsx
"use client";

import React from 'react';
import { ContentLayout } from '@/components/admin-panel/content-layout';
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Search, Plus } from "lucide-react";

const vehicles = [
    { id: 1, name: "Toyota Camry", type: "Sedan", year: 2021, status: "Available" },
    { id: 2, name: "Ford Explorer", type: "SUV", year: 2020, status: "In Maintenance" },
    { id: 3, name: "Mercedes-Benz Sprinter", type: "Van", year: 2022, status: "On Trip" },
    { id: 4, name: "BMW X5", type: "SUV", year: 2021, status: "Available" },
    { id: 5, name: "Hyundai Sonata", type: "Sedan", year: 2019, status: "Available" },
];

export default function VehicleList() {
    return (
        <ContentLayout title="Vehicle Management">
            <div className="container mx-auto px-4 py-8">
                <div className="flex justify-between items-center mb-6">
                    <div className="relative">
                        <Search className="absolute left-2 top-2.5 h-4 w-4 text-muted-foreground" />
                        <Input placeholder="Search vehicles" className="pl-8 w-[300px]" />
                    </div>
                    <Button>
                        <Plus className="mr-2 h-4 w-4" /> Add New Vehicle
                    </Button>
                </div>
                <Table>
                    <TableHeader>
                        <TableRow>
                            <TableHead>Name</TableHead>
                            <TableHead>Type</TableHead>
                            <TableHead>Year</TableHead>
                            <TableHead>Status</TableHead>
                            <TableHead>Actions</TableHead>
                        </TableRow>
                    </TableHeader>
                    <TableBody>
                        {vehicles.map((vehicle) => (
                            <TableRow key={vehicle.id}>
                                <TableCell>{vehicle.name}</TableCell>
                                <TableCell>{vehicle.type}</TableCell>
                                <TableCell>{vehicle.year}</TableCell>
                                <TableCell>{vehicle.status}</TableCell>
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