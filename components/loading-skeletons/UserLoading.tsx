export const UserLoading = () => {
  return (
    <div className="w-full flex flex-col flex-1 gap-2 doublePaddingContainer mt-16">
      <div className="w-full min-h-30 skeleton"></div>
      <div className="w-full min-h-20 skeleton"></div>
      <div className="w-80 min-h-10 skeleton mt-4"></div>
      <div className="w-full min-h-20 skeleton mt-4"></div>
      <div className="w-full min-h-20 skeleton"></div>
      <div className="w-full min-h-20 skeleton"></div>
      <div className="w-full min-h-20 skeleton"></div>
    </div>
  );
};
