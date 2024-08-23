// src/app/calculations/page.tsx
"use client";

import React, { useState } from 'react';
import { ContentLayout } from '@/components/admin-panel/content-layout';
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Button } from "@/components/ui/button";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";

export default function CalculationSystem() {
    const [result, setResult] = useState<number | null>(null);

    const handleCalculate = () => {
        // This is a placeholder calculation. In a real app, you'd use actual inputs and more complex logic.
        const calculatedResult = Math.random() * 1000;
        setResult(Number(calculatedResult.toFixed(2)));
    };

    return (
        <ContentLayout title="Calculation System">
            <div className="container mx-auto px-4 py-8">
                <Card className="w-full max-w-2xl mx-auto">
                    <CardHeader>
                        <CardTitle>Tour Price Calculator</CardTitle>
                    </CardHeader>
                    <CardContent>
                        <form className="space-y-4">
                            <div className="space-y-2">
                                <Label htmlFor="tourType">Tour Type</Label>
                                <Select>
                                    <SelectTrigger id="tourType">
                                        <SelectValue placeholder="Select tour type" />
                                    </SelectTrigger>
                                    <SelectContent>
                                        <SelectItem value="city">City Tour</SelectItem>
                                        <SelectItem value="wine">Wine Tasting</SelectItem>
                                        <SelectItem value="mountain">Mountain Expedition</SelectItem>
                                    </SelectContent>
                                </Select>
                            </div>

                            <div className="space-y-2">
                                <Label htmlFor="participants">Number of Participants</Label>
                                <Input id="participants" type="number" placeholder="Enter number of participants" />
                            </div>

                            <div className="space-y-2">
                                <Label htmlFor="duration">Duration (days)</Label>
                                <Input id="duration" type="number" placeholder="Enter duration in days" />
                            </div>

                            <div className="space-y-2">
                                <Label htmlFor="season">Season</Label>
                                <Select>
                                    <SelectTrigger id="season">
                                        <SelectValue placeholder="Select season" />
                                    </SelectTrigger>
                                    <SelectContent>
                                        <SelectItem value="spring">Spring</SelectItem>
                                        <SelectItem value="summer">Summer</SelectItem>
                                        <SelectItem value="autumn">Autumn</SelectItem>
                                        <SelectItem value="winter">Winter</SelectItem>
                                    </SelectContent>
                                </Select>
                            </div>

                            <Button type="button" className="w-full" onClick={handleCalculate}>Calculate Price</Button>
                        </form>

                        {result !== null && (
                            <div className="mt-6 p-4 bg-gray-100 rounded-md">
                                <h3 className="font-semibold mb-2">Calculated Price:</h3>
                                <p className="text-2xl font-bold">${result}</p>
                            </div>
                        )}
                    </CardContent>
                </Card>
            </div>
        </ContentLayout>
    );
}   