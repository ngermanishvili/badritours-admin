// src/app/reports/profit/page.tsx
"use client";

import React, { useState } from 'react';
import { ContentLayout } from '@/components/admin-panel/content-layout';
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Button } from "@/components/ui/button";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { PieChart, Pie, Cell, ResponsiveContainer, Tooltip, Legend } from 'recharts';

export default function ProfitMarginGenerator() {
    const [revenue, setRevenue] = useState('');
    const [costs, setCosts] = useState('');
    const [profitMargin, setProfitMargin] = useState<number | null>(null);

    const calculateProfitMargin = () => {
        const revenueNum = parseFloat(revenue);
        const costsNum = parseFloat(costs);
        if (isNaN(revenueNum) || isNaN(costsNum)) {
            alert('Please enter valid numbers for revenue and costs.');
            return;
        }
        const profit = revenueNum - costsNum;
        const margin = (profit / revenueNum) * 100;
        setProfitMargin(Number(margin.toFixed(2)));
    };

    const pieData = profitMargin !== null ? [
        { name: 'Profit', value: profitMargin },
        { name: 'Costs', value: 100 - profitMargin },
    ] : [];

    const COLORS = ['#0088FE', '#00C49F'];

    return (
        <ContentLayout title="Profit Margin Generator">
            <div className="container mx-auto px-4 py-8">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    <Card>
                        <CardHeader>
                            <CardTitle>Calculate Profit Margin</CardTitle>
                        </CardHeader>
                        <CardContent>
                            <form className="space-y-4">
                                <div className="space-y-2">
                                    <Label htmlFor="revenue">Revenue</Label>
                                    <Input
                                        id="revenue"
                                        type="number"
                                        placeholder="Enter total revenue"
                                        value={revenue}
                                        onChange={(e) => setRevenue(e.target.value)}
                                    />
                                </div>
                                <div className="space-y-2">
                                    <Label htmlFor="costs">Costs</Label>
                                    <Input
                                        id="costs"
                                        type="number"
                                        placeholder="Enter total costs"
                                        value={costs}
                                        onChange={(e) => setCosts(e.target.value)}
                                    />
                                </div>
                                <div className="space-y-2">
                                    <Label htmlFor="tourType">Tour Type</Label>
                                    <Select>
                                        <SelectTrigger id="tourType">
                                            <SelectValue placeholder="Select tour type" />
                                        </SelectTrigger>
                                        <SelectContent>
                                            <SelectItem value="city">City Tour</SelectItem>
                                            <SelectItem value="adventure">Adventure Tour</SelectItem>
                                            <SelectItem value="cultural">Cultural Tour</SelectItem>
                                        </SelectContent>
                                    </Select>
                                </div>
                                <Button type="button" className="w-full" onClick={calculateProfitMargin}>
                                    Calculate Profit Margin
                                </Button>
                            </form>
                        </CardContent>
                    </Card>

                    <Card>
                        <CardHeader>
                            <CardTitle>Profit Margin Analysis</CardTitle>
                        </CardHeader>
                        <CardContent>
                            {profitMargin !== null ? (
                                <>
                                    <div className="text-center mb-4">
                                        <p className="text-2xl font-bold">Profit Margin: {profitMargin}%</p>
                                    </div>
                                    <ResponsiveContainer width="100%" height={300}>
                                        <PieChart>
                                            <Pie
                                                data={pieData}
                                                cx="50%"
                                                cy="50%"
                                                labelLine={false}
                                                outerRadius={80}
                                                fill="#8884d8"
                                                dataKey="value"
                                            >
                                                {pieData.map((entry, index) => (
                                                    <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                                                ))}
                                            </Pie>
                                            <Tooltip />
                                            <Legend />
                                        </PieChart>
                                    </ResponsiveContainer>
                                </>
                            ) : (
                                <p className="text-center">Enter revenue and costs to see the profit margin analysis.</p>
                            )}
                        </CardContent>
                    </Card>
                </div>
            </div>
        </ContentLayout>
    );
}