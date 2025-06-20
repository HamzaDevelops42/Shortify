import clientPromise from "@/lib/mongodb"


export async function POST(request) {
    const body = await request.json()
    const client = await clientPromise
    const db = client.db("Shortify")
    const collection = db.collection("links")

    // Check if the prefered Url already exists or not
    const isAlreadyPresent = await collection.findOne({preferredUrl: body.preferredUrl})
    console.log(isAlreadyPresent,body.preferredUrl)
    if (isAlreadyPresent) {
        return Response.json({ success: false, error: true, message: 'URL already exists!' })
    }

    const result = await collection.insertOne({ url: body.url, preferredUrl: body.preferredUrl })

    return Response.json({ success: true, error: false, message: 'URL Generated Successfully' })

}