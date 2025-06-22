"use client"
import { InputWithLabel } from "@/components/input";
import Button from "@/components/button";
import { useState } from "react";
import Link from "next/link";
import { ToastContainer, toast } from 'react-toastify';
import Loader from "@/components/loader";

export default function Home() {
  const [url, seturl] = useState("")
  const [preferredUrl, setpreferredUrl] = useState("")
  const [Generated, setGenerated] = useState({ success: false, Url: "", message: "" })
  const [loading, setloading] = useState(false)

  const generate = () => {
    if (url.length < 3 || preferredUrl.length < 3) {
      toast.error("minimum length is 3")
    } else {
      setGenerated({ success: false, Url: "", message: "" })
      setloading(true)
      const myHeaders = new Headers();
      myHeaders.append("Content-Type", "application/json");

      const raw = JSON.stringify({
        "url": url,
        "preferredUrl": preferredUrl
      });

      const requestOptions = {
        method: "POST",
        headers: myHeaders,
        body: raw,
        redirect: "follow"
      };

      fetch(`${process.env.NEXT_PUBLIC_HOST}/api/generate/`, requestOptions)
        .then((response) => response.json())
        .then((result) => {
          if (result.success) {
            setGenerated({ success: true, Url: `${process.env.NEXT_PUBLIC_HOST}/links/${preferredUrl}`, message: result.message })
            toast.success(result.message)
            seturl("")
            setpreferredUrl("")
          } else {
            toast.error(result.message)
          }
        })
        .catch((error) => {
          console.error(error);
          toast.error("Something went wrong");
        })
        .finally(() => setloading(false))
    }
  }

  return (
    <>
      <ToastContainer
        position="top-right"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick={false}
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="light"
      />
      <main className="text-black mt-20 py-10 w-[90%]  md:w-1/3 mx-auto h-full bg-white rounded-md bg-clip-padding backdrop-filter backdrop-blur-md bg-opacity-10 border border-gray-200">
        <div className=" flex flex-col gap-8 justify-center items-center">
          <div className="text-black w-[80%] flex flex-col gap-5">
            <InputWithLabel label="Enter the Url" placeholder="" className="" value={url} onChange={(e) => seturl(e.target.value)} />
            <InputWithLabel label="Enter the prefered Url" placeholder="" className="" value={preferredUrl} onChange={(e) => setpreferredUrl(e.target.value)} />
          </div>
          <Button text="Generate" onClick={generate} />
        </div>
        <div>
           {loading && <div className="w-full my-10 flex justify-center items-center">
          <Loader />
        </div>}
          {Generated.success && <div className="relative">
            <div className={`mt-7 mx-10 block px-2.5 pb-2.5 pt-4 text-sm  bg-transparent rounded-lg border-1 border-green-600 text-green-400 }`}>
              <div className="mb-2">{Generated.message}</div>
              <Link className="underline underline-offset-2 text-black break-words whitespace-normal " href={Generated.Url} target="__blank">{Generated.Url}</Link>
            </div>
          </div>}
        </div>
       

      </main>


    </>
  );
}

