import { QueryClient, HydrationBoundary, dehydrate } from '@tanstack/react-query';
import { fetchNotes } from '@/lib/api';
import NotesByTagClient from './Notes.client';

type Props = {
  params: Promise<{ page: number; search: string; slug: string[] }>;
};

async function NotesByTag({ params }: Props) {
  const { page, search, slug } = await params;
  const tag = slug[0];
  const queryClient = new QueryClient();

  await queryClient.prefetchQuery({
    queryKey: ['notes', page, search, tag],
    queryFn: () => fetchNotes(page, search, tag),
  });

  return (
    <HydrationBoundary state={dehydrate(queryClient)}>
      <NotesByTagClient tag={tag} />
    </HydrationBoundary>
  );
}

export default NotesByTag;
