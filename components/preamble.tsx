type preambleProps = {
  title: string;
  overview: string;
  paragraph: string;
};

export default function Preamble({
  title,
  overview,
  paragraph
}: preambleProps) {
  return (
    <div className="flex flex-col items-center text-center">
        <h2 className="text-3xl mb-4 mx-10">{ title }</h2>
        <h3 className="text-xl mb-4 mx-10">{ overview }</h3>
        <p className="text-gray-600 mx-10">{paragraph}</p>
    </div>
  );
}