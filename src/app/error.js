"use client";

export default function Error({ error, reset }) {
  return (
    <div>
      <h2> We are sorry: something went wrong on this page!</h2>
      <p>{error.message}</p>
      <button onClick={() => reset()}>Try again</button>
    </div>
  );
}
