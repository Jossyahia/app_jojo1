"use client"
import Results from "./../components/Results";

export default async function Home() {
  //const likes = searchParams.likes || "fetchTrending";
  try {
    const res = await fetch(
      `https://victorious-teal-school-uniform.cyclic.app/api`,
    );
    const data = await res.json();
    const results = data;
    return (
      <div>
        <Results results={results} />
      </div>
    );
  } catch (error) {
    if (!res.ok) {
      throw new Error("Failed to fetch data"); // this will be caught by the error page and passed to the page as props
    }
  }

}
