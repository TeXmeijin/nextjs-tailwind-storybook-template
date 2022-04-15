import Head from 'next/head';
import { useRouter } from 'next/router';
import { ReactNode, useEffect } from 'react';

type Props = {
  children: ReactNode[] | ReactNode;
  meta?: Partial<Meta>;
};

export type Meta = {
  pageTitle: string;
  titleSuffix: string;
  description: string;
  // OGP画像
  previewImage: string;
  // canonical。Path以降のみでよい
  canonicalPath: string;
  noindex: boolean;
};

const DEFAULT_SITE_NAME = 'サイト';
export const PRODUCTION_ORIGIN = 'https://example.com';

export default function Seo({ meta }: Props) {
  const router = useRouter();

  const computedMeta = ((): Meta => {
    const defaultMeta: Meta = {
      pageTitle: DEFAULT_SITE_NAME,
      titleSuffix: 'サイト',
      description: 'サイト',
      previewImage: `${PRODUCTION_ORIGIN}/meta/ogp.png`,
      // hashを取り除く方法がこれしか浮かばなかった
      canonicalPath: router.asPath.replace(/#[a-zA-Z0-9]+$/, ''),
      noindex: !!process.env.NEXT_PUBLIC_NO_INDEX,
    };
    if (meta)
      return {
        ...defaultMeta,
        ...meta,
      };

    return defaultMeta;
  })();

  // @see https://zenn.dev/tak_dcxi/articles/690caf6e9c4e26
  useEffect(() => {
    const viewport = document.querySelector('meta[name="viewport"]');
    function switchViewport() {
      const value = window.outerWidth > 360 ? 'width=device-width,initial-scale=1' : 'width=360';
      if (viewport && viewport.getAttribute('content') !== value) {
        viewport.setAttribute('content', value);
      }
    }
    addEventListener('resize', switchViewport, false);
    switchViewport();
  }, []);

  return (
    <Head>
      <meta name="viewport" content="width=device-width, initial-scale=1" />
      <meta charSet="utf-8" />
      <title>{`${computedMeta.pageTitle} | ${computedMeta.titleSuffix}`}</title>
      <meta name="description" content={computedMeta.description} />
      {computedMeta.noindex ? <meta name="robots" content="noindex" /> : null}

      <link rel="canonical" href={`${PRODUCTION_ORIGIN}${computedMeta.canonicalPath}`} />

      {/* Twitter */}
      <meta name="twitter:card" content="summary_large_image" key="twcard" />
      <meta name="twitter:creator" content="@twitter" key="twhandle" />

      {/* Open Graph */}
      <meta property="og:type" content="website" key="ogtype" />
      <meta property="og:url" content={`${PRODUCTION_ORIGIN}${router.asPath}`} key="ogurl" />
      <meta property="og:image" content={computedMeta.previewImage} key="ogimage" />
      <meta property="og:site_name" content={DEFAULT_SITE_NAME} key="ogsitename" />
      <meta property="og:title" content={`${computedMeta.pageTitle} | ${computedMeta.titleSuffix}`} key="ogtitle" />
      <meta property="og:description" content={computedMeta.description} key="ogdesc" />
    </Head>
  );
}
