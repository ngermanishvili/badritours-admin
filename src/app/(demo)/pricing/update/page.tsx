// src/app/pricing/update/page.tsx
"use client";

import React from 'react';
import { ContentLayout } from '@/components/admin-panel/content-layout';
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Button } from "@/components/ui/button";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";

export default function UpdatePrices() {
    return (
        <ContentLayout title="Update Prices">
            <div className="container mx-auto px-4 py-8">
                <Card className="w-full max-w-2xl mx-auto">
                    <CardHeader>
                        <CardTitle>Update Service Prices</CardTitle>
                    </CardHeader>
                    <CardContent>
                        <form className="space-y-6">
                            <div className="space-y-2">
                                <Label htmlFor="service">Select Service</Label>
                                <Select>
                                    <SelectTrigger id="service">
                                        <SelectValue placeholder="Choose a service" />
                                    </SelectTrigger>
                                    <SelectContent>
                                        <SelectItem value="city-tour">City Tour</SelectItem>
                                        <SelectItem value="wine-tasting">Wine Tasting Tour</SelectItem>
                                        <SelectItem value="mountain-expedition">Mountain Expedition</SelectItem>
                                        <SelectItem value="beach-relaxation">Beach Relaxation</SelectItem>
                                        <SelectItem value="historical-sites">Historical Sites Tour</SelectItem>
                                    </SelectContent>
                                </Select>
                            </div>

                            <div className="space-y-2">
                                <Label htmlFor="basePrice">Base Price</Label>
                                <Input id="basePrice" type="number" placeholder="Enter base price" />
                            </div>

                            <div className="space-y-2">
                                <Label htmlFor="pricePerPerson">Price Per Person</Label>
                                <Input id="pricePerPerson" type="number" placeholder="Enter price per person" />
                            </div>

                            <div className="space-y-2">
                                <Label htmlFor="currency">Currency</Label>
                                <Select>
                                    <SelectTrigger id="currency">
                                        <SelectValue placeholder="Select currency" />
                                    </SelectTrigger>
                                    <SelectContent>
                                        <SelectItem value="USD">USD</SelectItem>
                                        <SelectItem value="EUR">EUR</SelectItem>
                                        <SelectItem value="GEL">GEL</SelectItem>
                                    </SelectContent>
                                </Select>
                            </div>

                            <div className="space-y-2">
                                <Label htmlFor="effectiveDate">Effective Date</Label>
                                <Input id="effectiveDate" type="date" />
                            </div>

                            <div className="space-y-2">
                                <Label htmlFor="notes">Additional Notes</Label>
                                <textarea
                                    id="notes"
                                    className="w-full h-24 px-3 py-2 text-gray-700 border rounded-lg focus:outline-none"
                                    placeholder="Enter any additional notes or comments"
                                ></textarea>
                            </div>

                            <Button type="submit" className="w-full">Update Prices</Button>
                        </form>
                    </CardContent>
                </Card>
            </div>
        </ContentLayout>
    );
}