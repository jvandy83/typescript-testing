import { Utils } from '../app/Utils';

describe('Utils test suite', () => {
	test('first test', () => {
		const result = Utils.toUpperCase('abc');
		expect(result).toBe('ABC');
	});

	test('pars simple URL', () => {
		const parsedUrl = Utils.parseUrl('http://localhost:8080/login');
		expect(parsedUrl.href).toBe('http://localhost:8080/login');
		expect(parsedUrl.port).toBe('8080');
		expect(parsedUrl.protocol).toBe('http:');
		expect(parsedUrl.query).toEqual({});
	});

	test('parse URL with query', () => {
		const parsedUrl = Utils.parseUrl(
			'http://localhost:8080/login?user=user&password=pass',
		);
		const expectedQuery = {
			user: 'user',
			password: 'pass',
		};
		expect(parsedUrl.query).toEqual(expectedQuery);
		expect(expectedQuery).toBe(expectedQuery);
	});

	test('test invalid url', () => {
		function expectError() {
			Utils.parseUrl('');
		}
		expect(expectError).toThrowError();
	});
	test.only('test invalid url with arrow function', () => {
		expect(() => Utils.parseUrl('')).toThrowError();
	});
	test.only('test invalid url with try catch block', () => {
		try {
			Utils.parseUrl('');
		} catch (error) {
			expect(error).toBeInstanceOf(Error);
			expect(error).toHaveProperty('message', 'Empty url');
		}
	});
});
