"use server"

import { notFound } from "next/navigation"
import fetchData from "./fetchData"

export default async function getPostcard ({id}:{id: string}) {
    const query = `
        query Postcard($documentId: ID!) {
            postcard(documentId: $documentId) {
                documentId
                name
                icon {
                url
                }
                marker {
                url
                }
                model {
                url
                }
            }
            }
    `

    const json = await fetchData<postcardT>({
        query,
        variables: {
            documentId: id
        }
    })

    return json.data.postcard
}