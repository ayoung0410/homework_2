import Link from 'next/link';

export default function FirstPost() {
  return (
    <>
      <h1>First Post</h1>
      <h4>
        Hi, my name is Chang Ah-young. My major is Business Administration and my hobby is watching Netflix. Thank you.
      </h4>
      <h2>
        <Link href="/">Back to home</Link>
      </h2>
    </>
  );
}