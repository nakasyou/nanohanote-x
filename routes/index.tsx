import { Head, Link } from "aleph/react"
import Header from "../components/Header.tsx"

export default function Home() {
  return (
    <>
      <Head>
        <title>NanohaNote</title>
      </Head>
      <Header />
      <div>
        <div>
          <img src="/nanohanote.svg" class="mx-auto"/>
        </div>
        <div class="text-center">NanohaNoteは、「じぶん」で作る学習用ノートブックです。</div>
      </div>
    </>
  );
}
