import { articles } from "../../assets/article";

export const LatestArticles = () => {
  return (
    <section className="mt-20 py-16 bg-gray-50">
      <div className="max-w-6xl mx-auto px-6">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-textBold">
            Artikel Terbaru
          </h2>
          <p className="text-textParagraf mt-2">
            Update informasi & tips seputar dunia otomotif
          </p>
        </div>
        <div className="grid md:grid-cols-3 gap-8">
          {articles.map((article) => (
            <div
              key={article.id}
              className="bg-white rounded-2xl shadow hover:shadow-lg transition overflow-hidden"
            >
              <img
                src={article.image}
                alt={article.title}
                className="w-full h-48 object-cover"
              />
              <div className="p-6">
                <p className="text-sm text-gray-400">{article.date}</p>
                <h3 className="text-lg font-semibold text-textBold mt-2">
                  {article.title}
                </h3>
                <p className="text-gray-600 mt-2 text-sm leading-relaxed">
                  {article.excerpt}
                </p>
                <button className="mt-4 text-botton font-medium hover:underline">
                  Baca Selengkapnya →
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
