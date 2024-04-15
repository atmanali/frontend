import { Html, Head, Main, NextScript, DocumentProps } from 'next/document';
import { documentGetInitialProps, DocumentHeadTags } from '@mui/material-nextjs/v14-pagesRouter';
import type { DocumentHeadTagsProps } from '@mui/material-nextjs/v14-pagesRouter';
export default function Document(props: DocumentProps & DocumentHeadTagsProps) {
  return (
    <Html lang={'fr'}>
      <Head>
        <DocumentHeadTags {...props} />
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}

Document.getInitialProps = async (ctx: any) => {
  return await documentGetInitialProps(ctx);
};
