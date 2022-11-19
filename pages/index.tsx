import { useState } from 'react';

function Home() {
  const [content, setContent] = useState<string>('');
  const [author, setAuthor] = useState<string>('');

  const fetching = async (): Promise<void> => {
    let result = await fetch('https://api.quotable.io/random');
    if (result.ok) {
      let response = await result.json();
      setContent(response.content);
      setAuthor(response.author);
    }
  };
  return (
    <div>
      <h1 className="title">Quote of the Day</h1>
      <button className="button" onClick={fetching}>
        Obtain
      </button>
      <div className="output">
        <div className="scroll">{content}</div>
        <div className="author">{author}</div>
      </div>
    </div>
  );
}

export default Home;
