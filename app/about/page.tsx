import Image from 'next/image';

export default function AboutPage() {
  return (
    <main className="p-8">
      <h1 className="text-2xl font-bold">
        Giới thiệu
      </h1>
      <p className="mt-2">
        Mình là sinh viên Vật lý yêu thích web.
      </p>
      <Image
        src="/ThienLamAvata.png"
        alt="Thien Lam"
        width={500}
        height={500}
        className="rounded-full"
      />
    </main>
  );
}