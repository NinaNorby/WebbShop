import '@testing-library/jest-dom';
import { beforeAll, afterEach, afterAll } from 'vitest';
import { server } from './Mocks/server'
//! Lägg in MSW-server sen 


beforeAll(() => server.listen());
afterEach(() => server.resetHandlers());
afterAll(() => server.close());