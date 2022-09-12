import { GetStaticPaths, GetStaticProps } from 'next';
import Head from 'next/head';
import { useRouter } from 'next/router';
import { CodeSnippet } from './CodeSnippet';
import { fetchCodeSnippets } from './fetchCodeSnippets';

interface Props {
  snippet: CodeSnippet;
}

export const getStaticPaths: GetStaticPaths = async () => {
  const snippets = await fetchCodeSnippets();
  return {
    paths: snippets.map(({ name }) => ({
      params: { name },
    })),
    fallback: false,
  };
};

export const getStaticProps: GetStaticProps<Props, { name: string }> = async ({ params }) => {
  const snippets = await fetchCodeSnippets();
  const snippet = snippets.find(x => x.name === params.name);
  if (snippet == null) {
    throw new Error(`unknown code snippet: ${params.name}`);
  }

  return { props: { snippet } };
};

export default function CodeSnippetPage({ snippet: { name, lang, code } }: Props) {
  const router = useRouter();
  const { padding = '0' } = router.query ?? {};

  return (
    <>
      <Head>
        <title>{name}</title>
      </Head>
      <pre style={{ padding: padding as string }}>
        <code className={`language-${lang}`}>{code}</code>
      </pre>
    </>
  );
}
