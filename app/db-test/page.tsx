'use client';

import { useEffect, useState } from 'react';

interface TestResult {
  success: boolean;
  message: string;
  data?: {
    connectionStatus: string;
    accountCount: number;
    sampleAccounts: Array<Record<string, unknown>>;
  };
  error?: string;
  timestamp: string;
}

export default function DatabaseTestPage() {
  const [result, setResult] = useState<TestResult | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function testConnection() {
      try {
        setLoading(true);
        const response = await fetch('/api/db-test');
        const data: TestResult = await response.json();
        setResult(data);
      } catch (error) {
        setResult({
          success: false,
          message: 'Failed to test database connection',
          error: error instanceof Error ? error.message : 'Unknown error',
          timestamp: new Date().toISOString(),
        });
      } finally {
        setLoading(false);
      }
    }

    testConnection();
  }, []);

  return (
    <main className="min-h-screen flex items-center justify-center bg-gradient-to-br from-blue-50 to-indigo-100 p-6">
      <div className="max-w-4xl w-full">
        <div className="bg-white rounded-2xl shadow-xl p-8 md:p-12">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-2">
            Database Connection Test
          </h1>
          <p className="text-lg text-gray-600 mb-8">
            Testing connection to Azure SQL Database using the accounts table
          </p>

          {loading ? (
            <div className="flex items-center justify-center py-12">
              <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-600"></div>
              <span className="ml-4 text-gray-600">Testing connection...</span>
            </div>
          ) : result ? (
            <div className="space-y-6">
              {/* Connection Status */}
              <div
                className={`p-6 rounded-lg border-2 ${
                  result.success
                    ? 'bg-green-50 border-green-200'
                    : 'bg-red-50 border-red-200'
                }`}
              >
                <div className="flex items-center mb-4">
                  <div
                    className={`w-12 h-12 rounded-full flex items-center justify-center mr-4 ${
                      result.success
                        ? 'bg-green-100'
                        : 'bg-red-100'
                    }`}
                  >
                    {result.success ? (
                      <svg
                        className="w-6 h-6 text-green-600"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M5 13l4 4L19 7"
                        />
                      </svg>
                    ) : (
                      <svg
                        className="w-6 h-6 text-red-600"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M6 18L18 6M6 6l12 12"
                        />
                      </svg>
                    )}
                  </div>
                  <div>
                    <h2
                      className={`text-2xl font-bold ${
                        result.success ? 'text-green-800' : 'text-red-800'
                      }`}
                    >
                      {result.success ? 'Connection Successful!' : 'Connection Failed'}
                    </h2>
                    <p
                      className={`text-sm ${
                        result.success ? 'text-green-600' : 'text-red-600'
                      }`}
                    >
                      {result.message}
                    </p>
                  </div>
                </div>
              </div>

              {/* Error Message */}
              {result.error && (
                <div className="p-4 bg-red-50 border border-red-200 rounded-lg">
                  <h3 className="font-semibold text-red-800 mb-2">Error Details:</h3>
                  <p className="text-red-600 text-sm font-mono">{result.error}</p>
                </div>
              )}

              {/* Success Data */}
              {result.success && result.data && (
                <div className="space-y-4">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div className="bg-gray-50 rounded-lg p-4">
                      <div className="font-semibold text-gray-700 mb-1">Connection Status</div>
                      <div className="text-gray-900 text-lg">
                        {result.data.connectionStatus}
                      </div>
                    </div>
                    <div className="bg-gray-50 rounded-lg p-4">
                      <div className="font-semibold text-gray-700 mb-1">Accounts Count</div>
                      <div className="text-gray-900 text-lg">
                        {result.data.accountCount.toLocaleString()}
                      </div>
                    </div>
                  </div>

                  {/* Sample Accounts */}
                  {result.data.sampleAccounts && result.data.sampleAccounts.length > 0 && (
                    <div className="bg-gray-50 rounded-lg p-4">
                      <h3 className="font-semibold text-gray-800 mb-3">
                        Sample Accounts (First 5)
                      </h3>
                      <div className="overflow-x-auto">
                        <pre className="text-xs bg-white p-4 rounded border overflow-auto max-h-96">
                          {JSON.stringify(result.data.sampleAccounts, null, 2)}
                        </pre>
                      </div>
                    </div>
                  )}
                </div>
              )}

              {/* Timestamp */}
              <div className="text-sm text-gray-500 pt-4 border-t">
                Tested at: {new Date(result.timestamp).toLocaleString()}
              </div>
            </div>
          ) : null}
        </div>
      </div>
    </main>
  );
}

