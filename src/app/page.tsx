function getAndLogEnvVariables() {
  const envVars = process.env;

  console.log('--------------------------------------------------');
  console.log('🚀 Server Component: ALL Environment Variables 🚀');
  console.log('--------------------------------------------------');

  const loggedVars = Object.keys(envVars).map(key => ({
    key,
    value: envVars[key],
  }));

  console.log(loggedVars);
  console.log('--------------------------------------------------');

  return loggedVars;
}


export default function Home() {
  const envVariables = getAndLogEnvVariables();

  return (
    <div className="min-h-screen bg-gray-50 p-6 sm:p-10">
      <div className="max-w-5xl mx-auto bg-white shadow-2xl rounded-xl p-8 sm:p-12">
        
        <h1 className="text-4xl font-extrabold text-gray-900 border-b-4 border-emerald-500 pb-4 mb-8">
          🌐 App Router ENV Variable Display
        </h1>
        
        <p className="text-lg text-gray-600 mb-8">
          This data was read directly from <code className="bg-emerald-100 p-1 rounded font-mono text-emerald-800">process.env</code> inside a **Server Component** and rendered on the server.
        </p>

        <p className="text-red-700 font-semibold mb-8 p-4 bg-red-100 rounded-lg border border-red-300">
            ⚠️ **IMPORTANT**: Check your **terminal/console** where the Next.js server is running for the complete and neatly logged list.
            This webpage displays the same values that were logged.
        </p>

        <h2 className="text-2xl font-bold text-gray-800 mt-10 mb-6">
          Exposed Environment Variables ({envVariables.length})
        </h2>

        <div className="overflow-x-auto shadow-lg rounded-lg border border-gray-200">
          <table className="min-w-full divide-y divide-gray-200">
            <thead className="bg-gray-50">
              <tr>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Variable Name
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Value
                </th>
              </tr>
            </thead>
            <tbody className="bg-white divide-y divide-gray-100">
              {envVariables.map((env) => (
                <tr key={env.key} className="hover:bg-indigo-50 transition duration-100">
                  <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
                    <code className="font-mono bg-blue-50 text-blue-700 p-1 rounded">
                      {env.key}
                    </code>
                  </td>
                  <td className="px-6 py-4 text-sm text-gray-700 break-words max-w-2xl">
                    <code className="font-mono text-green-700">
                      {env.value}
                    </code>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}