import { useState } from 'react';
import { Card, Container, Button } from 'react-bootstrap';

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
    <>
      <h1 className="display-4 p-3">Quote of the Day</h1>
      <Container>
        <Button onClick={fetching}>Obtain</Button>
      </Container>
      <Container className="my-3">
        <Card
          style={{ backgroundColor: 'rgb(179, 230, 230)', maxWidth: '600px' }}
        >
          <Card.Title className="text-center m-5">{content}</Card.Title>
        </Card>
        {author ? <Card.Footer>{author}</Card.Footer> : null}
      </Container>
    </>
  );
}

export default Home;
