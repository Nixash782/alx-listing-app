import Card from '../components/common/Card';
import Button from '../components/common/Button';

export default function Home() {
  return (
    <main className="p-8 space-y-6">
      <h1 className="text-2xl font-bold">ALX Listing App</h1>

      <Card
        title="Sample Listing"
        description="This is a placeholder property listing."
        imageUrl="/assets/placeholder.jpg"
      />

      <Button label="Book Now" />
    </main>
  );
}
