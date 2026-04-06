interface VowPageProps {
  params: {
    id: string;
  };
}

export default async function Vow({ params }: VowPageProps) {
  const { id } = await params;
  return (
    <>
      <h1>{id}</h1>
    </>
  );
}
