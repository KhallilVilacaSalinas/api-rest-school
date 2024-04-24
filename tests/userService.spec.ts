import request from 'supertest';
import { describe, it, expect } from 'vitest';

describe('my first test', () => {
    it('should test the server running', async () => {
        expect('oi').toBe('oi')
    })
})