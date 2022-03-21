import axios from 'axios';
import { Aldi } from '../src';

jest.mock('axios');

axios.create = jest.fn().mockReturnThis();
const requestMock = axios.request as jest.Mock;

describe('Aldi client', () => {
    it('should create a client object', () => {
        const client = new Aldi();
        expect(client).toBeDefined();
    });

    it('should create a client with provided options', () => {
        const client = new Aldi({
            apiVersion: 1
        });
        expect(client).toBeDefined();
    });

    it('should make a GET request', async () => {
        const client = new Aldi();
        requestMock.mockReturnValueOnce({
            statusText: 'OK',
            data: {
                message: 'Hello World'
            }
        });
        const response = await client.get('/');
        expect(response).toStrictEqual({ message: 'Hello World' });
    });

    it('should error from the GET request', async () => {
        const client = new Aldi();
        requestMock.mockReturnValueOnce({
            statusText: 'Internal Server Error'
        });
        try {
            await client.get('/');
        } catch (e) {
            expect(e).toBeDefined();
        }
    });

    it('should log the request in the console', async () => {
        const logSpy = jest.spyOn(console, 'log');
        logSpy.mockImplementation(() => {});
        const client = new Aldi({
            verbose: true
        });
        requestMock.mockReturnValueOnce({
            statusText: 'OK'
        });
        await client.get('/');
        expect(logSpy).toHaveBeenCalledTimes(3);
    });

    it('should create default headers', () => {
        const client = new Aldi();
        const headers = client.createHeader();
        expect(headers).toStrictEqual({
            'Content-Type': 'application/json',
            'User-Agent': 'aldi-wrapper'
        });
    });

    it('should create properly formatted URL from query', () => {
        const client = new Aldi();
        const url = client.createURL('', {
            test: 'test'
        });
        expect(url).toBe('https://webservice.aldi.nl/api/v1/?test=test');
    });
});
