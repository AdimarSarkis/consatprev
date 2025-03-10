import Link from 'next/link';

export default function Footer() {
  return (
    <div className="flex flex-col min-h-10">
      <footer className="bg-white shadow mt-auto">
        <div className="container mx-auto px-6 py-4">
          <p className="text-center text-gray-700">
            © {new Date().getFullYear()} Consat'prev. Todos os direitos reservados.
          </p>
        </div>
      </footer>
    </div>
  );
}