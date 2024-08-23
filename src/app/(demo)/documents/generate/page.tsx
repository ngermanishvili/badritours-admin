// src/app/documents/generate/page.tsx
"use client";

import React from 'react';
import { ContentLayout } from '@/components/admin-panel/content-layout';
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { FileText, Download } from "lucide-react";

export default function GeneratePDF() {
    return (
        <ContentLayout title="Generate PDF">
            <div className="container mx-auto px-4 py-8">
                <div className="mb-6">
                    <Select>
                        <SelectTrigger className="w-[300px]">
                            <SelectValue placeholder="Select order to generate PDF" />
                        </SelectTrigger>
                        <SelectContent>
                            <SelectItem value="order1">Order #1234 - City Tour</SelectItem>
                            <SelectItem value="order2">Order #5678 - Wine Tasting</SelectItem>
                            <SelectItem value="order3">Order #9101 - Mountain Expedition</SelectItem>
                        </SelectContent>
                    </Select>
                </div>

                <Card className="w-full max-w-4xl mx-auto bg-white shadow-lg">
                    <CardHeader className="border-b">
                        <CardTitle className="text-2xl font-bold">Order Confirmation</CardTitle>
                    </CardHeader>
                    <CardContent className="p-6">
                        <div className="space-y-4">
                            <div className="flex justify-between">
                                <span className="font-semibold">Order Number:</span>
                                <span>#1234</span>
                            </div>
                            <div className="flex justify-between">
                                <span className="font-semibold">Customer Name:</span>
                                <span>John Doe</span>
                            </div>
                            <div className="flex justify-between">
                                <span className="font-semibold">Tour:</span>
                                <span>City Tour</span>
                            </div>
                            <div className="flex justify-between">
                                <span className="font-semibold">Date:</span>
                                <span>August 30, 2023</span>
                            </div>
                            <div className="flex justify-between">
                                <span className="font-semibold">Number of Participants:</span>
                                <span>4</span>
                            </div>
                            <div className="flex justify-between">
                                <span className="font-semibold">Total Price:</span>
                                <span>$400</span>
                            </div>
                            <div className="mt-6">
                                <h3 className="font-semibold mb-2">Itinerary:</h3>
                                <ul className="list-disc list-inside">
                                    <li>9:00 AM - Pick up from hotel</li>
                                    <li>10:00 AM - Visit to Old Town</li>
                                    <li>12:00 PM - Lunch at local restaurant</li>
                                    <li>2:00 PM - Museum tour</li>
                                    <li>5:00 PM - Return to hotel</li>
                                </ul>
                            </div>
                            <div className="mt-6">
                                <p className="text-sm text-gray-600">
                                    Thank you for choosing our services. We hope you enjoy your tour!
                                </p>
                            </div>
                        </div>
                    </CardContent>
                </Card>

                <div className="mt-6 text-center">
                    <Button className="w-64">
                        <FileText className="mr-2 h-4 w-4" /> Generate PDF
                    </Button>
                </div>
            </div>
        </ContentLayout>
    );
}