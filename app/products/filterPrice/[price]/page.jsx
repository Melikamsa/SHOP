"use client";
import { useEffect, useState } from "react";
import { useParams } from "next/navigation";
import "@/styles/globals.css";
import Image from "next/image";
import Link from "next/link";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Information from "@/components/Information";
import SideBar from "@/components/SideBar";

function Price() {
  const params = useParams();
  const [priceData, setPriceData] = useState([]);

  useEffect(() => {
    fetch(`https://6638e1b44253a866a24f88d2.mockapi.io/products`)
      .then((Response) => Response.json())
      .then((Result) =>
        setPriceData(Result.filter((item) => item.price === params.price))
      )
      .catch((err) => console.log(err));
  }, [params]);

  return (
    <>
      <div>
        <>
          <Header />

          <section className="m-2 sm:m-3 max-sm:flex-col flex max-sm:items-center sm:justify-between gap-5">
            <aside className="w-[300px]">
              <SideBar />
            </aside>

            <main className="max-sm:my-5 flex flex-wrap items-center  justify-around gap-2">
              {priceData.map((data) => {
                return (
                  <Link href={`/products/${data.id}`}>
                    <div className="bg-[#737373] w-[280px] sm:w-[250px] h-[450px] sm:h-[400px] flex p-5 flex-col items-center rounded-lg text-center">
                      <Image
                        className="rounded-lg"
                        width={250}
                        height={250}
                        alt={"img"}
                        src={data.images[0]}
                      />
                      <p className="my-3">{data.title}</p>
                      <p>{data.price} $</p>
                    </div>
                  </Link>
                );
              })}
            </main>
          </section>
          <Information />
          <Footer />
        </>
      </div>
    </>
  );
}

export default Price;