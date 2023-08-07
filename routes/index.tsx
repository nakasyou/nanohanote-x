import { Head, Link } from "aleph/react";

export default function Index() {
  return (
    <div className="screen index">
      <Head>
        <title>Aleph.js</title>
        <meta name="description" content="The Fullstack Framework in Deno." />
      </Head>
      <p className="logo">
        <img src="./assets/logo.svg" width="75" height="75" title="Aleph.js" />
      </p>
      <h1>
        The Fullstack Framework in Deno.
      </h1>
      <p>
        <strong>Aleph.js</strong> gives you the best developer experience for building web applications<br />{" "}
        with modern toolings.
      </p>
      <div className="external-links">
      </div>
      <nav>
        <Link
          role="button"
          to="/todos"
        >
          Todos App Demo
        </Link>
      </nav>
    </div>
  );
}