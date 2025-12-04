export default function Home() {
  return (
    <main className="min-h-screen flex items-center justify-center bg-gradient-to-br from-blue-50 to-indigo-100">
      <div className="max-w-2xl mx-auto px-6 py-12 text-center">
        <div className="bg-white rounded-2xl shadow-xl p-8 md:p-12">
          <div className="mb-6">
            <div className="inline-flex items-center justify-center w-16 h-16 bg-green-100 rounded-full mb-4">
              <svg
                className="w-8 h-8 text-green-600"
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
            </div>
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
              Deployment Test Successful!
            </h1>
            <p className="text-lg text-gray-600 mb-6">
              Your Next.js 15 application is running on Azure App Service
            </p>
          </div>
          
          <div className="border-t border-gray-200 pt-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-sm">
              <div className="bg-gray-50 rounded-lg p-4">
                <div className="font-semibold text-gray-700 mb-1">Framework</div>
                <div className="text-gray-600">Next.js 15</div>
              </div>
              <div className="bg-gray-50 rounded-lg p-4">
                <div className="font-semibold text-gray-700 mb-1">Runtime</div>
                <div className="text-gray-600">Node.js 24 LTS</div>
              </div>
              <div className="bg-gray-50 rounded-lg p-4">
                <div className="font-semibold text-gray-700 mb-1">Platform</div>
                <div className="text-gray-600">Azure App Service</div>
              </div>
              <div className="bg-gray-50 rounded-lg p-4">
                <div className="font-semibold text-gray-700 mb-1">Styling</div>
                <div className="text-gray-600">Tailwind CSS</div>
              </div>
            </div>
          </div>
          
          <div className="mt-8 pt-6 border-t border-gray-200">
            <p className="text-sm text-gray-500">
              If you can see this page, your deployment pipeline is working correctly!
            </p>
          </div>
        </div>
      </div>
    </main>
  );
}

