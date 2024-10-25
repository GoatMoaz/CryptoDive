import Nav from "@/components/Home/Nav";

export default function Layout({ children }) {
  return (
    <div>
      <Nav />
      {children}
    </div>
  );
}
