/**
 * @jest-environment jsdom
 */

import API from "../src/API";

describe('API', () => {

    it('API.skypeTokenAuth() should call fetch', async () => {
        const token = {
            chatId: '',
            token: ''
        };

        (global as any).fetch = jest.fn(() => Promise.resolve());

        await API.skypeTokenAuth(token);

        expect(fetch).toHaveBeenCalledTimes(1);
    });

    it('API.skypeTokenAuth() should throw an error if API does not succeed', async () => {
        const token = {
            chatId: '',
            token: ''
        };

        (global as any).fetch = jest.fn(() => Promise.reject());

        try {
            await API.skypeTokenAuth(token);
        } catch (error) {
            expect(error).not.toBe(undefined);
        }
    });

    it('API.createObject() should call fetch', async () => {
        const id = 'id';
        const file =  new File([""], "filename", { type: 'text/html' });
        const token = {
            chatId: '',
            token: ''
        };

        (global as any).fetch = jest.fn(() => Promise.resolve({
            json: () => Promise.resolve({})
        }));

        await API.createObject(id, file, token);

        expect(fetch).toHaveBeenCalledTimes(1);
    });

    it('API.createObject() should throw an error if API does not succeed', async () => {
        const id = 'id';
        const file =  new File([""], "filename", { type: 'text/html' });
        const token = {
            chatId: '',
            token: ''
        };

        (global as any).fetch = jest.fn(() => Promise.reject());

        try {
            await API.createObject(id, file, token);
        } catch (error) {
            expect(error).not.toBe(undefined);
        }
    });

    it('API.createObject() should throw an error if file exceeds size allowed', async () => {
        const id = 'id';
        const file =  new File([""], "filename", { type: 'text/html' });
        Object.defineProperty(file, 'size', { value: 20710770 });

        const token = {
            chatId: '',
            token: ''
        };

        (global as any).fetch = jest.fn(() => Promise.reject());

        try {
            await API.createObject(id, file, token);
        } catch (error) {
            expect(error).not.toBe(undefined);
        }
    });

    it('API.uploadDocument() should call fetch', async () => {
        const documentId = 'documentId';
        const file =  new File([""], "filename", { type: 'text/html' });
        const token = {
            chatId: '',
            token: ''
        };

        (global as any).fetch = jest.fn(() => Promise.resolve());

        await API.uploadDocument(documentId, file, token);

        expect(fetch).toHaveBeenCalledTimes(1);
    });

    it('API.uploadDocument() should throw an error if API does not succeed', async () => {
        const documentId = 'documentId';
        const file =  new File([""], "filename", { type: 'text/html' });
        const token = {
            chatId: '',
            token: ''
        };

        (global as any).fetch = jest.fn(() => Promise.reject());

        try {
            await API.uploadDocument(documentId, file, token);
        } catch (error) {
            expect(error).not.toBe(undefined);
        }
    });

    it('API.getViewStatus() should call fetch', async () => {
        const fileMetadata = {
            fileSharingProtocolType: 0,
            id: 'id',
            name: 'name',
            size: 0,
            type: 'type',
            url: 'url'
        };
        const token = {
            chatId: '',
            token: ''
        };

        (global as any).fetch = jest.fn(() => Promise.resolve({
            json: () => Promise.resolve({
                view_location: 'view_location'
            })
        }));

        await API.getViewStatus(fileMetadata, token);

        expect(fetch).toHaveBeenCalledTimes(1);
    });

    it('API.getViewStatus() should throw an error if API does not succeed', async () => {
        const fileMetadata = {
            fileSharingProtocolType: 0,
            id: 'id',
            name: 'name',
            size: 0,
            type: 'type',
            url: 'url'
        };
        const token = {
            chatId: '',
            token: ''
        };

        (global as any).fetch = jest.fn(() => Promise.reject());

        try {
            await API.getViewStatus(fileMetadata, token);
        } catch (error) {
            expect(error).not.toBe(undefined);
        }
    });

    it('API.getView() should call fetch', async () => {
        const fileMetadata = {
            fileSharingProtocolType: 0,
            id: 'id',
            name: 'name',
            size: 0,
            type: 'type',
            url: 'url'
        };
        const viewLocation = 'viewLocation';
        const token = {
            chatId: '',
            token: ''
        };

        (global as any).fetch = jest.fn(() => Promise.resolve({
            blob: () => Promise.resolve()
        }));

        await API.getView(fileMetadata, viewLocation, token);

        expect(fetch).toHaveBeenCalledTimes(1);
    });

    it('API.getView() should throw an error if API does not succeed', async () => {
        const fileMetadata = {
            fileSharingProtocolType: 0,
            id: 'id',
            name: 'name',
            size: 0,
            type: 'type',
            url: 'url'
        };
        const viewLocation = 'viewLocation';
        const token = {
            chatId: '',
            token: ''
        };

        (global as any).fetch = jest.fn(() => Promise.reject());

        try {
            await API.getView(fileMetadata, viewLocation, token);
        } catch (error) {
            expect(error).not.toBe(undefined);
        }
    });
})