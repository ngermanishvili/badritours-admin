"use client";

import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { ContentLayout } from '@/components/admin-panel/content-layout';

export default function CreateOffer() {
    return (
        <ContentLayout title="Create Offer">
            <div className="">
                <Card className="w-full mx-auto">
                    <CardHeader>
                        <CardTitle>Offer Details</CardTitle>
                    </CardHeader>
                    <CardContent>
                        <form className="space-y-6">
                            <div className="space-y-2">
                                <Label htmlFor="title">Offer Title</Label>
                                <Input id="title" placeholder="Enter offer title" />
                            </div>

                            <div className="space-y-2">
                                <Label htmlFor="description">Description</Label>
                                <Textarea id="description" placeholder="Describe the offer" />
                            </div>

                            <div className="grid grid-cols-2 gap-4">
                                <div className="space-y-2">
                                    <Label htmlFor="pax">Number of People (PAX)</Label>
                                    <Input id="pax" type="number" min="1" placeholder="Enter PAX" />
                                </div>
                                <div className="space-y-2">
                                    <Label htmlFor="duration">Duration (Days)</Label>
                                    <Input id="duration" type="number" min="1" placeholder="Enter duration" />
                                </div>
                            </div>

                            <div className="grid grid-cols-2 gap-4">
                                <div className="space-y-2">
                                    <Label htmlFor="startDate">Start Date</Label>
                                    <Input id="startDate" type="date" />
                                </div>
                                <div className="space-y-2">
                                    <Label htmlFor="endDate">End Date</Label>
                                    <Input id="endDate" type="date" />
                                </div>
                            </div>

                            <div className="space-y-2">
                                <Label htmlFor="city">City</Label>
                                <Select>
                                    <SelectTrigger id="city">
                                        <SelectValue placeholder="Select city" />
                                    </SelectTrigger>
                                    <SelectContent>
                                        <SelectItem value="tbilisi">Tbilisi</SelectItem>
                                        <SelectItem value="batumi">Batumi</SelectItem>
                                        <SelectItem value="kutaisi">Kutaisi</SelectItem>
                                    </SelectContent>
                                </Select>
                            </div>

                            <div className="space-y-2">
                                <Label htmlFor="hotel">Hotel</Label>
                                <Select>
                                    <SelectTrigger id="hotel">
                                        <SelectValue placeholder="Select hotel" />
                                    </SelectTrigger>
                                    <SelectContent>
                                        <SelectItem value="hotel1">Hotel A (5 stars)</SelectItem>
                                        <SelectItem value="hotel2">Hotel B (4 stars)</SelectItem>
                                        <SelectItem value="hotel3">Hotel C (3 stars)</SelectItem>
                                    </SelectContent>
                                </Select>
                            </div>

                            <div className="space-y-2">
                                <Label htmlFor="vehicle">Vehicle</Label>
                                <Select>
                                    <SelectTrigger id="vehicle">
                                        <SelectValue placeholder="Select vehicle" />
                                    </SelectTrigger>
                                    <SelectContent>
                                        <SelectItem value="sedan">Sedan</SelectItem>
                                        <SelectItem value="suv">SUV</SelectItem>
                                        <SelectItem value="van">Van</SelectItem>
                                    </SelectContent>
                                </Select>
                            </div>

                            <div className="grid grid-cols-2 gap-4">
                                <div className="space-y-2">
                                    <Label htmlFor="price">Price</Label>
                                    <Input id="price" type="number" min="0" step="0.01" placeholder="Enter price" />
                                </div>
                                <div className="space-y-2">
                                    <Label htmlFor="currency">Currency</Label>
                                    <Select>
                                        <SelectTrigger id="currency">
                                            <SelectValue placeholder="Select currency" />
                                        </SelectTrigger>
                                        <SelectContent>
                                            <SelectItem value="USD">USD</SelectItem>
                                            <SelectItem value="GEL">GEL</SelectItem>
                                            <SelectItem value="EUR">EUR</SelectItem>
                                        </SelectContent>
                                    </Select>
                                </div>
                            </div>

                            <Button type="submit" className="w-full">Create Offer</Button>
                        </form>
                    </CardContent>
                </Card>
            </div>
        </ContentLayout>
    );
}