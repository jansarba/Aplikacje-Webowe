/* eslint-disable @typescript-eslint/no-unused-vars */
import React from 'react';
import { Produkt } from './Produkt';

export const NowyKoszyk = () => {
  const produkty: string[] = ["jablko", "gruszka", "banan", "pomarancza", "arbuz"];
    return (
        <div>
            {produkty.map((nazwa) => (
                <Produkt name={nazwa} />
            ))}
        </div>
    );
}