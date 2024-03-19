// components/SearchForm.client.tsx
export default function SearchForm() {
  return (
    <form action="/notes" method="get">
      <input name="query" type="text" placeholder="Search notes..." />
      <button type="submit">Search</button>
    </form>
  );
}
