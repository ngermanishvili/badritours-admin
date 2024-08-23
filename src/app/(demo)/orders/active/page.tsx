// src/app/orders/active/page.tsx
"use client";

import React from 'react';
import { ContentLayout } from '@/components/admin-panel/content-layout';
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Search, ClipboardList, DollarSign, Users } from "lucide-react";

const activeOrders = [
    { id: 1, customer: "John Doe", tour: "City Tour", date: "2023-08-30", participants: 4, totalPrice: 400, status: "Confirmed" },
    { id: 2, customer: "Jane Smith", tour: "Wine Tasting", date: "2023-09-05", participants: 2, totalPrice: 300, status: "Pending" },
    { id: 3, customer: "Bob Johnson", tour: "Mountain Expedition", date: "2023-09-10", participants: 6, totalPrice: 1200, status: "Confirmed" },
];

export default function ActiveOrders() {
    return (
        <ContentLayout title="Active Orders">
            <div className="container mx-auto px-4 py-8">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
                    <Card>
                        <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                            <CardTitle className="text-sm font-medium">Total Active Orders</CardTitle>
                            <ClipboardList className="h-4 w-4 text-muted-foreground" />
                        </CardHeader>
                        <CardContent>
                            <div className="text-2xl font-bold">{activeOrders.length}</div>
                        </CardContent>
                    </Card>
                    <Card>
                        <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                            <CardTitle className="text-sm font-medium">Total Revenue</CardTitle>
                            <DollarSign className="h-4 w-4 text-muted-foreground" />
                        </CardHeader>
                        <CardContent>
                            <div className="text-2xl font-bold">
                                ${activeOrders.reduce((sum, order) => sum + order.totalPrice, 0)}
                            </div>
                        </CardContent>
                    </Card>
                    <Card>
                        <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                            <CardTitle className="text-sm font-medium">Total Participants</CardTitle>
                            <Users className="h-4 w-4 text-muted-foreground" />
                        </CardHeader>
                        <CardContent>
                            <div className="text-2xl font-bold">
                                {activeOrders.reduce((sum, order) => sum + order.participants, 0)}
                            </div>
                        </CardContent>
                    </Card>
                </div>

                <div className="flex justify-between items-center mb-6">
                    <div className="relative">
                        <Search className="absolute left-2 top-2.5 h-4 w-4 text-muted-foreground" />
                        <Input placeholder="Search orders" className="pl-8 w-[300px]" />
                    </div>
                    <Button>Add New Order</Button>
                </div>

                <Table>
                    <TableHeader>
                        <TableRow>
                            <TableHead>Order ID</TableHead>
                            <TableHead>Customer</TableHead>
                            <TableHead>Tour</TableHead>
                            <TableHead>Date</TableHead>
                            <TableHead>Participants</TableHead>
                            <TableHead>Total Price</TableHead>
                            <TableHead>Status</TableHead>
                            <TableHead>Actions</TableHead>
                        </TableRow>
                    </TableHeader>
                    <TableBody>
                        {activeOrders.map((order) => (
                            <TableRow key={order.id}>
                                <TableCell>#{order.id}</TableCell>
                                <TableCell>{order.customer}</TableCell>
                                <TableCell>{order.tour}</TableCell>
                                <TableCell>{order.date}</TableCell>
                                <TableCell>{order.participants}</TableCell>
                                <TableCell>${order.totalPrice}</TableCell>
                                <TableCell>{order.status}</TableCell>
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