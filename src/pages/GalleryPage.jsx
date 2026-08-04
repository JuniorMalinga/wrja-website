import GalleryItem from "../components/GalleryItem";

const placeholderItems = Array.from({ length: 8 }, (_, index) => ({
  id: index + 1,
  photoUrl: `https://placehold.co/500x400/1a1a1a/666666?text=Gallery+${index + 1}`,
  caption: "Placeholder caption",
}));

export default function GalleryPage() {
  return (
    <div className="simple-page">
      <h1>Gallery</h1>
      <div className="gallery-grid">
        {placeholderItems.map((item) => (
          <GalleryItem key={item.id} item={item} />
        ))}
      </div>
    </div>
  );
}
