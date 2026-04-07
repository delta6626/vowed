export async function GET({ params }: { params: Promise<{ id: string }> }) {
  const { id } = await params;
}
