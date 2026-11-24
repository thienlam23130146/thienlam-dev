import Image from 'next/image';

export default function AboutPage() {
  return (
    <main className="p-8">
      <div className="dark:hidden">
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
          className="rounded-full mt-4"
        />
      </div>
      
      <div className=" hidden dark:block">
        <h1 className="text-2xl font-bold">
          Giới thiệu
        </h1>
        <p className="mt-2">
          Gon Niu'uyen 
        </p>

        <Image
        src="/avatablue.jpg"
        alt="Gon Niu'uyen"
        width={500}
        height={500}
        className="rounded-full mt-4"
        />
      </div>      
    </main>
  );
}