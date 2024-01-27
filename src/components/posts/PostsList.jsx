import React, { useCallback } from 'react';
import { useParams } from 'react-router-dom';

import { BackButton, DataStatusLayout, RouteHeader } from '..';
import useFetchData from '../../hooks/useFetchData';
import PostService from '../../services/postService';
import PostCard from './PostCard'

const PostsList = () => {
  const { userID } = useParams();
  const getPostsByUserId = useCallback(() => PostService.getPostsByUserId(userID), [userID]);
  const { isLoading, data: posts, error } = useFetchData(getPostsByUserId);

  return (
    <section className="container mx-auto p-8">
      <BackButton />
      <RouteHeader headerName={`Posts list for user: ${userID}`} />
      <DataStatusLayout isLoading={isLoading} error={error} dataLength={posts?.length}>
        {!!posts?.length && (
          <ul className="grid gap-6 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3">
            {posts.map(post => (
              <PostCard key={post.id} {...post} />
            ))}
          </ul>
        )}
      </DataStatusLayout>
    </section>
  );
};

export default PostsList;
