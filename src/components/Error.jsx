export default function Error({ error, description }) {
  return (
    <div className="error">
      <h2>{error.message}</h2>
      <h3>{description}</h3>
    </div>
  );
}
