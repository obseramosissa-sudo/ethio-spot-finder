export function BusinessPhotos({ photos, name }: { photos: string[]; name: string }) {
  if (photos.length === 0) return null;

  return (
    <div className="grid grid-cols-1 gap-2 sm:grid-cols-2 sm:grid-rows-2">
      <div className="relative aspect-[4/3] overflow-hidden rounded-2xl sm:row-span-2">
        <img src={photos[0]} alt={name} className="h-full w-full object-cover" loading="lazy" />
      </div>
      {photos.slice(1, 3).map((photo, i) => (
        <div key={i} className="relative aspect-[4/3] overflow-hidden rounded-2xl">
          <img src={photo} alt={`${name} ${i + 2}`} className="h-full w-full object-cover" loading="lazy" />
        </div>
      ))}
    </div>
  );
}
