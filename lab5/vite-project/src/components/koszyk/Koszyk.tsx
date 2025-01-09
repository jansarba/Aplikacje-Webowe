/* eslint-disable @typescript-eslint/no-unused-vars */
import React from 'react';
import { Produkt } from './Produkt';

export const Koszyk = () => {
    return (
        <div>
            <Produkt name="jablko" />
            <Produkt name="gruszka" />
            <Produkt name="banan" />
            <Produkt name="pomarancza" />
            <Produkt name="arbuz" />
        </div>
    );
}