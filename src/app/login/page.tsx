'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';
import { customerAuth } from '@/lib/auth';
import Link from 'next/link';

export default function LoginPage() {
  const [credentials, setCredentials] = useState({ identifier: '', password: '' });
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');
  const router = useRouter();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setError('');

    try {
      const response = await customerAuth.login(credentials);

      customerAuth.setAuth(response.jwt, response.user);
      router.push('/');
    } catch (err: any) {
      // @fix: any type
      setError(err.response?.data?.error?.message || err.message || 'Error al iniciar sesión');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50">
      <div className="max-w-md w-full space-y-8">
        <div>
          <h2 className="mt-6 text-center text-3xl font-extrabold text-gray-900">
            Iniciar Sesión
          </h2>
          <p className="mt-2 text-center text-sm text-gray-600">
            ¿No tienes cuenta?{' '}
            <Link href="/register" className="font-medium text-blue-600 hover:underline hover:text-blue-500">
              Crear cuenta
            </Link>
          </p>
        </div>

        <form className="mt-8 space-y-6" onSubmit={handleSubmit}>
          {error && (
            <div className="bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded">
              {error}
            </div>
          )}
          <div className="space-y-1.5 mb-6">
            <label htmlFor="email" className="block text-sm font-medium text-gray-700">
              Email
            </label>
            <input
              id="email"
              name="email"
              type="email"
              required
              className="w-full px-3 py-2 text-black border border-gray-300 rounded-md"
              placeholder="email@example.com"
              value={credentials.identifier}
              onChange={(e) => setCredentials({ ...credentials, identifier: e.target.value })}
            />
          </div>
          <div className="space-y-1.5 mb-8">
            <label htmlFor="password" className="block text-sm font-medium text-gray-700">
              Contraseña
            </label>
            <input
              type="password"
              required
              className="w-full px-3 py-2 text-black border border-gray-300 rounded-md"
              // placeholder="Contraseña"
              value={credentials.password}
              onChange={(e) => setCredentials({ ...credentials, password: e.target.value })}
            />
          </div>
          <button
            type="submit"
            disabled={loading}
            className="w-full bg-blue-600 text-white py-2 px-4 rounded-md hover:bg-blue-700 disabled:opacity-50"
          >
            {loading ? 'Iniciando sesión...' : 'Iniciar Sesión'}
          </button>
        </form>
      </div>
    </div>
  );
}