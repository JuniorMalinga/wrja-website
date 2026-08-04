export default function GalleryItem({ item }) {
  return (
    <div className="gallery-item">
      <img src={item.photoUrl} alt={item.caption} />
      <p>{item.caption}</p>
    </div>
  );
}
