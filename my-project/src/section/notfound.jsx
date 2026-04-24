 export default function NotFound(){
  return (
  <div className="min-h-screen flex items-center justify-center bg-white text-gray-900 dark:bg-black dark:text-white bg-gradient-to-br from-gray-100 via-white to-emerald-100 dark:from-black dark:via-gray-900 dark:to-green-900 px-4">

  <div className="text-center max-w-md w-full">

    <h1 className="text-[120px] sm:text-[160px] font-extrabold text-gray-900 dark:text-white">
      404
    </h1>

    <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 dark:text-white mb-3">
      Page Not Found
    </h2>

    <p className="text-gray-600 dark:text-gray-300 text-sm sm:text-base mb-6">
      Sorry, the page you are looking for doesn’t exist or has been moved.
    </p>

    <a
      href="/"
      className="inline-block rounded-lg bg-black text-white dark:bg-white dark:text-black px-6 py-3 text-sm sm:text-base font-semibold transition hover:opacity-80"
    >
      Go Back Home
    </a>

  </div>

</div>
  );
};


