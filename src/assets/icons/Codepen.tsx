
function Codepen() {
  return (
    <a
      className="block hover:text-slate-200 hover:dark:text-stone-800 transition duration-200"
      href="https://codepen.io/ddavidjeong"
      target="_blank"
      rel="noreferrer noopener"
      aria-label="CodePen (opens in a new tab)"
      title="CodePen"
    >
      <span className="sr-only">CodePen</span>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 64 64"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
        className="h-6 w-6"
        aria-hidden="true"
      >
        <path
          d="M3.06 41.732L32 60.932l28.94-19.2V22.268L32 3.068l-28.94 19.2zm57.878 0L32 22.268 3.06 41.732m0-19.463L32 41.47l28.94-19.2M32 3.068v19.2m0 19.463v19.2"
          strokeWidth="5"
        ></path>
      </svg>
    </a>
  );
}

export default Codepen;
