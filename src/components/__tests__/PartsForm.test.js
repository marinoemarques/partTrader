import React from 'react';
import { render } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import PartsForm from "../PartsForm";

describe('PartsForm', () => {
    it('renders the lookup form', async () => {
        const { getByText } = render(
            <PartsForm />
        );
        expect(getByText('Which part number are you looking for?')).toBeInTheDocument();
    });
});
