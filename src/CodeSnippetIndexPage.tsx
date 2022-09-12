import { GetStaticProps } from 'next';
import Head from 'next/head';
import { CodeSnippet } from './CodeSnippet';
import { fetchCodeSnippets } from './fetchCodeSnippets';

interface Props {
  snippets: CodeSnippet[];
}

export const getStaticProps: GetStaticProps<Props> = async () => {
  const snippets = await fetchCodeSnippets();

  return { props: { snippets } };
};

export default function CodeSnippetIndexPage({ snippets }: Props) {
  return (
    <>
      <Head>
        <title>Seokju's Code Snippets</title>
      </Head>
      <ul>
        {snippets.map(snippet => (
          <li key={snippet.name}>
            <a href={`/codes/${snippet.name}`}>{snippet.name}</a>
          </li>
        ))}
      </ul>
    </>
  );
}
