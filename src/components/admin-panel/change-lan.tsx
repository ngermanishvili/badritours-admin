"use client";

import React from 'react';

const languages = [
    { value: "en", label: "🇬🇧 English" },
    { value: "ar", label: "🇸🇦 العربية" }
];

export function LanguageSelector() {
    const [selectedLanguage, setSelectedLanguage] = React.useState(languages[0].value);

    const handleLanguageChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
        setSelectedLanguage(event.target.value);
    };

    return (
        <select
            value={selectedLanguage}
            onChange={handleLanguageChange}
            className="border border-gray-300 rounded-md px-2 py-1 bg-white dark:bg-gray-800 dark:border-gray-700"
        >
            {languages.map((lang) => (
                <option key={lang.value} value={lang.value}>
                    {lang.label}
                </option>
            ))}
        </select>
    );
}