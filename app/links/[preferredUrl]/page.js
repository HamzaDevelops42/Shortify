import clientPromise from "@/lib/mongodb"
import { redirect } from "next/navigation"
import Button from "@/components/button";
import Link from "next/link";

export default async function Page({ params }) {
    const { preferredUrl } = await params

    const client = await clientPromise
    const db = client.db("Shortify")
    const collection = db.collection("links")

    const doc = await collection.findOne({ preferredUrl })
    if (doc) {
        redirect(doc.url)
    } else {
        return (
            <>

                <main className=" text-black flex flex-col gap-8 justify-center items-center mt-20 py-10  w-1/3 mx-auto h-full bg-white rounded-md bg-clip-padding backdrop-filter backdrop-blur-md bg-opacity-10 border border-gray-200">

                    <div className="text-black w-[80%] text-center">
                        No Such Url Exists Create One by clicking on the button below
                    </div>
                    <Link href={"/"}>
                    <Button text="Generate" /></Link>

                </main>


            </>
        );
    }

}