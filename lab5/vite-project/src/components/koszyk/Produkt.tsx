/* eslint-disable @typescript-eslint/no-unused-vars */
import React from 'react';

type ProduktProps = {
    name: string;
};

export const Produkt = ({ name }: ProduktProps) => {
    return (
        <div>
            {name}
        </div>
    );
};