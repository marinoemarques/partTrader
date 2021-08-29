import fetchMock from 'fetch-mock';
import {useExclusions} from "../APIs";

describe('API', () => {

    beforeEach(() => {
        fetchMock.reset();
    });

    describe('useExclusions', () => {
        it('fetches the id from Exclusions list', async () => {
            const response = {
                mock: 'response',
            };

            fetchMock.get('Exclusions.json', response);

            const returned = useExclusions();
            expect(await returned()).toEqual(response);
        });
    });
})