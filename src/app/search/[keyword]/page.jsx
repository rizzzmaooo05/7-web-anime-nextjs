import Header from "@/components/Header";
import Card from "@/components/Card";
import { fetcher } from "@/libs/fetcher";

export const generateMetadata = ({ params }) => {
  let keyword = params.keyword
  return {
    title: "Pencarian untuk Anime " + keyword + " - Rizzz Anime"
  }
}

export default async function Page({ params }) {
  const response = await fetcher(
    `https://api.jikan.moe/v4/anime?q=${params.keyword}`
  );
  const datas = response.data;

  return (
    <>
      <Header />

      <main className="p-2 flex flex-col justify-center">
        <h3 className="font-bold text-xl mb-2 capitalize">
          Pencarian untuk Anime {params.keyword}
        </h3>
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4">
          {datas.map((data) => {
            return (
              <Card
                imgSource={data.images.jpg.image_url}
                id={data.mal_id}
                title={data.title}
                key={data.mal_id}
              />
            );
          })}
        </div>
      </main>
    </>
  );
}
